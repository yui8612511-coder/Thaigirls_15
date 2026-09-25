/* =========================
   Language
========================= */

let LANG = "zh";

const TEXT = {

  zh: {
    languageTitle: "泰國女藝人<br>喜歡的臉 TOP9",
    chooseLanguage: "請選擇語言",

    homeTitle: "泰國女藝人<br><strong>顏值理想型 TOP9 👑</strong>",
    homeLead: "從92位候選人中憑直覺選擇，<br>決定你自己「喜歡的臉」TOP9。",
    stepPre: "🌱 預選",
    stepMain: "🔥 本選",
    stepFinal: "⚔️ 最終戰",
    stepResult: "👑 決賽",
    startPre: "開始預選",
    saveNote: "不需要登入。進度會保存在這台裝置的瀏覽器中。",

    pre: "預選",
    preTitle: "預選",
    preDescription: "請從顯示的成員中，<br>選出你覺得「最喜歡這張臉」的人。",
    preRules: "可以複選！<br><b>4人畫面、3人畫面都可以選 0～3 人</b>。",
    startPreArrow: "開始預選 →",
    home: "回首頁",
    chooseFace: "請選出你喜歡的臉",
    intuition: "可以複選。不用想太多，憑直覺就好 ♡",
    next: "下一步 →",

    preDoneTitle: "預選結束！",
    selectedFaces: "你選出了",
    people: "位喜歡的臉。",
    goMainDescription: "接下來進入候選人直接比較的「本選」。",
    goMain: "🔥 前往本選",
    redoPre: "再做一次預選",

    mainTitle: "本選",
    mainDescription: "請依序選出你喜歡的臉：<br><b>第一名 → 第二名</b>！",
    mainRules: "① 點選最喜歡的臉<br>② 再點選第二喜歡的臉<br><br><b>本選共 3 ROUND。</b><br>越到後面，會比較越接近的候選人。",
    startMain: "開始本選",
    mainHint: "先選第一名 → 再選第二名",
    first: "① 你最喜歡哪一位？",
    second: "② 接下來你喜歡哪一位？",

    mainDoneTitle: "本選 3 ROUND 結束！",
    mainDoneText: "候選人的比較已經完成。",
    mainDoneText2: "接下來進入決定18位決賽候選人的「本選 最終戰」。",
    goLast: "⚔️ 前往本選最終戰",

    lastTitle: "本選 最終戰",
    lastDescription: "為了爭取進入決賽<br>最後一戰！",
    lastRules: "再次比較接近晉級線的候選人。<br><br><b>本選前段的候選人保留決賽資格。</b><br>只重新比較晉級線附近的人。",
    startLast: "開始最終戰",
    lastBattle: "最終戰",
    lastHint: "選出你想進入決賽的人",

    finalistsTitle: "18位決賽候選人決定！",
    finalistsText: "接下來完全二選一。<br>從第一名到第九名，決定你的喜歡的臉 TOP9。",
    goFinal: "👑 前往決賽",

    finalTitle: "決賽 TOP9 選拔中",
    finalQuestion: "你比較喜歡哪張臉？",
    finalHint: "憑直覺點選一人。TOP9 確定後就結束。",
    finalQuestionDynamic: "你更喜歡哪一位？",

    resultTitle: "你的<br><strong>泰國女藝人<br>顏值理想型 TOP9</strong> 👑",
    copyResult: "複製結果文字",
    changeLanguage: "重新選擇語言",
    redo: "再做一次",
    copyright: "非官方粉絲製作網站。圖片、姓名等權利歸屬於各自的權利人。",

    maxThree: "每個畫面最多選 3 人",
    chooseOther: "請選擇其他候選人",
    copied: "已複製結果 ♡",
    copyFail: "無法複製",
    undo: "↶ 上一步"
  },


  en: {
    languageTitle: "Thai Actresses<br>Favorite Face TOP9",
    chooseLanguage: "Choose your language",

    homeTitle: "Thai Actresses<br><strong>Favorite Face TOP9 👑</strong>",
    homeLead: "Choose intuitively from 92 actresses,<br>and discover your own Favorite Face TOP9.",
    stepPre: "🌱 Preliminary",
    stepMain: "🔥 Main Round",
    stepFinal: "⚔️ Last Battle",
    stepResult: "👑 Final",
    startPre: "Start",
    saveNote: "No login required. Your progress is saved in this browser.",

    pre: "Preliminary",
    preTitle: "Preliminary",
    preDescription: "Choose the people whose faces<br>you personally like.",
    preRules: "Multiple selections allowed!<br><b>You can choose 0–3 people on each screen.</b>",
    startPreArrow: "Start →",
    home: "Home",
    chooseFace: "Choose the faces you like",
    intuition: "Choose intuitively. Don't overthink it ♡",
    next: "Next →",

    preDoneTitle: "Preliminary complete!",
    selectedFaces: "You selected",
    people: " people.",
    goMainDescription: "Next, compare the candidates directly in the Main Round.",
    goMain: "🔥 Go to Main Round",
    redoPre: "Redo Preliminary",

    mainTitle: "Main Round",
    mainDescription: "Choose your favorites in order:<br><b>1st → 2nd</b>!",
    mainRules: "① Choose your favorite first<br>② Then choose your second favorite<br><br><b>There are 3 rounds.</b><br>Later rounds compare closer candidates.",
    startMain: "Start Main Round",
    mainHint: "Choose 1st → then 2nd",
    first: "① Which one do you like most?",
    second: "② Which one do you prefer next?",

    mainDoneTitle: "Main Round complete!",
    mainDoneText: "All candidate comparisons are complete.",
    mainDoneText2: "Next, the final battle will determine the 18 finalists.",
    goLast: "⚔️ Go to Last Battle",

    lastTitle: "Last Battle",
    lastDescription: "One final battle<br>for a place in the finals!",
    lastRules: "Candidates near the qualification line will be compared again.<br><br><b>Leading candidates keep their finalist spots.</b><br>Only candidates near the cutoff are compared again.",
    startLast: "Start Last Battle",
    lastBattle: "Last Battle",
    lastHint: "Choose who you want to send to the finals",

    finalistsTitle: "18 finalists selected!",
    finalistsText: "From here, it's one-on-one.<br>Choose your favorites to determine your TOP9.",
    goFinal: "👑 Go to Final",

    finalTitle: "Selecting your TOP9",
    finalQuestion: "Which face do you prefer?",
    finalHint: "Choose intuitively. The game ends when your TOP9 is decided.",
    finalQuestionDynamic: "Which one do you prefer?",

    resultTitle: "Your<br><strong>Thai Actresses<br>Favorite Face TOP9</strong> 👑",
    copyResult: "Copy Results",
    changeLanguage: "Change Language",
    redo: "Play Again",
    copyright: "Unofficial fan-made website. Image and name rights belong to their respective owners.",

    maxThree: "You can choose up to 3 people",
    chooseOther: "Please choose another candidate",
    copied: "Results copied ♡",
    copyFail: "Unable to copy",
    undo: "↶ Previous"
  },


  ja: {
    languageTitle: "タイ女性芸能人<br>好き顔 TOP9",
    chooseLanguage: "言語を選択してください",

    homeTitle: "タイ女性芸能人<br><strong>好き顔 TOP9 👑</strong>",
    homeLead: "92人の候補者から直感で選んで、<br>あなたの「好き顔」TOP9を決めよう。",
    stepPre: "🌱 予選",
    stepMain: "🔥 本選",
    stepFinal: "⚔️ 最終戦",
    stepResult: "👑 決勝",
    startPre: "予選を始める",
    saveNote: "ログイン不要。このブラウザに進行状況が保存されます。",

    pre: "予選",
    preTitle: "予選",
    preDescription: "表示された候補者の中から、<br>「この顔が好き！」と思う人を選んでください。",
    preRules: "複数選択OK！<br><b>4人・3人の画面で0～3人選べます。</b>",
    startPreArrow: "予選を始める →",
    home: "ホーム",
    chooseFace: "好きな顔を選んでください",
    intuition: "考えすぎず、直感で選んでOK ♡",
    next: "次へ →",

    preDoneTitle: "予選終了！",
    selectedFaces: "あなたが選んだ好き顔は",
    people: "人です。",
    goMainDescription: "次は候補者を直接比較する「本選」です。",
    goMain: "🔥 本選へ",
    redoPre: "予選をやり直す",

    mainTitle: "本選",
    mainDescription: "好きな順番に選んでください：<br><b>1位 → 2位</b>！",
    mainRules: "① 一番好きな顔を選ぶ<br>② 次に好きな顔を選ぶ<br><br><b>本選は全3 ROUND。</b><br>後半になるほど近い候補者同士を比較します。",
    startMain: "本選を始める",
    mainHint: "1位を選ぶ → 次に2位を選ぶ",
    first: "① 一番好きなのはどっち？",
    second: "② 次に好きなのはどっち？",

    mainDoneTitle: "本選3 ROUND終了！",
    mainDoneText: "候補者の比較が完了しました。",
    mainDoneText2: "次は18人の決勝候補を決める「本選 最終戦」です。",
    goLast: "⚔️ 最終戦へ",

    lastTitle: "本選 最終戦",
    lastDescription: "決勝進出をかけた<br>最後の戦い！",
    lastRules: "ボーダー付近の候補者をもう一度比較します。<br><br><b>上位の候補者は決勝進出をキープ。</b><br>ボーダー付近のみ再比較します。",
    startLast: "最終戦を始める",
    lastBattle: "最終戦",
    lastHint: "決勝に進めたい人を選んでください",

    finalistsTitle: "18人の決勝候補が決定！",
    finalistsText: "ここからは完全な二択です。<br>1位から9位まで、あなたの好き顔TOP9を決めます。",
    goFinal: "👑 決勝へ",

    finalTitle: "決勝 TOP9 選抜中",
    finalQuestion: "どちらの顔が好き？",
    finalHint: "直感で1人を選んでください。TOP9が決まったら終了です。",
    finalQuestionDynamic: "どちらが好き？",

    resultTitle: "あなたの<br><strong>タイ女性芸能人<br>好き顔 TOP9</strong> 👑",
    copyResult: "結果をコピー",
    changeLanguage: "言語を変更",
    redo: "もう一度やる",
    copyright: "非公式ファン制作サイトです。画像・氏名等の権利は各権利者に帰属します。",

    maxThree: "1画面につき3人まで選べます",
    chooseOther: "別の候補者を選んでください",
    copied: "結果をコピーしました ♡",
    copyFail: "コピーできませんでした",
    undo: "↶ ひとつ前"
  }

};

