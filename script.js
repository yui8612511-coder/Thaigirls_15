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

            toast("每個畫面最多選 3 人");
          }

          if (count) {
            count.textContent =
              `選擇中 ${picked.length} / 3`;
          }
        };
      });
  }

  if (count) {
    count.textContent = "目前選擇 0 / 3";
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
        ? "① 最喜歡哪一張臉？"
        : "② 接下來喜歡哪一位？";
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
      "哪一位的臉你更喜歡？";
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

    toast("已複製結果 ♡");

  } catch (e) {

    toast("無法複製");
  }
}
