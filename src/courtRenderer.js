// 籃球戰術 SVG 繪製、觸控拖曳 (Touch & Mouse Drag) 與動畫插值渲染引擎
export class TacticsCourtRenderer {
  constructor(svgContainer, options = {}) {
    this.container = svgContainer;
    this.options = options;
    this.currentTactic = null;
    this.progress = 0; // 0 ~ 100
    this.onPositionUpdate = options.onPositionUpdate || null; // 拖曳位置更新回調

    this.draggedPlayerId = null;
    this.bindTouchEvents();
  }

  setTactic(tactic) {
    this.currentTactic = tactic;
    this.progress = 0;
    this.render();
  }

  setProgress(progress) {
    this.progress = Math.max(0, Math.min(100, progress));
    this.render();
  }

  // 根據 progress 計算兩 Keyframe 間位置插值 (Lerp)
  getCurrentFrameState() {
    if (!this.currentTactic || !this.currentTactic.keyframes.length) return null;
    
    const kfs = this.currentTactic.keyframes;
    if (this.progress <= 0) return kfs[0];
    if (this.progress >= 100) return kfs[kfs.length - 1];

    let prevIndex = 0;
    for (let i = 0; i < kfs.length - 1; i++) {
      if (this.progress >= kfs[i].progress && this.progress <= kfs[i + 1].progress) {
        prevIndex = i;
        break;
      }
    }

    const startKf = kfs[prevIndex];
    const endKf = kfs[prevIndex + 1];
    const range = endKf.progress - startKf.progress;
    const factor = (this.progress - startKf.progress) / range;

    const interpolatedPositions = {};
    const playerIds = Object.keys(startKf.positions);

    playerIds.forEach(id => {
      const p1 = startKf.positions[id];
      const p2 = endKf.positions[id];
      if (p1 && p2) {
        interpolatedPositions[id] = {
          x: p1.x + (p2.x - p1.x) * factor,
          y: p1.y + (p2.y - p1.y) * factor
        };
      }
    });

    return {
      progress: this.progress,
      desc: factor > 0.5 ? endKf.desc : startKf.desc,
      ballOwner: factor > 0.5 ? endKf.ballOwner : startKf.ballOwner,
      positions: interpolatedPositions,
      currentStepIndex: prevIndex
    };
  }

  // 將觸控/滑鼠螢幕座標轉換為球場百分比 (x: 0~100, y: 0~100)
  eventToCourtCoords(evt) {
    const svgEl = this.container.querySelector('svg');
    if (!svgEl) return null;

    const rect = svgEl.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;

    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    // SVG viewBox 0 0 1000 800, 邊框 50, 40 到 950, 760 (寬 900, 高 720)
    const svgX = (relX / rect.width) * 1000;
    const svgY = (relY / rect.height) * 800;

    let posX = ((svgX - 50) / 900) * 100;
    let posY = ((svgY - 40) / 720) * 100;

    posX = Math.max(2, Math.min(98, posX));
    posY = Math.max(2, Math.min(98, posY));

    return { x: posX, y: posY };
  }

  bindTouchEvents() {
    const startDrag = (evt) => {
      const playerGroup = evt.target.closest('.player-group');
      if (!playerGroup) return;

      evt.preventDefault();
      this.draggedPlayerId = playerGroup.getAttribute('data-player-id');
    };

    const moveDrag = (evt) => {
      if (!this.draggedPlayerId || !this.currentTactic) return;
      evt.preventDefault();

      const coords = this.eventToCourtCoords(evt);
      if (!coords) return;

      const state = this.getCurrentFrameState();
      if (!state) return;

      const currentKf = this.currentTactic.keyframes[state.currentStepIndex];
      if (currentKf && currentKf.positions[this.draggedPlayerId]) {
        // 即時更新當前步驟該球員座標
        currentKf.positions[this.draggedPlayerId].x = coords.x;
        currentKf.positions[this.draggedPlayerId].y = coords.y;

        if (this.onPositionUpdate) {
          this.onPositionUpdate(this.draggedPlayerId, coords, state.currentStepIndex);
        }
        this.render();
      }
    };

    const endDrag = () => {
      this.draggedPlayerId = null;
    };

    // 滑鼠事件
    this.container.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);

