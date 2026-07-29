import './style.css';
import { TACTICS_DATA } from './tacticsData.js';
import { TacticsCourtRenderer } from './courtRenderer.js';
import confetti from 'canvas-confetti';

class BasketballTacticsApp {
  constructor() {
    // 複製一份原始預設戰術資料作為「復位 (Reset)」基準
    this.originalTactics = JSON.parse(JSON.stringify(TACTICS_DATA));
    this.tactics = JSON.parse(JSON.stringify(TACTICS_DATA));

    this.currentTacticIndex = 0;
    this.isPlaying = false;
    this.playbackSpeed = 1.0;
    this.animationProgress = 0; // 0 ~ 100
    this.animFrameId = null;
    this.lastTimestamp = null;
    
    this.durationMs = 6000;

    this.initDOM();
    this.initRenderer();
    this.bindEvents();
    this.renderTabs();
    this.loadTactic(0);
  }

  initDOM() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <header class="navbar">
        <div class="brand">
          <div class="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M5.6 5.6C9.2 9.2 9.2 14.8 5.6 18.4"/><path d="M18.4 5.6C14.8 9.2 14.8 14.8 18.4 18.4"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="brand-title">HoopTactics Studio</span>
              <span class="brand-badge">籃球戰術大師版</span>
            </div>
            <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 2px;">Interactive Basketball Tactics & Playboard Studio</div>
          </div>
        </div>

        <div class="nav-actions">
          <button class="nav-btn" id="resetPositionsBtn" style="border-color: rgba(255, 183, 3, 0.5); color: #ffb703;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            復位陣型 (Reset Court)
          </button>
          <button class="nav-btn" id="addTacticBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            自訂戰術 (Custom)
          </button>
          <button class="nav-btn" id="shareBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            分享網站 (Sites Share)
          </button>
        </div>
      </header>

      <nav class="tactics-nav-container" id="tacticsTabs"></nav>

      <main class="main-layout">
        <section class="court-section">
          <div class="court-card">
            <div class="court-header">
              <div class="tactic-title-group">
                <h2 id="currentTacticTitle">戰術載入中...</h2>
                <div class="tactic-subtitle" id="currentTacticCategory"></div>
              </div>
              <div class="legend-bar">
                <div class="legend-item"><span class="legend-dot offense"></span>進攻方 (Offense)</div>
                <div class="legend-item"><span class="legend-dot defense"></span>防守方 (Defense)</div>
                <div class="legend-item"><span class="legend-dot ball"></span>籃球 (Ball)</div>
              </div>
            </div>

            <div class="court-canvas-wrapper" id="courtContainer"></div>

            <div class="controls-bar">
              <div class="progress-container">
                <span class="time-display" id="timeDisplay">0.0s</span>
                <input type="range" class="timeline-slider" id="progressSlider" min="0" max="100" value="0" step="0.1">
                <span class="time-display" style="text-align: right;">5.0s</span>
              </div>

              <div class="playback-btns">
                <div class="btn-group-left">
                  <button class="ctrl-btn" id="restartBtn" title="重頭開始 (Restart)">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                  </button>
                  <button class="ctrl-btn play-primary" id="playBtn" title="播放 / 暫停 (Play/Pause)">
                    <svg id="playIcon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </button>
                  <button class="ctrl-btn" id="resetStepBtn" title="復位此戰術 (Reset Current Tactic)">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                  </button>
                </div>

                <div class="btn-group-right">
                  <span style="font-size: 0.85rem; color: #94a3b8;">播放速度:</span>
                  <select class="speed-select" id="speedSelect">
                    <option value="0.5">0.5x (慢速分析)</option>
                    <option value="1.0" selected>1.0x (標準)</option>
                    <option value="1.5">1.5x (快速)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside class="sidebar-section">
          <div class="panel-card">
            <div class="panel-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              戰術概要 (Overview)
            </div>
            <div id="tacticSummary" style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;"></div>
          </div>

          <div class="key-concept-box">
            <div class="concept-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              核心拆解技術觀念
            </div>
            <div class="concept-body" id="tacticKeyConcepts"></div>
          </div>