function setLanguage(lang) {

  LANG = lang;

  localStorage.setItem("sukigao9_language", lang);

  updateLanguage();

  show("home");
}


function changeLanguage() {
  show("language");
}


function updateLanguage() {

  const T = TEXT[LANG] || TEXT.zh;

  document.documentElement.lang =
    LANG === "zh"
      ? "zh-Hant"
      : LANG;

  document
    .querySelectorAll("[data-i18n]")
    .forEach(el => {

      const key =
        el.dataset.i18n;

      if (T[key] !== undefined) {
        el.textContent = T[key];
      }

    });

  document
    .querySelectorAll("[data-i18n-html]")
    .forEach(el => {

      const key =
        el.dataset.i18nHtml;

      if (T[key] !== undefined) {
        el.innerHTML = T[key];
      }

    });

  const title =
    document.querySelector("title");

  if (title) {

    title.textContent =
      LANG === "zh"
        ? "泰國女藝人 誰是你的顏值理想型？TOP9"
        : LANG === "en"
          ? "Thai Actresses · Favorite Face TOP9"
          : "タイ女性芸能人 · 好き顔 TOP9";
  }
}
/* =========================
   人物資料
========================= */

const NAMES = [
  ['Pam', 'images/pam.jpg'],
  ['Arhoung', 'images/arhoung.jpg'],
  ['May', 'images/may.jpg'],
  ['Yuyu', 'images/yuyu.jpg'],
  ['Apple', 'images/apple.jpg'],
  ['Nycha', 'images/nycha.jpg'],
  ['Myyu', 'images/myyu.jpg'],
  ['Piploy', 'images/piploy.jpg'],
  ['Enjoy', 'images/enjoy.jpg'],
  ['Bonnie', 'images/bonnie.jpg'],
  ['Lilly', 'images/lilly.jpg'],
  ['Faye', 'images/faye.jpg'],
  ['Tan', 'images/tan.jpg'],
  ['Engfa', 'images/engfa.jpg'],
  ['Jayna', 'images/jayna.jpg'],
  ['Aya', 'images/aya.jpg'],
  ['Fond', 'images/fond.jpg'],
  ['Ciize', 'images/ciize.jpg'],
  ['Jaoying', 'images/jaoying.jpg'],
  ['Oaey', 'images/oaey.jpg'],
  ['Namtan', 'images/namtan.jpg'],
  ['Tungpang', 'images/tungpang.jpg'],
  ['Mint', 'images/mint.jpg'],
  ['Mim', 'images/mim-2.jpg'],
  ['Mingming', 'images/mingming.jpg'],
  ['Gift', 'images/gift.jpg'],
  ['Aosin', 'images/aosin.jpg'],
  ['Puyfai', 'images/puyfai.jpg'],
  ['Orm', 'images/orm.jpg'],
  ['Opal', 'images/opal.jpg'],
  ['Earn', 'images/earn.jpg'],
  ['June', 'images/june-2.jpg'],
  ['Janeyeh', 'images/janeyeh.jpg'],
  ['June', 'images/june.jpg'],
  ['Fay', 'images/fay.jpg'],
  ['Tk', 'images/tk.jpg'],
  ['Film', 'images/film.jpg'],
  ['Anda', 'images/anda.jpg'],
  ['Nur', 'images/nur.jpg'],
  ['Grace', 'images/grace.jpg'],
  ['Belle', 'images/belle.jpg'],
  ['Namwan', 'images/namwan.jpg'],
  ['Niky', 'images/niky.jpg'],
  ['Mewnich', 'images/mewnich.jpg'],
  ['Jingjing', 'images/jingjing.jpg'],
  ['Natt', 'images/natt.jpg'],
  ['Pahn', 'images/pahn.jpg'],
  ['Becky', 'images/becky.jpg'],
  ['Mie', 'images/mie.jpg'],
  ['Kapook', 'images/kapook.jpg'],
  ['Shu', 'images/shu.jpg'],
  ['Lookhmee', 'images/lookhmee.jpg'],
  ['Yada', 'images/yada.jpg'],
  ['Whan', 'images/whan.jpg'],
  ['Noey', 'images/noey.jpg'],
  ['Fay', 'images/fay-2.jpg'],
  ['Lookkaew', 'images/lookkaew.jpg'],
  ['Charlotte', 'images/charlotte.jpg'],
  ['Meen', 'images/meen.jpg'],
  ['Oom', 'images/oom.jpg'],
  ['Gene', 'images/gene.jpg'],
  ['Lena', 'images/lena.jpg'],
  ['Milk', 'images/milk.jpg'],
  ['Pangjie', 'images/pangjie.jpg'],
  ['Atom', 'images/atom.jpg'],
  ['Sonya', 'images/sonya.jpg'],
  ['Nile', 'images/nile.jpg'],
  ['Lingling', 'images/lingling.jpg'],
  ['Love', 'images/love.jpg'],
  ['Miu', 'images/miu.jpg'],
  ['Bam', 'images/bam.jpg'],
  ['Mook', 'images/mook.jpg'],
  ['Kao', 'images/kao.jpg'],
  ['Freen', 'images/freen.jpg'],
  ['Jessie', 'images/jessie.jpg'],
  ['England', 'images/england.jpg'],
  ['Ginny', 'images/ginny.jpg'], 
  ['Namneung', 'images/namneung.jpg'],
  ['Chanya', 'images/chanya.jpg'],
  ['Pitcha', 'images/pitcha.jpg'],
  ['View', 'images/view.jpg'],
  ['Emi', 'images/emi.jpg'],
  ['Puinnoon', 'images/puinnoon.jpg'],
  ['Mable', 'images/mable.jpg'],
  ['Mim', 'images/mim.jpg'],
  ['Babe', 'images/babe.jpg'],
  ['Bint', 'images/bint.jpg'],
  ['Jan', 'images/jan.jpg'],
  ['Yoko', 'images/yoko.jpg'],
  ['Prim', 'images/prim.jpg'],
  ['Nepjune', 'images/nepjune.jpg'],
  ['Ploy', 'images/ploy.jpg']
];

