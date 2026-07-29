// 籃球檔拆 5 大經典戰術資料庫 (Pick & Roll Tactics Database)
export const TACTICS_DATA = [
  {
    id: 'pnr-roll',
    name: '1. 基本順下 (Pick & Roll)',
    category: '高位擋拆經典',
    summary: '持球衛與內線球員在頂弧進行高位擋拆，掩護者拆開後迅速空切順下禁區接球籃下攻門。',
    keyConcepts: [
      '掩護角度：掩護者需站在防守球員側後方 45 度角紮實設掩。',
      '持球突破：控球衛繞過掩護後必須發動強攻拆解，吸引協防。',
      '空切順下：中鋒/大前鋒擋完即切，視防守站位要求空中接力或順下上籃。'
    ],
    players: {
      offense: [
        { id: 'PG', label: 'PG (1號)', color: '#38ef7d' },
        { id: 'C', label: 'C (5號)', color: '#38ef7d' },
        { id: 'SG', label: 'SG (2號)', color: '#38ef7d' },
        { id: 'SF', label: 'SF (3號)', color: '#38ef7d' },
        { id: 'PF', label: 'PF (4號)', color: '#38ef7d' }
      ],
      defense: [
        { id: 'D1', label: 'D1', color: '#ff5252' },
        { id: 'D5', label: 'D5', color: '#ff5252' },
        { id: 'D2', label: 'D2', color: '#ff5252' },
        { id: 'D3', label: 'D3', color: '#ff5252' },
        { id: 'D4', label: 'D4', color: '#ff5252' }
      ]
    },
    // 動畫關鍵幀 (Progress 0 到 100)
    keyframes: [
      {
        progress: 0,
        time: '0.0s',
        desc: '1. 戰術起勢：PG 在頂弧持球，C 準備上提進行高位掩護；其餘隊友拉開底角清空中路空間。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 50, y: 70 },
          C: { x: 50, y: 45 },
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          PF: { x: 88, y: 30 },
          D1: { x: 50, y: 65 },
          D5: { x: 50, y: 40 },
          D2: { x: 20, y: 70 },
          D3: { x: 80, y: 70 },
          D4: { x: 80, y: 35 }
        }
      },
      {
        progress: 30,
        time: '1.5s',
        desc: '2. 擋拆設掩：C 落地紮實掩護 D1，PG 貼身切過掩護往右側斜向突破。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 40, y: 55 },
          C: { x: 48, y: 62 },
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          PF: { x: 88, y: 30 },
          D1: { x: 45, y: 64 }, // 被擋在 C 後面
          D5: { x: 42, y: 50 }, // 換防補位
          D2: { x: 20, y: 70 },
          D3: { x: 80, y: 70 },
          D4: { x: 75, y: 35 }
        }
      },
      {
        progress: 65,
        time: '3.2s',
        desc: '3. 順下與精準傳球：D5 被迫上提包夾 PG，C 抓住空隙快速轉身直奔禁區，PG 送出擊地傳球。',
        ballOwner: 'C', // 傳球給 C
        positions: {
          PG: { x: 30, y: 45 },
          C: { x: 50, y: 25 },
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          PF: { x: 88, y: 30 },
          D1: { x: 40, y: 55 },
          D5: { x: 32, y: 42 },
          D2: { x: 20, y: 70 },
          D3: { x: 80, y: 70 },
          D4: { x: 70, y: 30 }
        }
      },
      {
        progress: 100,
        time: '5.0s',
        desc: '4. 禁區完成得分：C 在籃下輕鬆接球完成雙手暴扣或高板上籃！',
        ballOwner: 'C',
        positions: {
          PG: { x: 28, y: 40 },
          C: { x: 50, y: 12 }, // 籃下
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          PF: { x: 88, y: 30 },
          D1: { x: 38, y: 48 },
          D5: { x: 35, y: 35 },
          D2: { x: 20, y: 70 },
          D3: { x: 80, y: 70 },
          D4: { x: 65, y: 22 }
        }
      }
    ]
  },

  {
    id: 'pnr-pop',
    name: '2. 擋拆彈出 (Pick & Pop)',
    category: '空間拉開戰術',
    summary: '內線球員擋拆後不往禁區切，而是外彈至三分線外接球投射，懲罰防守沉退。',
    keyConcepts: [
      '外彈拉開空間：掩護者具備外線投射能力，擋拆後迅速往後退至弧頂/45度角。',
      '閱讀沉退防守：當防守中鋒選擇深入禁區蹲守時， Pick & Pop 擁有極佳三分出手機會。'
    ],
    players: {
      offense: [
        { id: 'PG', label: 'PG (1號)', color: '#38ef7d' },
        { id: 'PF', label: 'PF (4號)', color: '#38ef7d' },
        { id: 'SG', label: 'SG (2號)', color: '#38ef7d' },
        { id: 'SF', label: 'SF (3號)', color: '#38ef7d' },
        { id: 'C', label: 'C (5號)', color: '#38ef7d' }
      ],
      defense: [
        { id: 'D1', label: 'D1', color: '#ff5252' },
        { id: 'D4', label: 'D4', color: '#ff5252' },
        { id: 'D2', label: 'D2', color: '#ff5252' },
        { id: 'D3', label: 'D3', color: '#ff5252' },
        { id: 'D5', label: 'D5', color: '#ff5252' }
      ]
    },
    keyframes: [
      {
        progress: 0,
        time: '0.0s',
        desc: '1. 戰術初始：PG 於左側 45 度角發動，具有投射能力的大前鋒 PF 上提擋拆。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 35, y: 65 },
          PF: { x: 42, y: 55 },
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 35, y: 60 },
          D4: { x: 42, y: 50 },
          D2: { x: 18, y: 70 },
          D3: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      },
      {
        progress: 40,
        time: '2.0s',
        desc: '2. 防守收縮：D4 擔心 PG 切入而向禁區收縮沉退，PF 擋完後迅速向弧頂外彈。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 25, y: 40 },
          PF: { x: 50, y: 72 }, // 外彈三分線
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 28, y: 48 },
          D4: { x: 35, y: 30 }, // 沉退籃下
          D2: { x: 18, y: 70 },
          D3: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      },
      {
        progress: 75,
        time: '3.8s',
        desc: '3. 橫傳弧頂：PG 切入吸住兩名防守後回傳弧頂空檔的 PF。',
        ballOwner: 'PF',
        positions: {
          PG: { x: 20, y: 35 },
          PF: { x: 50, y: 72 },
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 24, y: 40 },
          D4: { x: 30, y: 28 },
          D2: { x: 18, y: 70 },
          D3: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      },
      {
        progress: 100,
        time: '5.2s',
        desc: '4. 三分命中：PF 在無人看管下出手命中高弧度三分球！',
        ballOwner: 'PF',
        positions: {
          PG: { x: 20, y: 35 },
          PF: { x: 50, y: 72 },
          SG: { x: 15, y: 75 },
          SF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 24, y: 40 },
          D4: { x: 40, y: 55 }, // 撲出補防太晚
          D2: { x: 18, y: 70 },
          D3: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      }
    ]
  },

  {
    id: 'pnr-spanish',
    name: '3. 西班牙擋拆 (Spanish P&R)',
    category: '高階雙重擋拆',
    summary: '在高位擋拆的同時，安排第三名射手在禁區為沉退的協防中鋒做背後二次掩護，徹底撕裂防線。',
    keyConcepts: [
      '背後掩護 (Back Screen)：射手為防守中鋒做背掩，阻擋其封蓋順下的 C。',
      '雙重威脅：防守方若換防背掩，射手便可在弧頂空檔接球遠投。'
    ],
    players: {
      offense: [
        { id: 'PG', label: 'PG (1號)', color: '#38ef7d' },
        { id: 'C', label: 'C (5號)', color: '#38ef7d' },
        { id: 'SG', label: 'SG (2號)', color: '#38ef7d' },
        { id: 'SF', label: 'SF (3號)', color: '#38ef7d' },
        { id: 'PF', label: 'PF (4號)', color: '#38ef7d' }
      ],
      defense: [
        { id: 'D1', label: 'D1', color: '#ff5252' },
        { id: 'D5', label: 'D5', color: '#ff5252' },
        { id: 'D2', label: 'D2', color: '#ff5252' },
        { id: 'D3', label: 'D3', color: '#ff5252' },
        { id: 'D4', label: 'D4', color: '#ff5252' }
      ]
    },
    keyframes: [
      {
        progress: 0,
        time: '0.0s',
        desc: '1. 戰術佈局：PG 頂弧發動，C 上提掩護。SG 藏在罰球線附近準備做背後掩護。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 50, y: 75 },
          C: { x: 50, y: 55 },
          SG: { x: 50, y: 35 },
          SF: { x: 15, y: 75 },
          PF: { x: 85, y: 75 },
          D1: { x: 50, y: 70 },
          D5: { x: 50, y: 48 },
          D2: { x: 50, y: 30 },
          D3: { x: 18, y: 70 },
          D4: { x: 82, y: 70 }
        }
      },
      {
        progress: 50,
        time: '2.5s',
        desc: '2. 雙重擋拆啟動：PG 繞 C 突破，C 順下的同時，SG 給沉退防守的 D5 一個致命的背後掩護！',
        ballOwner: 'PG',
        positions: {
          PG: { x: 35, y: 50 },
          C: { x: 50, y: 28 },
          SG: { x: 50, y: 38 }, // 擋住 D5
          SF: { x: 15, y: 75 },
          PF: { x: 85, y: 75 },
          D1: { x: 42, y: 58 },
          D5: { x: 50, y: 36 }, // 被 SG 擋住無法回防禁區
          D2: { x: 52, y: 45 },
          D3: { x: 18, y: 70 },
          D4: { x: 82, y: 70 }
        }
      },
      {
        progress: 100,
        time: '4.8s',
        desc: '3. 空接灌籃：D5 被徹底卡死無法起跳，PG 高拋空中接力傳給 C 完成空中灌籃！',
        ballOwner: 'C',
        positions: {
          PG: { x: 30, y: 42 },
          C: { x: 50, y: 12 },
          SG: { x: 55, y: 65 }, // SG 可彈出弧頂做第二備案
          SF: { x: 15, y: 75 },
          PF: { x: 85, y: 75 },
          D1: { x: 36, y: 48 },
          D5: { x: 50, y: 32 },
          D2: { x: 52, y: 45 },
          D3: { x: 18, y: 70 },
          D4: { x: 82, y: 70 }
        }
      }
    ]
  },

  {
    id: 'pnr-ghost',
    name: '4. 幽靈掩護 (Ghost Screen)',
    category: '現代小球戰術',
    summary: '掩護者看似要上提做實質身體接觸擋拆，卻在接觸前一瞬間假擋並快速彈出，創造防守溝通混亂。',
    keyConcepts: [
      '假擋真彈 (Fake Screen & Slip)：完全不與防守者接觸，突然改變路線彈向弧頂或邊角。',
      '製造防守防守溝通失誤：防守方準備準備換防時，兩人常會同時撲向持球者或漏掉假擋者。'
    ],
    players: {
      offense: [
        { id: 'PG', label: 'PG (1號)', color: '#38ef7d' },
        { id: 'SG', label: 'SG (2號)', color: '#38ef7d' },
        { id: 'SF', label: 'SF (3號)', color: '#38ef7d' },
        { id: 'PF', label: 'PF (4號)', color: '#38ef7d' },
        { id: 'C', label: 'C (5號)', color: '#38ef7d' }
      ],
      defense: [
        { id: 'D1', label: 'D1', color: '#ff5252' },
        { id: 'D2', label: 'D2', color: '#ff5252' },
        { id: 'D3', label: 'D3', color: '#ff5252' },
        { id: 'D4', label: 'D4', color: '#ff5252' },
        { id: 'D5', label: 'D5', color: '#ff5252' }
      ]
    },
    keyframes: [
      {
        progress: 0,
        time: '0.0s',
        desc: '1. 姿態偽裝：SG 擺出要上提為 PG 做高位擋拆的姿勢，防守者 D2 準備進行換防溝通。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 40, y: 70 },
          SG: { x: 45, y: 55 },
          SF: { x: 15, y: 75 },
          PF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 40, y: 64 },
          D2: { x: 45, y: 50 },
          D3: { x: 18, y: 70 },
          D4: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      },
      {
        progress: 50,
        time: '2.0s',
        desc: '2. 幽靈假擋：SG 未接觸 D1 便突然加速向右側 45 度角彈出！D1 與 D2 瞬間產生猶豫包夾 PG。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 30, y: 55 },
          SG: { x: 70, y: 65 }, // 幽靈外彈
          SF: { x: 15, y: 75 },
          PF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 35, y: 55 }, // 兩人都看著 PG
          D2: { x: 38, y: 56 },
          D3: { x: 18, y: 70 },
          D4: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      },
      {
        progress: 100,
        time: '4.2s',
        desc: '3. 分球空檔出手：PG 精準分球給右側完全空檔的 SG，輕鬆出手射入三分球！',
        ballOwner: 'SG',
        positions: {
          PG: { x: 28, y: 52 },
          SG: { x: 70, y: 65 },
          SF: { x: 15, y: 75 },
          PF: { x: 85, y: 75 },
          C: { x: 85, y: 25 },
          D1: { x: 32, y: 54 },
          D2: { x: 48, y: 60 }, // 太晚警覺撲出
          D3: { x: 18, y: 70 },
          D4: { x: 82, y: 70 },
          D5: { x: 75, y: 30 }
        }
      }
    ]
  },

  {
    id: 'pnr-drag',
    name: '5. 轉換拖曳擋拆 (Drag Screen)',
    category: '快攻轉換戰術',
    summary: '在快攻轉換推進中，防守方陣型尚未立穩時，大個子球員跟進在半場進行快速拖曳擋拆。',
    keyConcepts: [
      '趁虛而入：利用對方退防未定的混亂期發動擋拆。',
      '節奏變化：持球者利用拖曳擋拆加速切入，常能直接撕裂對手半場防線。'
    ],
    players: {
      offense: [
        { id: 'PG', label: 'PG (1號)', color: '#38ef7d' },
        { id: 'PF', label: 'PF (4號)', color: '#38ef7d' },
        { id: 'SG', label: 'SG (2號)', color: '#38ef7d' },
        { id: 'SF', label: 'SF (3號)', color: '#38ef7d' },
        { id: 'C', label: 'C (5號)', color: '#38ef7d' }
      ],
      defense: [
        { id: 'D1', label: 'D1', color: '#ff5252' },
        { id: 'D4', label: 'D4', color: '#ff5252' },
        { id: 'D2', label: 'D2', color: '#ff5252' },
        { id: 'D3', label: 'D3', color: '#ff5252' },
        { id: 'D5', label: 'D5', color: '#ff5252' }
      ]
    },
    keyframes: [
      {
        progress: 0,
        time: '0.0s',
        desc: '1. 快攻推進：PG 迅速運球過半場，拖後跟進的 PF 在中圈附近直接發動 Drag Screen。',
        ballOwner: 'PG',
        positions: {
          PG: { x: 50, y: 80 },
          PF: { x: 50, y: 88 },
          SG: { x: 15, y: 65 },
          SF: { x: 85, y: 65 },
          C: { x: 75, y: 30 },
          D1: { x: 50, y: 72 },
          D4: { x: 55, y: 82 },
          D2: { x: 20, y: 60 },
          D3: { x: 80, y: 60 },
          D5: { x: 70, y: 25 }
        }
      },
      {
        progress: 60,
        time: '2.2s',
        desc: '2. 行進間掩護：PF 在高速運球中給 D1 掩護，PG 一步加速直插油漆區！',
        ballOwner: 'PG',
        positions: {
          PG: { x: 45, y: 40 },
          PF: { x: 52, y: 68 },
          SG: { x: 15, y: 65 },
          SF: { x: 85, y: 65 },
          C: { x: 75, y: 30 },
          D1: { x: 50, y: 68 },
          D4: { x: 48, y: 48 }, // 退防倉促
          D2: { x: 20, y: 60 },
          D3: { x: 80, y: 60 },
          D5: { x: 65, y: 25 }
        }
      },
      {
        progress: 100,
        time: '3.8s',
        desc: '3. 騎馬射箭得分：對手內線尚未站定防守位置，PG 拋投上籃輕鬆取分！',
        ballOwner: 'PG',
        positions: {
          PG: { x: 50, y: 18 },
          PF: { x: 52, y: 60 },
          SG: { x: 15, y: 65 },
          SF: { x: 85, y: 65 },
          C: { x: 75, y: 30 },
          D1: { x: 48, y: 55 },
          D4: { x: 45, y: 25 },
          D2: { x: 20, y: 60 },
          D3: { x: 80, y: 60 },
          D5: { x: 60, y: 20 }
        }
      }
    ]
  }
];
