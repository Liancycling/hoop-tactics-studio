(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();const K=[{id:"pnr-roll",name:"1. 基本順下 (Pick & Roll)",category:"高位擋拆經典",summary:"持球衛與內線球員在頂弧進行高位擋拆，掩護者拆開後迅速空切順下禁區接球籃下攻門。",keyConcepts:["掩護角度：掩護者需站在防守球員側後方 45 度角紮實設掩。","持球突破：控球衛繞過掩護後必須發動強攻拆解，吸引協防。","空切順下：中鋒/大前鋒擋完即切，視防守站位要求空中接力或順下上籃。"],players:{offense:[{id:"PG",label:"PG (1號)",color:"#38ef7d"},{id:"C",label:"C (5號)",color:"#38ef7d"},{id:"SG",label:"SG (2號)",color:"#38ef7d"},{id:"SF",label:"SF (3號)",color:"#38ef7d"},{id:"PF",label:"PF (4號)",color:"#38ef7d"}],defense:[{id:"D1",label:"D1",color:"#ff5252"},{id:"D5",label:"D5",color:"#ff5252"},{id:"D2",label:"D2",color:"#ff5252"},{id:"D3",label:"D3",color:"#ff5252"},{id:"D4",label:"D4",color:"#ff5252"}]},keyframes:[{progress:0,time:"0.0s",desc:"1. 戰術起勢：PG 在頂弧持球，C 準備上提進行高位掩護；其餘隊友拉開底角清空中路空間。",ballOwner:"PG",positions:{PG:{x:50,y:70},C:{x:50,y:45},SG:{x:15,y:75},SF:{x:85,y:75},PF:{x:88,y:30},D1:{x:50,y:65},D5:{x:50,y:40},D2:{x:20,y:70},D3:{x:80,y:70},D4:{x:80,y:35}}},{progress:30,time:"1.5s",desc:"2. 擋拆設掩：C 落地紮實掩護 D1，PG 貼身切過掩護往右側斜向突破。",ballOwner:"PG",positions:{PG:{x:40,y:55},C:{x:48,y:62},SG:{x:15,y:75},SF:{x:85,y:75},PF:{x:88,y:30},D1:{x:45,y:64},D5:{x:42,y:50},D2:{x:20,y:70},D3:{x:80,y:70},D4:{x:75,y:35}}},{progress:65,time:"3.2s",desc:"3. 順下與精準傳球：D5 被迫上提包夾 PG，C 抓住空隙快速轉身直奔禁區，PG 送出擊地傳球。",ballOwner:"C",positions:{PG:{x:30,y:45},C:{x:50,y:25},SG:{x:15,y:75},SF:{x:85,y:75},PF:{x:88,y:30},D1:{x:40,y:55},D5:{x:32,y:42},D2:{x:20,y:70},D3:{x:80,y:70},D4:{x:70,y:30}}},{progress:100,time:"5.0s",desc:"4. 禁區完成得分：C 在籃下輕鬆接球完成雙手暴扣或高板上籃！",ballOwner:"C",positions:{PG:{x:28,y:40},C:{x:50,y:12},SG:{x:15,y:75},SF:{x:85,y:75},PF:{x:88,y:30},D1:{x:38,y:48},D5:{x:35,y:35},D2:{x:20,y:70},D3:{x:80,y:70},D4:{x:65,y:22}}}]},{id:"pnr-pop",name:"2. 擋拆彈出 (Pick & Pop)",category:"空間拉開戰術",summary:"內線球員擋拆後不往禁區切，而是外彈至三分線外接球投射，懲罰防守沉退。",keyConcepts:["外彈拉開空間：掩護者具備外線投射能力，擋拆後迅速往後退至弧頂/45度角。","閱讀沉退防守：當防守中鋒選擇深入禁區蹲守時， Pick & Pop 擁有極佳三分出手機會。"],players:{offense:[{id:"PG",label:"PG (1號)",color:"#38ef7d"},{id:"PF",label:"PF (4號)",color:"#38ef7d"},{id:"SG",label:"SG (2號)",color:"#38ef7d"},{id:"SF",label:"SF (3號)",color:"#38ef7d"},{id:"C",label:"C (5號)",color:"#38ef7d"}],defense:[{id:"D1",label:"D1",color:"#ff5252"},{id:"D4",label:"D4",color:"#ff5252"},{id:"D2",label:"D2",color:"#ff5252"},{id:"D3",label:"D3",color:"#ff5252"},{id:"D5",label:"D5",color:"#ff5252"}]},keyframes:[{progress:0,time:"0.0s",desc:"1. 戰術初始：PG 於左側 45 度角發動，具有投射能力的大前鋒 PF 上提擋拆。",ballOwner:"PG",positions:{PG:{x:35,y:65},PF:{x:42,y:55},SG:{x:15,y:75},SF:{x:85,y:75},C:{x:85,y:25},D1:{x:35,y:60},D4:{x:42,y:50},D2:{x:18,y:70},D3:{x:82,y:70},D5:{x:75,y:30}}},{progress:40,time:"2.0s",desc:"2. 防守收縮：D4 擔心 PG 切入而向禁區收縮沉退，PF 擋完後迅速向弧頂外彈。",ballOwner:"PG",positions:{PG:{x:25,y:40},PF:{x:50,y:72},SG:{x:15,y:75},SF:{x:85,y:75},C:{x:85,y:25},D1:{x:28,y:48},D4:{x:35,y:30},D2:{x:18,y:70},D3:{x:82,y:70},D5:{x:75,y:30}}},{progress:75,time:"3.8s",desc:"3. 橫傳弧頂：PG 切入吸住兩名防守後回傳弧頂空檔的 PF。",ballOwner:"PF",positions:{PG:{x:20,y:35},PF:{x:50,y:72},SG:{x:15,y:75},SF:{x:85,y:75},C:{x:85,y:25},D1:{x:24,y:40},D4:{x:30,y:28},D2:{x:18,y:70},D3:{x:82,y:70},D5:{x:75,y:30}}},{progress:100,time:"5.2s",desc:"4. 三分命中：PF 在無人看管下出手命中高弧度三分球！",ballOwner:"PF",positions:{PG:{x:20,y:35},PF:{x:50,y:72},SG:{x:15,y:75},SF:{x:85,y:75},C:{x:85,y:25},D1:{x:24,y:40},D4:{x:40,y:55},D2:{x:18,y:70},D3:{x:82,y:70},D5:{x:75,y:30}}}]},{id:"pnr-spanish",name:"3. 西班牙擋拆 (Spanish P&R)",category:"高階雙重擋拆",summary:"在高位擋拆的同時，安排第三名射手在禁區為沉退的協防中鋒做背後二次掩護，徹底撕裂防線。",keyConcepts:["背後掩護 (Back Screen)：射手為防守中鋒做背掩，阻擋其封蓋順下的 C。","雙重威脅：防守方若換防背掩，射手便可在弧頂空檔接球遠投。"],players:{offense:[{id:"PG",label:"PG (1號)",color:"#38ef7d"},{id:"C",label:"C (5號)",color:"#38ef7d"},{id:"SG",label:"SG (2號)",color:"#38ef7d"},{id:"SF",label:"SF (3號)",color:"#38ef7d"},{id:"PF",label:"PF (4號)",color:"#38ef7d"}],defense:[{id:"D1",label:"D1",color:"#ff5252"},{id:"D5",label:"D5",color:"#ff5252"},{id:"D2",label:"D2",color:"#ff5252"},{id:"D3",label:"D3",color:"#ff5252"},{id:"D4",label:"D4",color:"#ff5252"}]},keyframes:[{progress:0,time:"0.0s",desc:"1. 戰術佈局：PG 頂弧發動，C 上提掩護。SG 藏在罰球線附近準備做背後掩護。",ballOwner:"PG",positions:{PG:{x:50,y:75},C:{x:50,y:55},SG:{x:50,y:35},SF:{x:15,y:75},PF:{x:85,y:75},D1:{x:50,y:70},D5:{x:50,y:48},D2:{x:50,y:30},D3:{x:18,y:70},D4:{x:82,y:70}}},{progress:50,time:"2.5s",desc:"2. 雙重擋拆啟動：PG 繞 C 突破，C 順下的同時，SG 給沉退防守的 D5 一個致命的背後掩護！",ballOwner:"PG",positions:{PG:{x:35,y:50},C:{x:50,y:28},SG:{x:50,y:38},SF:{x:15,y:75},PF:{x:85,y:75},D1:{x:42,y:58},D5:{x:50,y:36},D2:{x:52,y:45},D3:{x:18,y:70},D4:{x:82,y:70}}},{progress:100,time:"4.8s",desc:"3. 空接灌籃：D5 被徹底卡死無法起跳，PG 高拋空中接力傳給 C 完成空中灌籃！",ballOwner:"C",positions:{PG:{x:30,y:42},C:{x:50,y:12},SG:{x:55,y:65},SF:{x:15,y:75},PF:{x:85,y:75},D1:{x:36,y:48},D5:{x:50,y:32},D2:{x:52,y:45},D3:{x:18,y:70},D4:{x:82,y:70}}}]},{id:"pnr-ghost",name:"4. 幽靈掩護 (Ghost Screen)",category:"現代小球戰術",summary:"掩護者看似要上提做實質身體接觸擋拆，卻在接觸前一瞬間假擋並快速彈出，創造防守溝通混亂。",keyConcepts:["假擋真彈 (Fake Screen & Slip)：完全不與防守者接觸，突然改變路線彈向弧頂或邊角。","製造防守防守溝通失誤：防守方準備準備換防時，兩人常會同時撲向持球者或漏掉假擋者。"],players:{offense:[{id:"PG",label:"PG (1號)",color:"#38ef7d"},{id:"SG",label:"SG (2號)",color:"#38ef7d"},{id:"SF",label:"SF (3號)",color:"#38ef7d"},{id:"PF",label:"PF (4號)",color:"#38ef7d"},{id:"C",label:"C (5號)",color:"#38ef7d"}],defense:[{id:"D1",label:"D1",color:"#ff5252"},{id:"D2",label:"D2",color:"#ff5252"},{id:"D3",label:"D3",color:"#ff5252"},{id:"D4",label:"D4",color:"#ff5252"},{id:"D5",label:"D5",color:"#ff5252"}]},keyframes:[{progress:0,time:"0.0s",desc:"1. 姿態偽裝：SG 擺出要上提為 PG 做高位擋拆的姿勢，防守者 D2 準備進行換防溝通。",ballOwner:"PG",positions:{PG:{x:40,y:70},SG:{x:45,y:55},SF:{x:15,y:75},PF:{x:85,y:75},C:{x:85,y:25},D1:{x:40,y:64},D2:{x:45,y:50},D3:{x:18,y:70},D4:{x:82,y:70},D5:{x:75,y:30}}},{progress:50,time:"2.0s",desc:"2. 幽靈假擋：SG 未接觸 D1 便突然加速向右側 45 度角彈出！D1 與 D2 瞬間產生猶豫包夾 PG。",ballOwner:"PG",positions:{PG:{x:30,y:55},SG:{x:70,y:65},SF:{x:15,y:75},PF:{x:85,y:75},C:{x:85,y:25},D1:{x:35,y:55},D2:{x:38,y:56},D3:{x:18,y:70},D4:{x:82,y:70},D5:{x:75,y:30}}},{progress:100,time:"4.2s",desc:"3. 分球空檔出手：PG 精準分球給右側完全空檔的 SG，輕鬆出手射入三分球！",ballOwner:"SG",positions:{PG:{x:28,y:52},SG:{x:70,y:65},SF:{x:15,y:75},PF:{x:85,y:75},C:{x:85,y:25},D1:{x:32,y:54},D2:{x:48,y:60},D3:{x:18,y:70},D4:{x:82,y:70},D5:{x:75,y:30}}}]},{id:"pnr-drag",name:"5. 轉換拖曳擋拆 (Drag Screen)",category:"快攻轉換戰術",summary:"在快攻轉換推進中，防守方陣型尚未立穩時，大個子球員跟進在半場進行快速拖曳擋拆。",keyConcepts:["趁虛而入：利用對方退防未定的混亂期發動擋拆。","節奏變化：持球者利用拖曳擋拆加速切入，常能直接撕裂對手半場防線。"],players:{offense:[{id:"PG",label:"PG (1號)",color:"#38ef7d"},{id:"PF",label:"PF (4號)",color:"#38ef7d"},{id:"SG",label:"SG (2號)",color:"#38ef7d"},{id:"SF",label:"SF (3號)",color:"#38ef7d"},{id:"C",label:"C (5號)",color:"#38ef7d"}],defense:[{id:"D1",label:"D1",color:"#ff5252"},{id:"D4",label:"D4",color:"#ff5252"},{id:"D2",label:"D2",color:"#ff5252"},{id:"D3",label:"D3",color:"#ff5252"},{id:"D5",label:"D5",color:"#ff5252"}]},keyframes:[{progress:0,time:"0.0s",desc:"1. 快攻推進：PG 迅速運球過半場，拖後跟進的 PF 在中圈附近直接發動 Drag Screen。",ballOwner:"PG",positions:{PG:{x:50,y:80},PF:{x:50,y:88},SG:{x:15,y:65},SF:{x:85,y:65},C:{x:75,y:30},D1:{x:50,y:72},D4:{x:55,y:82},D2:{x:20,y:60},D3:{x:80,y:60},D5:{x:70,y:25}}},{progress:60,time:"2.2s",desc:"2. 行進間掩護：PF 在高速運球中給 D1 掩護，PG 一步加速直插油漆區！",ballOwner:"PG",positions:{PG:{x:45,y:40},PF:{x:52,y:68},SG:{x:15,y:65},SF:{x:85,y:65},C:{x:75,y:30},D1:{x:50,y:68},D4:{x:48,y:48},D2:{x:20,y:60},D3:{x:80,y:60},D5:{x:65,y:25}}},{progress:100,time:"3.8s",desc:"3. 騎馬射箭得分：對手內線尚未站定防守位置，PG 拋投上籃輕鬆取分！",ballOwner:"PG",positions:{PG:{x:50,y:18},PF:{x:52,y:60},SG:{x:15,y:65},SF:{x:85,y:65},C:{x:75,y:30},D1:{x:48,y:55},D4:{x:45,y:25},D2:{x:20,y:60},D3:{x:80,y:60},D5:{x:60,y:20}}}]}];class xe{constructor(r,i={}){this.container=r,this.options=i,this.currentTactic=null,this.progress=0,this.onPositionUpdate=i.onPositionUpdate||null,this.draggedPlayerId=null,this.bindTouchEvents()}setTactic(r){this.currentTactic=r,this.progress=0,this.render()}setProgress(r){this.progress=Math.max(0,Math.min(100,r)),this.render()}getCurrentFrameState(){if(!this.currentTactic||!this.currentTactic.keyframes.length)return null;const r=this.currentTactic.keyframes;if(this.progress<=0)return r[0];if(this.progress>=100)return r[r.length-1];let i=0;for(let g=0;g<r.length-1;g++)if(this.progress>=r[g].progress&&this.progress<=r[g+1].progress){i=g;break}const n=r[i],a=r[i+1],o=a.progress-n.progress,u=(this.progress-n.progress)/o,m={};return Object.keys(n.positions).forEach(g=>{const S=n.positions[g],M=a.positions[g];S&&M&&(m[g]={x:S.x+(M.x-S.x)*u,y:S.y+(M.y-S.y)*u})}),{progress:this.progress,desc:u>.5?a.desc:n.desc,ballOwner:u>.5?a.ballOwner:n.ballOwner,positions:m,currentStepIndex:i}}eventToCourtCoords(r){const i=this.container.querySelector("svg");if(!i)return null;const n=i.getBoundingClientRect(),a=r.touches?r.touches[0].clientX:r.clientX,o=r.touches?r.touches[0].clientY:r.clientY,u=a-n.left,m=o-n.top,D=u/n.width*1e3,g=m/n.height*800;let S=(D-50)/900*100,M=(g-40)/720*100;return S=Math.max(2,Math.min(98,S)),M=Math.max(2,Math.min(98,M)),{x:S,y:M}}bindTouchEvents(){const r=a=>{const o=a.target.closest(".player-group");o&&(a.preventDefault(),this.draggedPlayerId=o.getAttribute("data-player-id"))},i=a=>{if(!this.draggedPlayerId||!this.currentTactic)return;a.preventDefault();const o=this.eventToCourtCoords(a);if(!o)return;const u=this.getCurrentFrameState();if(!u)return;const m=this.currentTactic.keyframes[u.currentStepIndex];m&&m.positions[this.draggedPlayerId]&&(m.positions[this.draggedPlayerId].x=o.x,m.positions[this.draggedPlayerId].y=o.y,this.onPositionUpdate&&this.onPositionUpdate(this.draggedPlayerId,o,u.currentStepIndex),this.render())},n=()=>{this.draggedPlayerId=null};this.container.addEventListener("mousedown",r),window.addEventListener("mousemove",i),window.addEventListener("mouseup",n),this.container.addEventListener("touchstart",r,{passive:!1}),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("touchend",n),window.addEventListener("touchcancel",n)}render(){if(!this.currentTactic)return;const r=this.getCurrentFrameState();if(!r)return;let i=`
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
    `;i+=this.renderTacticalPaths(r),this.currentTactic.players.defense.forEach(n=>{const a=r.positions[n.id];if(a){const o=a.x/100*900+50,u=a.y/100*720+40,m=this.draggedPlayerId===n.id;i+=`
          <g class="player-group" data-player-id="${n.id}" transform="translate(${o}, ${u})" style="cursor: grab; touch-action: none;">
            <circle r="${m?26:22}" fill="#2d151e" stroke="#ff5252" stroke-width="${m?5:3}" filter="url(#glow-defense)" />
            <text x="0" y="6" text-anchor="middle" fill="#ff5252" font-size="14" font-weight="900" font-family="Inter, sans-serif">${n.label}</text>
          </g>
        `}}),this.currentTactic.players.offense.forEach(n=>{const a=r.positions[n.id];if(a){const o=a.x/100*900+50,u=a.y/100*720+40,m=r.ballOwner===n.id,D=this.draggedPlayerId===n.id;i+=`
          <g class="player-group" data-player-id="${n.id}" transform="translate(${o}, ${u})" style="cursor: grab; touch-action: none;">
            <circle r="${D?28:24}" fill="#132e23" stroke="#38ef7d" stroke-width="${D?5:3.5}" filter="url(#glow-offense)" />
            <text x="0" y="6" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="900" font-family="Inter, sans-serif">${n.id}</text>
            
            ${m?`
              <circle r="30" fill="none" stroke="#ff9100" stroke-width="2.5" stroke-dasharray="6 4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="20" cy="-20" r="12" fill="#ff9100" stroke="#ffffff" stroke-width="2" filter="url(#glow-ball)" />
              <path d="M 12 -20 L 28 -20 M 20 -28 L 20 -12" stroke="#6b2b00" stroke-width="1.5" />
            `:""}
          </g>
        `}}),i+="</svg>",this.container.innerHTML=i}renderTacticalPaths(r){let i="";const n=this.currentTactic.keyframes;for(let a=0;a<n.length-1;a++){const o=n[a],u=n[a+1];if(Object.keys(o.positions).forEach(m=>{const D=o.positions[m],g=u.positions[m];if(D&&g&&(Math.abs(D.x-g.x)>1.5||Math.abs(D.y-g.y)>1.5)){const S=D.x/100*900+50,M=D.y/100*720+40,E=g.x/100*900+50,B=g.y/100*720+40,L=m.startsWith("P")||m==="C"||m.startsWith("S");i+=`
            <line x1="${S}" y1="${M}" x2="${E}" y2="${B}" 
                  stroke="${L?"rgba(56, 239, 125, 0.5)":"rgba(255, 82, 82, 0.35)"}" 
                  stroke-width="3" stroke-dasharray="6 6" 
                  marker-end="${L?"url(#arrow-offense)":""}" />
          `}}),o.ballOwner&&u.ballOwner&&o.ballOwner!==u.ballOwner){const m=o.positions[o.ballOwner],D=u.positions[u.ballOwner];if(m&&D){const g=m.x/100*900+50,S=m.y/100*720+40,M=D.x/100*900+50,E=D.y/100*720+40;i+=`
            <line x1="${g}" y1="${S}" x2="${M}" y2="${E}" 
                  stroke="#ffb703" stroke-width="4" stroke-dasharray="8 6" 
                  marker-end="url(#arrow-pass)" />
          `}}}return i}}var z={};(function $(r,i,n,a){var o=!!(r.Worker&&r.Blob&&r.Promise&&r.OffscreenCanvas&&r.OffscreenCanvasRenderingContext2D&&r.HTMLCanvasElement&&r.HTMLCanvasElement.prototype.transferControlToOffscreen&&r.URL&&r.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",m=function(){if(!r.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var s=t.transferToImageBitmap();e.createPattern(s,"no-repeat")}catch{return!1}return!0}();function D(){}function g(t){var e=i.exports.Promise,s=e!==void 0?e:r.Promise;return typeof s=="function"?new s(t):(t(D,D),null)}var S=function(t,e){return{transform:function(s){if(t)return s;if(e.has(s))return e.get(s);var c=new OffscreenCanvas(s.width,s.height),d=c.getContext("2d");return d.drawImage(s,0,0),e.set(s,c),c},clear:function(){e.clear()}}}(m,new Map),M=function(){var t=Math.floor(16.666666666666668),e,s,c={},d=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(h){var y=Math.random();return c[y]=requestAnimationFrame(function l(f){d===f||d+t-1<f?(d=f,delete c[y],h()):c[y]=requestAnimationFrame(l)}),y},s=function(h){c[h]&&cancelAnimationFrame(c[h])}):(e=function(h){return setTimeout(h,t)},s=function(h){return clearTimeout(h)}),{frame:e,cancel:s}}(),E=function(){var t,e,s={};function c(d){function h(y,l){d.postMessage({options:y||{},callback:l})}d.init=function(l){var f=l.transferControlToOffscreen();d.postMessage({canvas:f},[f])},d.fire=function(l,f,v){if(e)return h(l,null),e;var w=Math.random().toString(36).slice(2);return e=g(function(x){function P(C){C.data.callback===w&&(delete s[w],d.removeEventListener("message",P),e=null,S.clear(),v(),x())}d.addEventListener("message",P),h(l,w),s[w]=P.bind(null,{data:{callback:w}})}),e},d.reset=function(){d.postMessage({reset:!0});for(var l in s)s[l](),delete s[l]}}return function(){if(t)return t;if(!n&&o){var d=["var CONFETTI, SIZE = {}, module = {};","("+$.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([d])))}catch(h){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",h),null}c(t)}return t}}(),B={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function L(t,e){return e?e(t):t}function R(t){return t!=null}function b(t,e,s){return L(t&&R(t[e])?t[e]:B[e],s)}function N(t){return t<0?0:Math.floor(t)}function H(t,e){return Math.floor(Math.random()*(e-t))+t}function A(t){return parseInt(t,16)}function Z(t){return t.map(Q)}function Q(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:A(e.substring(0,2)),g:A(e.substring(2,4)),b:A(e.substring(4,6))}}function ee(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}function te(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function re(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function ae(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function se(t,e,s,c,d,h,y,l,f){t.save(),t.translate(e,s),t.rotate(h),t.scale(c,d),t.arc(0,0,1,y,l,f),t.restore()}function ie(t){var e=t.angle*(Math.PI/180),s=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*s-Math.random()*s),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function ne(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var s=e.tick++/e.totalTicks,c=e.x+e.random*e.tiltCos,d=e.y+e.random*e.tiltSin,h=e.wobbleX+e.random*e.tiltCos,y=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-s)+")",t.beginPath(),u&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(le(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(h-c)*.1,Math.abs(y-d)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var l=Math.PI/10*e.wobble,f=Math.abs(h-c)*.1,v=Math.abs(y-d)*.1,w=e.shape.bitmap.width*e.scalar,x=e.shape.bitmap.height*e.scalar,P=new DOMMatrix([Math.cos(l)*f,Math.sin(l)*f,-Math.sin(l)*v,Math.cos(l)*v,e.x,e.y]);P.multiplySelf(new DOMMatrix(e.shape.matrix));var C=t.createPattern(S.transform(e.shape.bitmap),"no-repeat");C.setTransform(P),t.globalAlpha=1-s,t.fillStyle=C,t.fillRect(e.x-w/2,e.y-x/2,w,x),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(h-c)*e.ovalScalar,Math.abs(y-d)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):se(t,e.x,e.y,Math.abs(h-c)*e.ovalScalar,Math.abs(y-d)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,k=4*e.scalar,T=8*e.scalar,F=e.x,G=e.y,O=5,I=Math.PI/O;O--;)F=e.x+Math.cos(p)*T,G=e.y+Math.sin(p)*T,t.lineTo(F,G),p+=I,F=e.x+Math.cos(p)*k,G=e.y+Math.sin(p)*k,t.lineTo(F,G),p+=I;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(d)),t.lineTo(Math.floor(h),Math.floor(y)),t.lineTo(Math.floor(c),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function oe(t,e,s,c,d){var h=e.slice(),y=t.getContext("2d"),l,f,v=g(function(w){function x(){l=f=null,y.clearRect(0,0,c.width,c.height),S.clear(),d(),w()}function P(){n&&!(c.width===a.width&&c.height===a.height)&&(c.width=t.width=a.width,c.height=t.height=a.height),!c.width&&!c.height&&(s(t),c.width=t.width,c.height=t.height),y.clearRect(0,0,c.width,c.height),h=h.filter(function(C){return ne(y,C)}),h.length?l=M.frame(P):x()}l=M.frame(P),f=x});return{addFettis:function(w){return h=h.concat(w),v},canvas:t,promise:v,reset:function(){l&&M.cancel(l),f&&f()}}}function j(t,e){var s=!t,c=!!b(e||{},"resize"),d=!1,h=b(e,"disableForReducedMotion",Boolean),y=o&&!!b(e||{},"useWorker"),l=y?E():null,f=s?te:re,v=t&&l?!!t.__confetti_initialized:!1,w=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,x;function P(p,k,T){for(var F=b(p,"particleCount",N),G=b(p,"angle",Number),O=b(p,"spread",Number),I=b(p,"startVelocity",Number),he=b(p,"decay",Number),ue=b(p,"gravity",Number),ye=b(p,"drift",Number),J=b(p,"colors",Z),fe=b(p,"ticks",Number),X=b(p,"shapes"),pe=b(p,"scalar"),me=!!b(p,"flat"),Y=ee(p),_=F,q=[],ge=t.width*Y.x,ve=t.height*Y.y;_--;)q.push(ie({x:ge,y:ve,angle:G,spread:O,startVelocity:I,color:J[_%J.length],shape:X[H(0,X.length)],ticks:fe,decay:he,gravity:ue,drift:ye,scalar:pe,flat:me}));return x?x.addFettis(q):(x=oe(t,q,f,k,T),x.promise)}function C(p){var k=h||b(p,"disableForReducedMotion",Boolean),T=b(p,"zIndex",Number);if(k&&w)return g(function(I){I()});s&&x?t=x.canvas:s&&!t&&(t=ae(T),document.body.appendChild(t)),c&&!v&&f(t);var F={width:t.width,height:t.height};l&&!v&&l.init(t),v=!0,l&&(t.__confetti_initialized=!0);function G(){if(l){var I={getBoundingClientRect:function(){if(!s)return t.getBoundingClientRect()}};f(I),l.postMessage({resize:{width:I.width,height:I.height}});return}F.width=F.height=null}function O(){x=null,c&&(d=!1,r.removeEventListener("resize",G)),s&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,v=!1)}return c&&!d&&(d=!0,r.addEventListener("resize",G,!1)),l?l.fire(p,F,O):P(p,F,O)}return C.reset=function(){l&&l.reset(),x&&x.reset()},C}var U;function W(){return U||(U=j(null,{useWorker:!0,resize:!0})),U}function le(t,e,s,c,d,h,y){var l=new Path2D(t),f=new Path2D;f.addPath(l,new DOMMatrix(e));var v=new Path2D;return v.addPath(f,new DOMMatrix([Math.cos(y)*d,Math.sin(y)*d,-Math.sin(y)*h,Math.cos(y)*h,s,c])),v}function ce(t){if(!u)throw new Error("path confetti are not supported in this browser");var e,s;typeof t=="string"?e=t:(e=t.path,s=t.matrix);var c=new Path2D(e),d=document.createElement("canvas"),h=d.getContext("2d");if(!s){for(var y=1e3,l=y,f=y,v=0,w=0,x,P,C=0;C<y;C+=2)for(var p=0;p<y;p+=2)h.isPointInPath(c,C,p,"nonzero")&&(l=Math.min(l,C),f=Math.min(f,p),v=Math.max(v,C),w=Math.max(w,p));x=v-l,P=w-f;var k=10,T=Math.min(k/x,k/P);s=[T,0,0,T,-Math.round(x/2+l)*T,-Math.round(P/2+f)*T]}return{type:"path",path:e,matrix:s}}function de(t){var e,s=1,c="#000000",d='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,s="scalar"in t?t.scalar:s,d="fontFamily"in t?t.fontFamily:d,c="color"in t?t.color:c);var h=10*s,y=""+h+"px "+d,l=new OffscreenCanvas(h,h),f=l.getContext("2d");f.font=y;var v=f.measureText(e),w=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),x=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),P=2,C=v.actualBoundingBoxLeft+P,p=v.actualBoundingBoxAscent+P;w+=P+P,x+=P+P,l=new OffscreenCanvas(w,x),f=l.getContext("2d"),f.font=y,f.fillStyle=c,f.fillText(e,C,p);var k=1/s;return{type:"bitmap",bitmap:l.transferToImageBitmap(),matrix:[k,0,0,k,-w*k/2,-x*k/2]}}i.exports=function(){return W().apply(this,arguments)},i.exports.reset=function(){W().reset()},i.exports.create=j,i.exports.shapeFromPath=ce,i.exports.shapeFromText=de})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),z,!1);const V=z.exports;z.exports.create;class be{constructor(){this.originalTactics=JSON.parse(JSON.stringify(K)),this.tactics=JSON.parse(JSON.stringify(K)),this.currentTacticIndex=0,this.isPlaying=!1,this.playbackSpeed=1,this.animationProgress=0,this.animFrameId=null,this.lastTimestamp=null,this.durationMs=6e3,this.initDOM(),this.initRenderer(),this.bindEvents(),this.renderTabs(),this.loadTactic(0)}initDOM(){const r=document.getElementById("app");r.innerHTML=`
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
    `}initRenderer(){const r=document.getElementById("courtContainer");this.renderer=new xe(r)}renderTabs(){const r=document.getElementById("tacticsTabs");r.innerHTML=this.tactics.map((i,n)=>`
      <button class="tactic-tab ${n===this.currentTacticIndex?"active":""}" data-index="${n}">
        <span class="tactic-num">${n+1}</span>
        ${i.name}
      </button>
    `).join(""),r.querySelectorAll(".tactic-tab").forEach(i=>{i.addEventListener("click",n=>{const a=parseInt(n.currentTarget.getAttribute("data-index"),10);this.loadTactic(a)})})}loadTactic(r){this.currentTacticIndex=r;const i=this.tactics[r];document.querySelectorAll(".tactic-tab").forEach((o,u)=>{o.classList.toggle("active",u===r)}),document.getElementById("currentTacticTitle").innerText=i.name,document.getElementById("currentTacticCategory").innerText=i.category,document.getElementById("tacticSummary").innerText=i.summary;const n=document.getElementById("tacticKeyConcepts");n.innerHTML=i.keyConcepts.map(o=>`<div style="margin-bottom: 4px;">• ${o}</div>`).join("");const a=document.getElementById("stepsList");a.innerHTML=i.keyframes.map((o,u)=>`
      <div class="step-card" data-progress="${o.progress}" data-kfidx="${u}">
        <div class="step-header">
          <span class="step-seq">STEP 0${u+1}</span>
          <span class="step-time">${o.time}</span>
        </div>
        <div class="step-desc">${o.desc}</div>
      </div>
    `).join(""),a.querySelectorAll(".step-card").forEach(o=>{o.addEventListener("click",u=>{const m=parseFloat(u.currentTarget.getAttribute("data-progress"));this.seekTo(m)})}),this.renderer.setTactic(i),this.seekTo(0)}resetCurrentTacticPositions(){this.pause();const r=this.originalTactics[this.currentTacticIndex];r?this.tactics[this.currentTacticIndex]=JSON.parse(JSON.stringify(r)):this.tactics[this.currentTacticIndex].keyframes=JSON.parse(JSON.stringify(this.originalTactics[0].keyframes)),this.loadTactic(this.currentTacticIndex)}bindEvents(){const r=document.getElementById("playBtn"),i=document.getElementById("restartBtn"),n=document.getElementById("resetStepBtn"),a=document.getElementById("resetPositionsBtn"),o=document.getElementById("progressSlider"),u=document.getElementById("speedSelect"),m=document.getElementById("shareBtn"),D=document.getElementById("addTacticBtn"),g=document.getElementById("customModal"),S=document.getElementById("closeModalBtn"),M=document.getElementById("cancelModalBtn"),E=document.getElementById("tacticForm");r.addEventListener("click",()=>this.togglePlay()),i.addEventListener("click",()=>this.seekTo(0)),n.addEventListener("click",()=>this.resetCurrentTacticPositions()),a.addEventListener("click",()=>this.resetCurrentTacticPositions()),o.addEventListener("input",B=>{this.pause(),this.seekTo(parseFloat(B.target.value))}),u.addEventListener("change",B=>{this.playbackSpeed=parseFloat(B.target.value)}),m.addEventListener("click",()=>{V({particleCount:100,spread:70,origin:{y:.6}}),alert("已成功複製戰術網站公開連結 (Sites Link copied to clipboard!)")}),D.addEventListener("click",()=>g.classList.add("open")),S.addEventListener("click",()=>g.classList.remove("open")),M.addEventListener("click",()=>g.classList.remove("open")),E.addEventListener("submit",B=>{B.preventDefault();const L=document.getElementById("inputName").value,R=document.getElementById("inputCategory").value,b=document.getElementById("inputSummary").value,N=document.getElementById("inputConcepts").value.split(`
`).filter(A=>A.trim()),H={id:`custom-${Date.now()}`,name:`${this.tactics.length+1}. ${L}`,category:R,summary:b,keyConcepts:N.length?N:["自訂擋拆配合路線"],players:JSON.parse(JSON.stringify(this.tactics[0].players)),keyframes:JSON.parse(JSON.stringify(this.tactics[0].keyframes))};this.tactics.push(H),this.renderTabs(),this.loadTactic(this.tactics.length-1),g.classList.remove("open"),E.reset(),V({particleCount:80,spread:60})})}togglePlay(){this.isPlaying?this.pause():this.play()}play(){this.animationProgress>=100&&(this.animationProgress=0),this.isPlaying=!0,this.updatePlayBtnUI(),this.lastTimestamp=performance.now(),this.animFrameId=requestAnimationFrame(r=>this.animate(r))}pause(){this.isPlaying=!1,this.updatePlayBtnUI(),this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}seekTo(r){this.animationProgress=r,document.getElementById("progressSlider").value=r;const i=(r/100*5).toFixed(1);document.getElementById("timeDisplay").innerText=`${i}s`,this.renderer.setProgress(r),this.updateActiveStepHighlight()}animate(r){if(!this.isPlaying)return;const i=r-this.lastTimestamp;this.lastTimestamp=r;const n=i/(this.durationMs/this.playbackSpeed)*100;if(this.animationProgress+=n,this.animationProgress>=100){this.animationProgress=100,this.seekTo(100),this.pause();return}this.seekTo(this.animationProgress),this.animFrameId=requestAnimationFrame(a=>this.animate(a))}updatePlayBtnUI(){const r=document.getElementById("playIcon");this.isPlaying?r.innerHTML='<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>':r.innerHTML='<polygon points="5 3 19 12 5 21 5 3"/>'}updateActiveStepHighlight(){const r=this.renderer.getCurrentFrameState();r&&document.querySelectorAll(".step-card").forEach((i,n)=>{i.classList.toggle("active",n===r.currentStepIndex)})}}new be;