const A = NAMES.map((x, i) => ({
  id: i,
  name: x[0],
  group: "",
  image: x[1]
}));


/* =========================
   遊戲狀態
========================= */

let S = {
  pre: [],
  candidates: [],
  score: {},
  round: 1,
  pairs: [],
  pi: 0,
  first: null,

  finalists: [],

  lastPairs: [],
  li: 0,

  ranking: [],
  pool: [],

  finalRuns: [],
  finalNextRuns: [],
  finalRunIndex: 0,
  finalJob: null
};


/* =========================
   基本工具
========================= */

const $ = s => document.querySelector(s);

const screens = [
  "language",
  "home",
  "preIntro",
  "pre",
  "preDone",
  "mainIntro",
  "main",
  "mainDone",
  "lastIntro",
  "last",
  "finalists",
  "final",
  "result"
];

function show(id) {
  screens.forEach(x => {
    const el = $("#" + x);
    if (el) {
      el.classList.toggle("hidden", x !== id);
    }
  });

  window.scrollTo(0, 0);
}

function toast(t) {
  const el = $("#toast");
  if (!el) return;

  el.textContent = t;
  el.classList.add("show");

  setTimeout(() => {
    el.classList.remove("show");
  }, 1400);
}

function c(i) {
  return [
    "#a87388",
    "#c18c8e",
    "#817395",
    "#c18d76",
    "#8d7c93",
    "#b17c87",
    "#7c8196",
    "#bd9480",
    "#967080",
    "#7c7188"
  ][i % 10];
}