    // 平板/手機觸控事件 (Touch Events)
    this.container.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', endDrag);
    window.addEventListener('touchcancel', endDrag);
  }

  render() {
    if (!this.currentTactic) return;

    const state = this.getCurrentFrameState();
    if (!state) return;

    let svgHtml = `
      <svg class="basketball-court" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-offense" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-defense" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-ball" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <marker id="arrow-offense" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#38ef7d"/>
          </marker>
          <marker id="arrow-pass" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffb703"/>
          </marker>
        </defs>

        <rect width="1000" height="800" fill="#111927" rx="16" />

        <g stroke="rgba(255, 255, 255, 0.45)" stroke-width="4" fill="none">
          <rect x="50" y="40" width="900" height="720" rx="4" />
          <line x1="50" y1="760" x2="950" y2="760" stroke-width="5" stroke="rgba(255,255,255,0.7)" />
          <path d="M 380 760 A 120 120 0 0 1 620 760" stroke-dasharray="10 8" />
          <rect x="360" y="40" width="280" height="300" fill="rgba(0, 242, 254, 0.04)" stroke="rgba(0, 242, 254, 0.5)" stroke-width="4" />
          <path d="M 360 340 A 140 140 0 0 0 640 340" stroke-width="4" />
          <path d="M 360 340 A 140 140 0 0 1 640 340" stroke-dasharray="8 8" />
          <line x1="430" y1="80" x2="570" y2="80" stroke="#ffffff" stroke-width="8" />
          <circle cx="500" cy="105" r="22" stroke="#ff763b" stroke-width="5" fill="rgba(255, 118, 59, 0.15)" />
          <path d="M 440 80 A 60 60 0 0 0 560 80" stroke-width="3" />
          <path d="M 120 40 L 120 220 A 400 400 0 0 0 880 220 L 880 40" stroke="rgba(255, 255, 255, 0.65)" stroke-width="5" />
        </g>
    `;

    svgHtml += this.renderTacticalPaths(state);

    // 繪製防守球員 (Defense)
    this.currentTactic.players.defense.forEach(player => {
      const pos = state.positions[player.id];
      if (pos) {
        const cx = (pos.x / 100) * 900 + 50;
        const cy = (pos.y / 100) * 720 + 40;
        const isDragged = (this.draggedPlayerId === player.id);

        svgHtml += `
          <g class="player-group" data-player-id="${player.id}" transform="translate(${cx}, ${cy})" style="cursor: grab; touch-action: none;">
            <circle r="${isDragged ? 26 : 22}" fill="#2d151e" stroke="#ff5252" stroke-width="${isDragged ? 5 : 3}" filter="url(#glow-defense)" />
            <text x="0" y="6" text-anchor="middle" fill="#ff5252" font-size="14" font-weight="900" font-family="Inter, sans-serif">${player.label}</text>
          </g>
        `;
      }
    });

    // 繪製進攻球員 (Offense)
    this.currentTactic.players.offense.forEach(player => {
      const pos = state.positions[player.id];
      if (pos) {
        const cx = (pos.x / 100) * 900 + 50;
        const cy = (pos.y / 100) * 720 + 40;
        const hasBall = (state.ballOwner === player.id);
        const isDragged = (this.draggedPlayerId === player.id);

        svgHtml += `
          <g class="player-group" data-player-id="${player.id}" transform="translate(${cx}, ${cy})" style="cursor: grab; touch-action: none;">
            <circle r="${isDragged ? 28 : 24}" fill="#132e23" stroke="#38ef7d" stroke-width="${isDragged ? 5 : 3.5}" filter="url(#glow-offense)" />
            <text x="0" y="6" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="900" font-family="Inter, sans-serif">${player.id}</text>
            
            ${hasBall ? `
              <circle r="30" fill="none" stroke="#ff9100" stroke-width="2.5" stroke-dasharray="6 4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="20" cy="-20" r="12" fill="#ff9100" stroke="#ffffff" stroke-width="2" filter="url(#glow-ball)" />
              <path d="M 12 -20 L 28 -20 M 20 -28 L 20 -12" stroke="#6b2b00" stroke-width="1.5" />
            ` : ''}
          </g>
        `;
      }
    });

    svgHtml += `</svg>`;
    this.container.innerHTML = svgHtml;
  }

  renderTacticalPaths(state) {
    let pathHtml = '';
    const kfs = this.currentTactic.keyframes;

    for (let i = 0; i < kfs.length - 1; i++) {
      const kf1 = kfs[i];
      const kf2 = kfs[i + 1];

      Object.keys(kf1.positions).forEach(id => {
        const p1 = kf1.positions[id];
        const p2 = kf2.positions[id];
        if (p1 && p2 && (Math.abs(p1.x - p2.x) > 1.5 || Math.abs(p1.y - p2.y) > 1.5)) {
          const x1 = (p1.x / 100) * 900 + 50;
          const y1 = (p1.y / 100) * 720 + 40;
          const x2 = (p2.x / 100) * 900 + 50;
          const y2 = (p2.y / 100) * 720 + 40;
          const isOffense = id.startsWith('P') || id === 'C' || id.startsWith('S');

          pathHtml += `
            <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" 
                  stroke="${isOffense ? 'rgba(56, 239, 125, 0.5)' : 'rgba(255, 82, 82, 0.35)'}" 
                  stroke-width="3" stroke-dasharray="6 6" 
                  marker-end="${isOffense ? 'url(#arrow-offense)' : ''}" />
          `;
        }
      });

      if (kf1.ballOwner && kf2.ballOwner && kf1.ballOwner !== kf2.ballOwner) {
        const passerPos = kf1.positions[kf1.ballOwner];
        const receiverPos = kf2.positions[kf2.ballOwner];
        if (passerPos && receiverPos) {
          const px = (passerPos.x / 100) * 900 + 50;
          const py = (passerPos.y / 100) * 720 + 40;
          const rx = (receiverPos.x / 100) * 900 + 50;
          const ry = (receiverPos.y / 100) * 720 + 40;

          pathHtml += `
            <line x1="${px}" y1="${py}" x2="${rx}" y2="${ry}" 
                  stroke="#ffb703" stroke-width="4" stroke-dasharray="8 6" 
                  marker-end="url(#arrow-pass)" />
          `;
        }
      }
    }

    return pathHtml;
  }
}
