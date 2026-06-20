// 1. 單字資料庫 (包含所有單字)
const wordBank = [
  { eng: "clothing", ch: "服飾(n.)" },
  { eng: "style", ch: "款式、風格(n.)" },
  { eng: "conditions", ch: "情況、條件(n.)" },
  { eng: "wage", ch: "工資(n.)" },
  { eng: "increase", ch: "增加(n., v.)" },
  { eng: "profit", ch: "利潤(n.)、獲益(v.)" },
  { eng: "effort", ch: "努力(n.)" },
  { eng: "violate", ch: "違反(v.)" },
  { eng: "aim", ch: "目的是(v.)" },
  { eng: "insert", ch: "植入(v.)" },
  { eng: "demonstrate", ch: "說明(v.)" },
  { eng: "charity", ch: "慈善機構(n.)" },
  { eng: "vast", ch: "廣大的(adj.)" },
  { eng: "majority", ch: "大多數(n.)" },
  { eng: "sympathy", ch: "同情(n.)" },
  { eng: "minor", ch: "次要的、輕微的(adj.)" },
  { eng: "frequently", ch: "頻繁地(adv.)" },
  { eng: "intentionally", ch: "故意地(adv.)" },
  { eng: "cycle", ch: "循環(n.)" },
  { eng: "constantly", ch: "經常地(adv.)" },
  { eng: "refuse", ch: "拒絕(v.)" },
  { eng: "process", ch: "過程(n.)" },
  { eng: "risk", ch: "冒…的風險(v.)" },
  { eng: "industry", ch: "行業(n.)" },
  { eng: "in turn", ch: "因此、轉而" },
  { eng: "put forward something", ch: "提出某事物" },
  { eng: "be meant to do something", ch: "預期做某事" },
  { eng: "turn something around", ch: "扭轉某事" },
  { eng: "virtue", ch: "美德(n.)" },
  { eng: "honesty", ch: "誠實(n.)" },
  { eng: "adventure", ch: "冒險(n.)" },
  { eng: "possess", ch: "擁有(v.)" },
  { eng: "fellow", ch: "同儕的(adj.)" },
  { eng: "policy", ch: "政策、原則(n.)" },
  { eng: "manage", ch: "設法處理(v.)" },
  { eng: "reveal", ch: "揭露(v.)" },
  { eng: "silent", ch: "沉默、安靜的(adj.)" },
  { eng: "cope with", ch: "應付、處理(v.)" },
  { eng: "encounter", ch: "遭遇、遇到(v.)" },
  { eng: "wound", ch: "傷害(v.)" },
  { eng: "awful", ch: "糟糕的(adj.)" },
  { eng: "truth", ch: "真相(n.)" },
  { eng: "negative", ch: "負面的、否定的(adj.)" },
  { eng: "reaction", ch: "反應(n.)" },
  { eng: "maintain", ch: "維持(v.)" },
  { eng: "relationship", ch: "人際關係(n.)" },
  { eng: "circumstance", ch: "情況(n.)" },
  { eng: "determine", ch: "確定、決定(v.)" },
  { eng: "particular", ch: "特定的(adj.)" },
  { eng: "expose to", ch: "暴露(v.)" },
  { eng: "embarrassment", ch: "尷尬(n.)" },
  { eng: "loss", ch: "損失、失去(n.)" },
  { eng: "cover up something", ch: "掩蓋某事" },
  { eng: "make up something", ch: "捏造(藉口、謊言等)" },
  { eng: "save face", ch: "保留顏面" },
  { eng: "would rather A than B", ch: "寧願A也不要B" },
  { eng: "stay up", ch: "熬夜" },
  { eng: "spare one’s feelings", ch: "顧及某人的感受" },
  { eng: "so as to do something", ch: "為了做某事" },
  { eng: "keep (someone) out of something", ch: "使(某人)不捲入某事" },
  { eng: "brilliant", ch: "聰穎、優秀的(adj.)" },
  { eng: "detective", ch: "偵探(n.)" },
  { eng: "keen", ch: "敏銳的(adj.)" },
  { eng: "detail", ch: "細節(n.)" },
  { eng: "remarkable", ch: "非凡的(adj.)" },
  { eng: "wonder", ch: "想知道(v.)" },
  { eng: "publish", ch: "出版(v.)" },
  { eng: "eventually", ch: "最終(adv.)" },
  { eng: "exist", ch: "存在(v.)" },
  { eng: "personality", ch: "人格、個性(n.)" },
  { eng: "analyze", ch: "分析(v.)" },
  { eng: "significant", ch: "重大的、顯著的(adj.)" },
  { eng: "lecture", ch: "講課、講座(n.)" },
  { eng: "musician", ch: "音樂家(n.)" },
  { eng: "deny", ch: "否定(v.)" },
  { eng: "accent", ch: "口音(n.)" },
  { eng: "flee", ch: "迅速逃離(v.)" },
  { eng: "clever", ch: "機靈的、聰穎的(adj.)" },
  { eng: "mystery", ch: "神秘的事物(n.)" },
  { eng: "emotion", ch: "感情、情緒(n.)" },
  { eng: "attractive", ch: "有吸引力的(adj.)" },
  { eng: "admire", ch: "欣賞(v.)" },
  { eng: "of all time", ch: "有史以來" },
  { eng: "put pen to paper", ch: "動筆" },
  { eng: "take off something", ch: "脫下(衣物)" },
  { eng: "all along", ch: "始終" }
];