function get(id) {
  return A.find(a => a.id === Number(id));
}


/* =========================
   圖片
========================= */

function init(a) {
  return `
    <div class="photo" style="background:${c(a.id)}">
      <img
        src="${a.image}"
        alt="${a.name}"
        onerror="this.style.display='none'"
      >
    </div>
  `;
}


/* =========================
   一般人物卡片
   預選／本選／決選
========================= */

function card(id, cls = "card") {
  const a = get(id);

  if (!a) return "";

  return `
    <button
      class="${cls}"
      data-id="${a.id}"
      type="button"
    >
      ${init(a)}
      <div class="name">${a.name}</div>
    </button>
  `;
}


/* =========================
   TOP9 專用卡片
   排名只顯示 1～9
========================= */

function resultCard(id, rank) {
  const a = get(id);

  if (!a) return "";

  return `
    <div class="card resultCard">
      <div
        class="photo"
        style="background:${c(a.id)}"
      >
        <img
          src="${a.image}"
          alt="${a.name}"
          onerror="this.style.display='none'"
        >

        <span class="rankBadge">${rank}</span>
      </div>

      <div class="resultNameRow">
        <div class="resultName">
          ${a.name}
        </div>
      </div>
    </div>
  `;
}


/* =========================
   重置
========================= */