          <div class="panel-card" style="flex: 1;">
            <div class="panel-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              即時走位說明 (Live Steps)
            </div>
            <div class="steps-list" id="stepsList"></div>
          </div>
        </aside>
      </main>

      <div class="modal-overlay" id="customModal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>建立新籃球擋拆戰術 (Create Tactic)</h3>
            <button class="close-modal" id="closeModalBtn">&times;</button>
          </div>
          <form id="tacticForm">
            <div class="form-group">
              <label>戰術名稱 (Tactic Name)</label>
              <input type="text" class="form-input" id="inputName" placeholder="例如：假擋外彈雙重擋拆" required>
            </div>
            <div class="form-group">
              <label>戰術分類 (Category)</label>
              <input type="text" class="form-input" id="inputCategory" placeholder="例如：角落反螢幕" required>
            </div>
            <div class="form-group">
              <label>戰術概要 (Summary)</label>
              <textarea class="form-textarea" id="inputSummary" placeholder="簡述此戰術的核心跑位與目的..." required></textarea>
            </div>
            <div class="form-group">
              <label>核心觀念 (以換行分隔)</label>
              <textarea class="form-textarea" id="inputConcepts" placeholder="1. 掩護角度適中&#10;2. 弱側拉開空間"></textarea>
            </div>
            <div class="modal-actions">
              <button type="button" class="nav-btn" id="cancelModalBtn">取消</button>
              <button type="submit" class="submit-btn">建立戰術</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  initRenderer() {
    const courtContainer = document.getElementById('courtContainer');
    this.renderer = new TacticsCourtRenderer(courtContainer);
  }