// 2. 遊戲狀態與記錄變數
let wordPool = [];
let activeEng = [];
let activeCh = [];
let selectedEngSlot = null;
let selectedChSlot = null;
let remainingCount = 0;
let successScore = 0;
let errorScore = 0;
let wrongWordsSet = new Set();
let startTime = null; // 用於計算單輪花費秒數

// ⚠️ 請把你在 Google Apps Script 部署得到的 Web App 網址貼在下方雙引號內：
const GOOGLE_APP_URL = "https://script.google.com/macros/s/AKfycbwxQzgOPKMe8QQE_CZhEyq42uInQ_Nxmf9pT5dLUxBpFUgar9lPZtDtsKmcLneeOJTBBg/exec";

// 3. 亂數洗牌函數 (Fisher-Yates Shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 4. 初始化遊戲
function initGame() {
  let allWords = [...wordBank];
  shuffle(allWords);
  // 每回嚴格抽取 45 個單字測試
  const gameSize = Math.min(45, allWords.length);
  wordPool = allWords.slice(0, gameSize);
  remainingCount = wordPool.length;
  successScore = 0;
  errorScore = 0;
  wrongWordsSet.clear();
  updateScoreboard();
  
  // ⏱️ 記錄此輪遊戲的起點時間
  startTime = new Date();
  activeEng = [];
  activeCh = [];
  
  const initialDraw = Math.min(5, wordPool.length);
  for (let i = 0; i < initialDraw; i++) {
    const word = wordPool.pop();
    activeEng.push(word);
    activeCh.push(word);
  }
  shuffle(activeCh);
  renderColumns();
  document.getElementById('result-modal').classList.add('hidden');
  selectedEngSlot = null;
  selectedChSlot = null;
}

// 5. 更新計分板
function updateScoreboard() {
  document.getElementById('remaining-count').textContent = remainingCount;
  document.getElementById('success-score').textContent = successScore;
  document.getElementById('error-score').textContent = errorScore;
}

// 6. 渲染欄位
function renderColumns() {
  const engColumn = document.getElementById('english-column');
  const chColumn = document.getElementById('chinese-column');
  engColumn.innerHTML = '';
  chColumn.innerHTML = '';
  
  activeEng.forEach(word => {
    const slot = document.createElement('div');
    slot.className = 'slot fade-in';
    slot.textContent = word.eng;
    slot.dataset.type = 'eng';
    slot.dataset.word = word.eng;
    slot.addEventListener('click', handleEngClick);
    engColumn.appendChild(slot);
  });
  
  activeCh.forEach(word => {
    const slot = document.createElement('div');
    slot.className = 'slot fade-in';
    slot.textContent = word.ch;
    slot.dataset.type = 'ch';
    slot.dataset.word = word.eng;
    slot.addEventListener('click', handleChClick);
    chColumn.appendChild(slot);
  });
}

// 7. 點擊英文欄處理
function handleEngClick(e) {
  if (selectedEngSlot) {
    selectedEngSlot.classList.remove('selected');
  }
  selectedEngSlot = e.target;
  selectedEngSlot.classList.add('selected');
  if (selectedChSlot) {
    checkMatch();
  }
}

// 8. 點擊中文欄處理
function handleChClick(e) {
  if (selectedChSlot) {
    selectedChSlot.classList.remove('selected');
  }
  selectedChSlot = e.target;
  selectedChSlot.classList.add('selected');
  if (selectedEngSlot) {
    checkMatch();
  }
}