function resetAll() {
  S = {
    pre: [],
    candidates: [],
    score: {},
    round: 1,
    pairs: [],
    pi: 0,
    first: null,

    finalists: [],

    lastPairs: [],
    li: 0,

    ranking: [],
    pool: [],

    finalRuns: [],
    finalNextRuns: [],
    finalRunIndex: 0,
    finalJob: null
  };

  show("home");
}


/* =========================================================
   預選
========================================================= */

let groups = [];
let gi = 0;
let picked = [];


function makeGroups() {
  groups = [];

  let i = 0;

  while (i < A.length) {
    const left = A.length - i;

    const n =
      left === 6 || left % 4 === 3
        ? 3
        : 4;

    groups.push(A.slice(i, i + n));
    i += n;
  }
}


function startPre() {
  makeGroups();

  gi = 0;
  S.pre = [];

  renderPre();

  show("pre");
}


function renderPre() {
  const g = groups[gi];

  if (!g) return;

  const title = $("#preTitle");
  const grid = $("#preGrid");
  const count = $("#preCount");

  if (title) {
    title.textContent =
      `預選 ${gi + 1} / ${groups.length}`;
  }

  picked = [];

  if (grid) {
    grid.innerHTML =
      g.map(a => card(a.id)).join("");

    document
      .querySelectorAll("#preGrid .card")
      .forEach(x => {

        x.onclick = () => {

          const id =
            Number(x.dataset.id);

          if (picked.includes(id)) {

            picked =
              picked.filter(v => v !== id);

            x.classList.remove("selected");

            x.querySelector(".check")?.remove();

          } else if (picked.length < 3) {

            picked.push(id);

            x.classList.add("selected");

            const z =
              document.createElement("span");

            z.className = "check";
            z.textContent = "✓";

            x.querySelector(".photo")?.append(z);

          } else {

            toast(TEXT[LANG].maxThree);
          }

          if (count) {
            count.textContent =
              `選擇中 ${picked.length} / 3`;
          }
        };
      });
  }

  if (count) {
    count.textContent =
  `${TEXT[LANG].selectedFaces || (LANG === "en" ? "Selected" : LANG === "ja" ? "選択中" : "目前選擇")} 0 / 3`;
  }
}