  renderTabs() {
    const tabsContainer = document.getElementById('tacticsTabs');
    tabsContainer.innerHTML = this.tactics.map((tactic, idx) => `
      <button class="tactic-tab ${idx === this.currentTacticIndex ? 'active' : ''}" data-index="${idx}">
        <span class="tactic-num">${idx + 1}</span>
        ${tactic.name}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.tactic-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        this.loadTactic(index);
      });
    });
  }

  loadTactic(index) {
    this.currentTacticIndex = index;
    const tactic = this.tactics[index];

    document.querySelectorAll('.tactic-tab').forEach((tab, idx) => {
      tab.classList.toggle('active', idx === index);
    });

    document.getElementById('currentTacticTitle').innerText = tactic.name;
    document.getElementById('currentTacticCategory').innerText = tactic.category;
    document.getElementById('tacticSummary').innerText = tactic.summary;
    
    const conceptsEl = document.getElementById('tacticKeyConcepts');
    conceptsEl.innerHTML = tactic.keyConcepts.map(c => `<div style="margin-bottom: 4px;">• ${c}</div>`).join('');

    const stepsListEl = document.getElementById('stepsList');
    stepsListEl.innerHTML = tactic.keyframes.map((kf, kfIdx) => `
      <div class="step-card" data-progress="${kf.progress}" data-kfidx="${kfIdx}">
        <div class="step-header">
          <span class="step-seq">STEP 0${kfIdx + 1}</span>
          <span class="step-time">${kf.time}</span>
        </div>
        <div class="step-desc">${kf.desc}</div>
      </div>
    `).join('');

    stepsListEl.querySelectorAll('.step-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const prog = parseFloat(e.currentTarget.getAttribute('data-progress'));
        this.seekTo(prog);
      });
    });

    this.renderer.setTactic(tactic);
    this.seekTo(0);
  }

  // 復位當前戰術為初始預設座標
  resetCurrentTacticPositions() {
    this.pause();
    const orig = this.originalTactics[this.currentTacticIndex];
    if (orig) {
      this.tactics[this.currentTacticIndex] = JSON.parse(JSON.stringify(orig));
    } else {
      // 若為自訂戰術，復位為第一個預設戰術的陣型
      this.tactics[this.currentTacticIndex].keyframes = JSON.parse(JSON.stringify(this.originalTactics[0].keyframes));
    }
    this.loadTactic(this.currentTacticIndex);
  }

  bindEvents() {
    const playBtn = document.getElementById('playBtn');
    const restartBtn = document.getElementById('restartBtn');
    const resetStepBtn = document.getElementById('resetStepBtn');
    const resetPositionsBtn = document.getElementById('resetPositionsBtn');
    const slider = document.getElementById('progressSlider');
    const speedSelect = document.getElementById('speedSelect');
    const shareBtn = document.getElementById('shareBtn');
    const addTacticBtn = document.getElementById('addTacticBtn');
    const modal = document.getElementById('customModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const tacticForm = document.getElementById('tacticForm');

    playBtn.addEventListener('click', () => this.togglePlay());
    restartBtn.addEventListener('click', () => this.seekTo(0));

    // 復位按鈕事件綁定
    resetStepBtn.addEventListener('click', () => this.resetCurrentTacticPositions());
    resetPositionsBtn.addEventListener('click', () => this.resetCurrentTacticPositions());

    slider.addEventListener('input', (e) => {
      this.pause();
      this.seekTo(parseFloat(e.target.value));
    });

    speedSelect.addEventListener('change', (e) => {
      this.playbackSpeed = parseFloat(e.target.value);
    });

    shareBtn.addEventListener('click', () => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      alert('已成功複製戰術網站公開連結 (Sites Link copied to clipboard!)');
    });

    addTacticBtn.addEventListener('click', () => modal.classList.add('open'));
    closeModalBtn.addEventListener('click', () => modal.classList.remove('open'));
    cancelModalBtn.addEventListener('click', () => modal.classList.remove('open'));

    tacticForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inputName').value;
      const category = document.getElementById('inputCategory').value;
      const summary = document.getElementById('inputSummary').value;
      const concepts = document.getElementById('inputConcepts').value.split('\n').filter(x => x.trim());

      const newTactic = {
        id: `custom-${Date.now()}`,
        name: `${this.tactics.length + 1}. ${name}`,
        category,
        summary,
        keyConcepts: concepts.length ? concepts : ['自訂擋拆配合路線'],
        players: JSON.parse(JSON.stringify(this.tactics[0].players)),
        keyframes: JSON.parse(JSON.stringify(this.tactics[0].keyframes))
      };

      this.tactics.push(newTactic);
      this.renderTabs();
      this.loadTactic(this.tactics.length - 1);
      modal.classList.remove('open');
      tacticForm.reset();
      confetti({ particleCount: 80, spread: 60 });
    });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (this.animationProgress >= 100) {
      this.animationProgress = 0;
    }
    this.isPlaying = true;
    this.updatePlayBtnUI();
    this.lastTimestamp = performance.now();
    this.animFrameId = requestAnimationFrame((ts) => this.animate(ts));
  }

  pause() {
    this.isPlaying = false;
    this.updatePlayBtnUI();
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  seekTo(progress) {
    this.animationProgress = progress;
    document.getElementById('progressSlider').value = progress;
    
    const timeSec = ((progress / 100) * 5.0).toFixed(1);
    document.getElementById('timeDisplay').innerText = `${timeSec}s`;

    this.renderer.setProgress(progress);
    this.updateActiveStepHighlight();
  }

  animate(timestamp) {
    if (!this.isPlaying) return;

    const delta = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    const increment = (delta / (this.durationMs / this.playbackSpeed)) * 100;
    this.animationProgress += increment;

    if (this.animationProgress >= 100) {
      this.animationProgress = 100;
      this.seekTo(100);
      this.pause();
      return;
    }

    this.seekTo(this.animationProgress);
    this.animFrameId = requestAnimationFrame((ts) => this.animate(ts));
  }

  updatePlayBtnUI() {
    const playIcon = document.getElementById('playIcon');
    if (this.isPlaying) {
      playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
    } else {
      playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
    }
  }

  updateActiveStepHighlight() {
    const state = this.renderer.getCurrentFrameState();
    if (!state) return;

    document.querySelectorAll('.step-card').forEach((card, idx) => {
      card.classList.toggle('active', idx === state.currentStepIndex);
    });
  }
}

new BasketballTacticsApp();