// 9. 檢查是否配對成功
function checkMatch() {
  const engWord = selectedEngSlot.dataset.word;
  const chWord = selectedChSlot.dataset.word;
  
  if (engWord === chWord) {
    // 配對成功
    selectedEngSlot.classList.add('fade-out');
    selectedChSlot.classList.add('fade-out');
    remainingCount--;
    successScore++;
    updateScoreboard();
    
    const currentEng = selectedEngSlot;
    const currentCh = selectedChSlot;
    selectedEngSlot = null;
    selectedChSlot = null;
    
    setTimeout(() => {
      const engIndex = activeEng.findIndex(w => w.eng === engWord);
      const chIndex = activeCh.findIndex(w => w.eng === chWord);
      let nextWord = null;
      
      if (wordPool.length > 0) {
        nextWord = wordPool.pop();
        activeEng[engIndex] = nextWord;
        activeCh[chIndex] = nextWord;
      } else {
        activeEng.splice(engIndex, 1);
        activeCh.splice(chIndex, 1);
      }
      
      if (nextWord) {
        currentEng.textContent = nextWord.eng;
        currentEng.dataset.word = nextWord.eng;
        currentEng.classList.remove('selected', 'fade-out', 'fade-in');
        void currentEng.offsetWidth;
        currentEng.classList.add('fade-in');
      } else {
        currentEng.remove();
      }
      
      if (nextWord) {
        currentCh.textContent = nextWord.ch;
        currentCh.dataset.word = nextWord.eng;
        currentCh.classList.remove('selected', 'fade-out', 'fade-in');
        void currentCh.offsetWidth;
        currentCh.classList.add('fade-in');
      } else {
        currentCh.remove();
      }
      
      const chColumn = document.getElementById('chinese-column');
      const allChSlots = Array.from(chColumn.children);
      let currentChData = allChSlots.map(slot => ({ text: slot.textContent, wordKey: slot.dataset.word }));
      shuffle(currentChData);
      allChSlots.forEach((slot, index) => {
        slot.textContent = currentChData[index].text;
        slot.dataset.word = currentChData[index].wordKey;
      });
      
      if (activeEng.length === 0) {
        showResult();
      }
    }, 500);
  } else {
    // 配對失敗
    errorScore++;
    updateScoreboard();
    const wrongEngText = selectedEngSlot.textContent;
    const correctWordObj = wordBank.find(w => w.eng === wrongEngText);
    if (correctWordObj) {
      wrongWordsSet.add(`${correctWordObj.eng}(${correctWordObj.ch})`);
    }
    selectedEngSlot.classList.add('wrong');
    selectedChSlot.classList.add('wrong');
    
    const currentEng = selectedEngSlot;
    const currentCh = selectedChSlot;
    selectedEngSlot = null;
    selectedChSlot = null;
    
    setTimeout(() => {
      currentEng.classList.remove('selected', 'wrong');
      currentCh.classList.remove('selected', 'wrong');
    }, 500);
  }
}

// 10. 顯示結算畫面彈出視窗 + 暗中上傳結果與時間記錄至 Google 試算表
function showResult() {
  document.getElementById('final-success').textContent = successScore;
  document.getElementById('final-error').textContent = errorScore;
  const wrongWordsList = document.getElementById('wrong-words-list');
  wrongWordsList.innerHTML = '';
  let wrongWordsString = "";
  
  if (wrongWordsSet.size > 0) {
    document.getElementById('wrong-words-box').style.display = 'block';
    let items = [];
    wrongWordsSet.forEach(wordStr => {
      items.push(wordStr);
      const li = document.createElement('li');
      li.textContent = wordStr;
      wrongWordsList.appendChild(li);
    });
    wrongWordsString = items.join(", ");
  } else {
    document.getElementById('wrong-words-box').style.display = 'none';
    wrongWordsString = "無答錯單字";
  }
  
  // ⏱️ 計算時間花費（秒數）
  const endTime = new Date();
  const timeSpentSeconds = startTime ? Math.round((endTime - startTime) / 1000) : 0;
  
  // 🤫 修正傳輸格式：改用 text/plain 繞過瀏覽器的 CORS 攔截，確保 100% 成功傳送
  if (GOOGLE_APP_URL && GOOGLE_APP_URL !== "YOUR_PASTED_URL_HERE") {
    fetch(GOOGLE_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        successScore: successScore,
        errorScore: errorScore,
        wrongWords: wrongWordsString,
        timeSpent: timeSpentSeconds
      })
    }).catch(err => console.log("Silent logging status:", err));
  }
  document.getElementById('result-modal').classList.remove('hidden');
}

// 11. 監聽重新開始按鈕與網頁載入
document.getElementById('restart-btn').addEventListener('click', initGame);
window.addEventListener('DOMContentLoaded', initGame);