const preNext = $("#preNext");

if (preNext) {

  preNext.onclick = () => {

    S.pre.push(...picked);

    gi++;

    if (gi < groups.length) {

      renderPre();

    } else {

      S.candidates =
        [...new Set(S.pre)];

      const preN = $("#preN");

      if (preN) {
        preN.textContent =
          S.candidates.length;
      }

      show("preDone");
    }
  };
}


/* =========================================================
   配對
========================================================= */

function pairList(ids) {

  const x =
    [...ids].sort(
      () => Math.random() - 0.5
    );

  const p = [];

  for (let i = 0; i < x.length - 1; i += 2) {
    p.push([
      x[i],
      x[i + 1]
    ]);
  }

  if (x.length % 2) {
    p.push([
      x[x.length - 1],
      x[0]
    ]);
  }

  return p;
}


/* =========================================================
   本選
========================================================= */

function startMain() {

  S.score = {};

  S.candidates.forEach(id => {
    S.score[id] = 0;
  });

  S.round = 1;

  prepareMain();

  show("main");
}


function prepareMain() {

  const sorted =
    [...S.candidates].sort(
      (a, b) =>
        S.score[b] - S.score[a] ||
        a - b
    );

  S.pairs =
    S.round === 1
      ? pairList(S.candidates)
      : pairList(sorted);

  S.pi = 0;
  S.first = null;

  renderMain();
}


function renderMain() {

  if (S.pi >= S.pairs.length) {

    if (S.round < 3) {

      S.round++;

      prepareMain();

    } else {

      show("mainDone");
    }

    return;
  }

  const p =
    S.pairs[S.pi];

  const title =
    $("#mainTitle");

  const progress =
    $("#mainProgress");

  const prompt =
    $("#mainPrompt");

  const pair =
    $("#mainPair");

  if (title) {
    title.textContent =
      `ROUND ${S.round} / 3`;
  }

  if (progress) {
    progress.textContent =
      `${S.pi + 1} / ${S.pairs.length}`;
  }

  if (prompt) {
    prompt.textContent =
  S.first === null
    ? TEXT[LANG].first
    : TEXT[LANG].second;
  }

  if (pair) {

    pair.innerHTML =
      p.map(id =>
        card(id, "duel")
      ).join("");

    document
      .querySelectorAll("#mainPair .duel")
      .forEach(x => {

        x.onclick = () => {
          mainPick(
            Number(x.dataset.id)
          );
        };

      });
  }
}


function mainPick(id) {

  const p =
    S.pairs[S.pi];

  if (S.first === null) {

    S.first = id;

    renderMain();

    return;
  }

  if (id === S.first) {

    toast(TEXT[LANG].chooseOther);

    return;
  }

  S.score[S.first] += 2;
  S.score[id] += 1;

  S.pi++;
  S.first = null;

  renderMain();
}


/* =========================================================
   決選
========================================================= */

function startLast() {

  const sorted =
    [...S.candidates].sort(
      (a, b) =>
        S.score[b] - S.score[a] ||
        a - b
    );

  S.finalists =
    sorted.slice(
      0,
      Math.min(18, sorted.length)
    );

  const b =
    S.finalists.slice(
      Math.max(
        0,
        S.finalists.length - 6
      )
    );

  S.lastPairs =
    pairList(b);

  S.li = 0;
  S.first = null;

  renderLast();

  show("last");
}


function renderLast() {

  if (S.li >= S.lastPairs.length) {

    finishLast();

    return;
  }

  const p =
    S.lastPairs[S.li];

  const pair =
    $("#lastPair");

  if (!pair) return;

  pair.innerHTML =
    p.map(id =>
      card(id, "duel")
    ).join("");

  document
    .querySelectorAll("#lastPair .duel")
    .forEach(x => {

      x.onclick = () => {
        lastPick(
          Number(x.dataset.id)
        );
      };

    });
}


function lastPick(id) {

  const p =
    S.lastPairs[S.li];

  if (S.first === null) {

    S.first = id;

    return;
  }

  if (id === S.first) {

    toast(TEXT[LANG].chooseOther);

    return;
  }

  S.score[S.first] += 4;
  S.score[id] += 2;

  S.li++;
  S.first = null;

  renderLast();
}


