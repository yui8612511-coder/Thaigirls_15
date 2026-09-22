/* =========================================================
   THAI GIRLS — TOP9
   完整版 script.js
========================================================= */


/* =========================================================
   人物資料
========================================================= */

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
  ['Ginny', 'images/ginny.jpg'],
  ['Miu', 'images/miu.jpg'],
  ['Bam', 'images/bam.jpg'],
  ['Mook', 'images/mook.jpg'],
  ['Kao', 'images/kao.jpg'],
  ['Freen', 'images/freen.jpg'],
  ['Jessie', 'images/jessie.jpg'],
  ['England', 'images/england.jpg'],
  ['Love', 'images/love.jpg'],
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


/* =========================================================
   全域狀態
========================================================= */

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

  finalRuns: [],
  finalNextRuns: [],
  finalRunIndex: 0,
  finalJob: null
};


/* =========================================================
   基本工具
========================================================= */

const $ = s => document.querySelector(s);

const screens = [
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

function get(id) {
  return A.find(a => a.id === id);
}

function color(i) {
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


/* =========================================================
   HTML 元件
========================================================= */

/* 單純照片 */
function photo(a) {
  return `
    <div class="photo" style="background:${color(a.id)}">
      <img
        src="${a.image}"
        alt="${a.name}"
        onerror="this.style.display='none'"
      >
    </div>
  `;
}


/* ---------------------------------------------------------
   預選卡片
--------------------------------------------------------- */

function preCard(id) {
  const a = get(id);

  return `
    <button class="card preCard" data-id="${id}">
      ${photo(a)}
      <div class="name">${a.name}</div>
    </button>
  `;
}


/* ---------------------------------------------------------
   二選一卡片
   ★ 完全獨立，不使用 .nameRow
--------------------------------------------------------- */

function duelCard(id) {
  const a = get(id);

  return `
    <button class="duelCard" data-id="${id}">
      ${photo(a)}
      <div class="duelName">${a.name}</div>
    </button>
  `;
}


/* ---------------------------------------------------------
   TOP9 卡片
   ★ 第一名 badge 與名字同一排
--------------------------------------------------------- */

function resultCard(id, rank) {
  const a = get(id);

  const badge =
    rank === 0
      ? "👑 第一名"
      : `第${rank + 1}名`;

  return `
    <div class="card resultCard ${rank === 0 ? "firstPlace" : ""}">
      ${photo(a)}

      <div class="resultNameRow">
        <span class="rankBadge">${badge}</span>
        <span class="resultName">${a.name}</span>
      </div>
    </div>
  `;
}


/* =========================================================
   RESET
========================================================= */

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

  $("#preTitle").textContent =
    `預選 ${gi + 1} / ${groups.length}`;

  picked = [];

  $("#preGrid").innerHTML =
    g.map(a => preCard(a.id)).join("");

  $("#preCount").textContent =
    "目前選擇 0 / 3";

  document
    .querySelectorAll("#preGrid .preCard")
    .forEach(card => {

      card.onclick = () => {

        const id = Number(card.dataset.id);

        if (picked.includes(id)) {

          picked = picked.filter(v => v !== id);

          card.classList.remove("selected");

          card.querySelector(".check")?.remove();

        } else if (picked.length < 3) {

          picked.push(id);

          card.classList.add("selected");

          const check = document.createElement("span");

          check.className = "check";
          check.textContent = "✓";

          card.querySelector(".photo").append(check);

        } else {

          toast("每次最多選擇3人");
        }

        $("#preCount").textContent =
          `選擇中 ${picked.length} / 3`;
      };
    });
}


$("#preNext").onclick = () => {

  if (picked.length === 0) {
    toast("請至少選擇1人");
    return;
  }

  S.pre.push(...picked);

  gi++;

  if (gi < groups.length) {

    renderPre();

  } else {

    S.candidates = [...new Set(S.pre)];

    $("#preN").textContent =
      S.candidates.length;

    show("preDone");
  }
};


/* =========================================================
   配對
========================================================= */

function pairList(ids) {

  const x = [...ids].sort(
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
   ROUND 1～3
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
        S.score[b] - S.score[a] || a - b
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

  const p = S.pairs[S.pi];

  $("#mainTitle").textContent =
    `ROUND ${S.round} / 3`;

  $("#mainProgress").textContent =
    `${S.pi + 1} / ${S.pairs.length}`;

  $("#mainPrompt").textContent =
    S.first === null
      ? "① 你比較喜歡哪一位的臉？"
      : "② 接下來你比較喜歡哪一位？";

  $("#mainPair").innerHTML =
    p.map(id => duelCard(id)).join("");

  document
    .querySelectorAll("#mainPair .duelCard")
    .forEach(x => {

      x.onclick = () =>
        mainPick(Number(x.dataset.id));
    });
}


function mainPick(id) {

  if (S.first === null) {

    S.first = id;

    renderMain();

    return;
  }

  if (id === S.first) {
    toast("請選擇其他候選人");
    return;
  }

  S.score[S.first] += 2;
  S.score[id] += 1;

  S.pi++;

  S.first = null;

  renderMain();
}


/* =========================================================
   最後候選
========================================================= */

function startLast() {

  const sorted =
    [...S.candidates].sort(
      (a, b) =>
        S.score[b] - S.score[a] || a - b
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

  S.lastPairs = pairList(b);

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

  const p = S.lastPairs[S.li];

  $("#lastPair").innerHTML =
    p.map(id => duelCard(id)).join("");

  document
    .querySelectorAll("#lastPair .duelCard")
    .forEach(x => {

      x.onclick = () =>
        lastPick(Number(x.dataset.id));
    });
}


function lastPick(id) {

  if (S.first === null) {

    S.first = id;

    return;
  }

  if (id === S.first) {
    toast("請選擇其他候選人");
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
        S.score[b] - S.score[a] || a - b
    );

  S.finalists =
    sorted.slice(
      0,
      Math.min(18, sorted.length)
    );

  show("finalists");
}


/* =========================================================
   最終決選
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


  if (S.finalRunIndex >= S.finalRuns.length) {

    S.finalRuns = S.finalNextRuns;

    return beginNextFinalLevel();
  }


  if (!S.finalJob) {

    const left =
      S.finalRuns[S.finalRunIndex];

    const right =
      S.finalRuns[S.finalRunIndex + 1];

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


  const j = S.finalJob;


  if (j.i >= j.left.length) {

    j.out.push(
      ...j.right.slice(j.j)
    );

    S.finalNextRuns.push(j.out);

    S.finalRunIndex += 2;

    S.finalJob = null;

    return nextFinal();
  }


  if (j.j >= j.right.length) {

    j.out.push(
      ...j.left.slice(j.i)
    );

    S.finalNextRuns.push(j.out);

    S.finalRunIndex += 2;

    S.finalJob = null;

    return nextFinal();
  }


  const a = j.left[j.i];
  const b = j.right[j.j];

  $("#finalPair").innerHTML =
    duelCard(a) + duelCard(b);

  if ($("#finalPrompt")) {
    $("#finalPrompt").textContent =
      "你比較喜歡誰？";
  }

  if ($("#finalProgress")) {
    $("#finalProgress").textContent =
      `最終戰比較 · ${S.finalRunIndex / 2 + 1}`;
  }

  document
    .querySelectorAll("#finalPair .duelCard")
    .forEach(x => {

      x.onclick = () =>
        finalPick(Number(x.dataset.id));
    });
}


function finalPick(id) {

  const j = S.finalJob;

  if (!j) return;

  const a = j.left[j.i];
  const b = j.right[j.j];

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
   排名
========================================================= */

function zhRank(i) {

  return [
    "第一名",
    "第二名",
    "第三名",
    "第四名",
    "第五名",
    "第六名",
    "第七名",
    "第八名",
    "第九名"
  ][i] || `第${i + 1}名`;
}


function resultCard(id, rank) {
  const a = get(id);
  const badge = rank === 0 ? "第一名" : `第${rank + 1}名`;

  return `
    <div class="card resultCard ${rank === 0 ? "firstPlace" : ""}">
      ${photo(a)}
      <div class="resultNameRow">
        <span class="rankBadge">${badge}</span>
        <span class="resultName">${a.name}</span>
      </div>
    </div>
  `;
}

/* =========================================================
   複製結果
========================================================= */

async function copyResult() {

  const text =
    "我的泰國女藝人 顏值理想型 TOP9 👑\n" +
    S.ranking
      .slice(0, 9)
      .map(
        (id, i) =>
          `${zhRank(i)} ${get(id).name}`
      )
      .join("\n");

  try {

    await navigator.clipboard.writeText(text);

    toast("已複製結果 ♡");

  } catch (e) {

    toast("無法複製");
  }
}