function finishLast() {

  const sorted =
    [...S.candidates].sort(
      (a, b) =>
        S.score[b] - S.score[a] ||
        a - b
    );

  S.finalists =
    sorted.slice(
      0,
      Math.min(18, sorted.length)
    );

  show("finalists");
}


/* =========================================================
   最終排序
========================================================= */

function startFinal() {

  S.ranking = [];

  S.finalRuns =
    S.finalists.map(id => [id]);

  S.finalNextRuns = [];

  S.finalRunIndex = 0;

  S.finalJob = null;

  show("final");

  nextFinal();
}


function beginNextFinalLevel() {

  if (S.finalRuns.length <= 1) {

    S.ranking =
      S.finalRuns[0].slice(0, 9);

    return result();
  }

  S.finalNextRuns = [];
  S.finalRunIndex = 0;
  S.finalJob = null;

  nextFinal();
}


function nextFinal() {

  if (S.finalRuns.length <= 1) {

    S.ranking =
      S.finalRuns[0].slice(0, 9);

    return result();
  }

  if (
    S.finalRunIndex >=
    S.finalRuns.length
  ) {

    S.finalRuns =
      S.finalNextRuns;

    return beginNextFinalLevel();
  }

  if (!S.finalJob) {

    const left =
      S.finalRuns[
        S.finalRunIndex
      ];

    const right =
      S.finalRuns[
        S.finalRunIndex + 1
      ];

    if (!right) {

      S.finalNextRuns.push(
        left.slice()
      );

      S.finalRunIndex += 2;

      return nextFinal();
    }

    S.finalJob = {
      left: [...left],
      right: [...right],
      i: 0,
      j: 0,
      out: []
    };
  }

  const j =
    S.finalJob;

  if (j.i >= j.left.length) {

    j.out.push(
      ...j.right.slice(j.j)
    );

    S.finalNextRuns.push(
      j.out
    );

    S.finalRunIndex += 2;
    S.finalJob = null;

    return nextFinal();
  }

  if (j.j >= j.right.length) {

    j.out.push(
      ...j.left.slice(j.i)
    );

    S.finalNextRuns.push(
      j.out
    );

    S.finalRunIndex += 2;
    S.finalJob = null;

    return nextFinal();
  }

  const a =
    j.left[j.i];

  const b =
    j.right[j.j];

  const pair =
    $("#finalPair");

  if (pair) {

    pair.innerHTML =
      [
        card(a, "duel"),
        card(b, "duel")
      ].join("");

    document
      .querySelectorAll("#finalPair .duel")
      .forEach(x => {

        x.onclick = () => {
          finalPick(
            Number(x.dataset.id)
          );
        };

      });
  }

  const prompt =
    $("#finalPrompt");

  if (prompt) {
    prompt.textContent =
  TEXT[LANG].finalQuestionDynamic;
  }

  const progress =
    $("#finalProgress");

  if (progress) {
    progress.textContent =
      `最終戰比較 · ${S.finalRunIndex / 2 + 1}`;
  }
}


function finalPick(id) {

  const j =
    S.finalJob;

  if (!j) return;

  const a =
    j.left[j.i];

  const b =
    j.right[j.j];

  if (id === a) {

    j.out.push(a);
    j.i++;

  } else if (id === b) {

    j.out.push(b);
    j.j++;

  } else {

    return;
  }

  nextFinal();
}


/* =========================================================
   最終結果 TOP9
========================================================= */

function result() {

  const ids =
    S.ranking.slice(0, 9);

  const grid =
    $("#resultGrid");

  if (grid) {

    grid.innerHTML =
      ids
        .map(
          (id, i) =>
            resultCard(id, i + 1)
        )
        .join("");
  }

  const list =
    $("#resultList");

  if (list) {

    list.innerHTML =
      ids
        .map(
          (id, i) => `
            <li>
              <span>${i + 1}</span>
              <span>${get(id).name}</span>
            </li>
          `
        )
        .join("");
  }

  show("result");
}


/* =========================================================
   複製結果
========================================================= */

async function copyResult() {

  const text =
    "我的泰國女藝人 顏值理想型 TOP9\n" +
    S.ranking
      .slice(0, 9)
      .map(
        (id, i) =>
          `${i + 1} ${get(id).name}`
      )
      .join("\n");

  try {

    await navigator.clipboard.writeText(text);

    toast(TEXT[LANG].copied);

  } catch (e) {

    toast(TEXT[LANG].copyFail);
  }
}
