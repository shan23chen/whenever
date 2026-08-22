/* whenever. spa */
(function (global) {
  "use strict";

  var KEY_SET = "whenever.settings";
  var KEY_HIST = "whenever.history";
  var KEY_CHAT = "whenever.chat";

  var state = {
    view: "home",
    quiz: null,
    answers: [],
    qIndex: 0,
    result: null,
    lastTheme: "surprise",
    lastAsk: "",
    chat: [],
    greeted: false
  };

  function $(id) { return document.getElementById(id); }

  function getSettings() {
    try {
      var raw = localStorage.getItem(KEY_SET);
      var s = raw ? JSON.parse(raw) : {};
      return {
        name: s.name || "",
        key: s.key || "",
        provider: s.provider === "openai" ? "openai" : "xai",
        model: s.model || ""
      };
    } catch (e) {
      return { name: "", key: "", provider: "xai", model: "" };
    }
  }

  function saveSettings(s) {
    localStorage.setItem(KEY_SET, JSON.stringify({
      name: s.name || "",
      key: s.key || "",
      provider: s.provider || "xai",
      model: s.model || ""
    }));
  }

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(KEY_HIST) || "[]"); } catch (e) { return []; }
  }

  function saveHistory(list) {
    localStorage.setItem(KEY_HIST, JSON.stringify(list.slice(0, 24)));
  }

  function toast(msg) {
    var el = $("toast");
    el.textContent = msg;
    el.hidden = false;
    el.classList.remove("hidden");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      el.hidden = true;
      el.classList.add("hidden");
    }, 1800);
  }

  function bindImg(wrap, src) {
    if (!wrap) return;
    wrap.classList.remove("img-missing");
    var img = wrap.querySelector("img");
    if (!src) {
      wrap.classList.add("img-missing");
      if (img) img.remove();
      return;
    }
    if (!img) {
      img = document.createElement("img");
      img.alt = "";
      wrap.insertBefore(img, wrap.firstChild);
    }
    img.onerror = function () {
      wrap.classList.add("img-missing");
      if (img.parentElement) img.remove();
    };
    img.src = src;
  }

  function show(view) {
    state.view = view;
    ["home", "chat", "quiz", "result", "history"].forEach(function (name) {
      var el = $("view-" + name);
      if (!el) return;
      var on = name === view;
      el.hidden = !on;
      el.classList.toggle("hidden", !on);
    });
    window.scrollTo(0, 0);
    if (view === "chat") $("chat-input") && $("chat-input").focus();
  }

  function ensureGreeting() {
    if (state.greeted) return;
    state.greeted = true;
    if (!state.chat.length) {
      state.chat.push({ role: "bot", text: WheneverChat.STARTER, chips: WheneverChat.CHIPS });
    }
    renderChat();
  }

  function focusComposer() {
    var onChat = state.view === "chat";
    if (!onChat) show("home");
    var input = onChat ? $("chat-input") : $("home-input");
    if (input) {
      input.focus();
      if (input.scrollIntoView) input.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }

  function renderChips(host, chips, handler) {
    host.innerHTML = "";
    chips.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = c.label;
      b.addEventListener("click", function () {
        if (c.focus) { focusComposer(); return; }
        handler(c.send);
      });
      host.appendChild(b);
    });
  }

  function renderCovers() {
    var row = $("cover-row");
    row.innerHTML = "";
    WheneverQuizzes.all().forEach(function (quiz) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cover";
      btn.setAttribute("aria-label", quiz.title);
      var art = document.createElement("div");
      art.className = "cover-art";
      art.style.setProperty("--wash", quiz.wash);
      art.setAttribute("data-word", quiz.word);
      var img = document.createElement("img");
      img.alt = "";
      img.src = quiz.cover;
      img.onerror = function () {
        art.classList.add("img-missing");
        img.remove();
      };
      art.appendChild(img);
      var meta = document.createElement("div");
      meta.className = "cover-meta";
      meta.innerHTML = "<strong></strong><span></span>";
      meta.querySelector("strong").textContent = quiz.title;
      meta.querySelector("span").textContent = quiz.subtitle;
      btn.appendChild(art);
      btn.appendChild(meta);
      btn.addEventListener("click", function () { startQuiz(WheneverQuizzes.byId(quiz.id)); });
      row.appendChild(btn);
    });
  }

  function renderChat() {
    var thread = $("chat-thread");
    thread.innerHTML = "";
    state.chat.forEach(function (msg) {
      if (msg.role === "me") {
        var mine = document.createElement("div");
        mine.className = "bubble me";
        mine.textContent = msg.text;
        thread.appendChild(mine);
        return;
      }
      var wrap = document.createElement("div");
      wrap.className = "bubble bot";
      var row = document.createElement("div");
      row.className = "bot-row";
      var av = document.createElement("div");
      av.className = "avatar";
      var aimg = document.createElement("img");
      aimg.alt = "";
      aimg.src = "img/avatar.png";
      aimg.onerror = function () { av.classList.add("img-missing"); aimg.remove(); };
      av.appendChild(aimg);
      var texts = document.createElement("div");
      msg.text.split(/\n+/).forEach(function (p) {
        if (!p.trim()) return;
        var el = document.createElement("p");
        el.className = "bot-text";
        el.textContent = p.trim();
        texts.appendChild(el);
      });
      row.appendChild(av);
      row.appendChild(texts);
      wrap.appendChild(row);
      thread.appendChild(wrap);
      if (msg.chips && msg.chips.length) {
        var hold = document.createElement("div");
        hold.className = "chat-chips";
        renderChips(hold, msg.chips, sendChat);
        thread.appendChild(hold);
      }
    });
    thread.scrollTop = thread.scrollHeight;
    thread.parentElement.scrollTop = thread.parentElement.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
  }

  async function sendChat(text) {
    text = String(text || "").trim();
    if (!text) return;
    state.chat.push({ role: "me", text: text });
    state.chat.forEach(function (m) { if (m.role === "bot") delete m.chips; });
    renderChat();
    var thinking = { role: "bot", text: "…" };
    state.chat.push(thinking);
    renderChat();
    var out;
    try {
      out = await WheneverChat.respond(text);
    } catch (e) {
      out = { reply: "Something hiccuped. Local engine it is.", quiz: WheneverEngine.generateFromAsk(text) };
    }
    state.chat = state.chat.filter(function (m) { return m !== thinking; });
    state.chat.push({ role: "bot", text: out.reply });
    renderChat();
    if (out.quiz) {
      state.lastTheme = out.quiz.theme || state.lastTheme;
      state.lastAsk = out.quiz.ask || out.quiz.topic || text;
      setTimeout(function () { startQuiz(out.quiz); }, 420);
    }
  }

  function startQuiz(quiz) {
    if (!quiz || !quiz.questions || !quiz.questions.length) return;
    state.quiz = quiz;
    state.answers = [];
    state.qIndex = 0;
    state.result = null;
    if (quiz.theme) state.lastTheme = quiz.theme;
    if (quiz.ask || quiz.topic) state.lastAsk = quiz.ask || quiz.topic;
    renderQuiz();
    show("quiz");
  }

  function renderQuiz() {
    var quiz = state.quiz;
    var i = state.qIndex;
    var q = quiz.questions[i];
    $("quiz-kicker").textContent = quiz.title;
    $("quiz-question").textContent = q.text;
    $("quiz-count").textContent = (i + 1) + " / " + quiz.questions.length;
    var dots = $("quiz-dots");
    dots.innerHTML = "";
    quiz.questions.forEach(function (_, di) {
      var d = document.createElement("span");
      d.className = "dot" + (di === i ? " on" : "") + (di < i ? " done" : "");
      dots.appendChild(d);
    });
    var box = $("quiz-choices");
    box.innerHTML = "";
    var washes = ["#c45c26", "#6b7f6a", "#8a6a4a", "#2a2420"];
    q.choices.forEach(function (c, ci) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "choice";
      b.style.setProperty("--chip", washes[ci % washes.length]);
      var mark = document.createElement("div");
      mark.className = "mark";
      mark.textContent = c.emoji || "·";
      var span = document.createElement("span");
      span.textContent = c.text;
      b.appendChild(mark);
      b.appendChild(span);
      b.addEventListener("click", function () { pickChoice(ci); });
      box.appendChild(b);
    });
  }

  function pickChoice(ci) {
    state.answers[state.qIndex] = ci;
    if (state.qIndex >= state.quiz.questions.length - 1) {
      finishQuiz();
    } else {
      state.qIndex += 1;
      renderQuiz();
    }
  }

  function quizBack() {
    if (state.qIndex > 0) {
      state.qIndex -= 1;
      renderQuiz();
      return;
    }
    show(state.chat.length ? "chat" : "home");
  }

  function finishQuiz() {
    var scored = WheneverEngine.score(state.answers, state.quiz);
    state.result = scored;
    var hist = loadHistory();
    hist.unshift({
      ts: Date.now(),
      quizId: state.quiz.id,
      quizTitle: state.quiz.title,
      winner: scored.winner,
      name: scored.name,
      runner: scored.runnerName,
      image: scored.image,
      wash: scored.wash,
      paragraphs: scored.paragraphs,
      tells: scored.tells,
      short: scored.short
    });
    saveHistory(hist);
    renderResult(scored);
    show("result");
  }

  function renderResult(scored) {
    var bleed = $("result-bleed");
    bleed.style.setProperty("--wash", scored.wash);
    bleed.setAttribute("data-word", scored.name);
    bleed.classList.remove("img-missing");
    var img = $("result-img");
    if (!img) {
      img = document.createElement("img");
      img.id = "result-img";
      img.alt = "";
      bleed.insertBefore(img, bleed.firstChild);
    }
    img.onerror = function () {
      bleed.classList.add("img-missing");
      if (img.parentElement) img.remove();
    };
    img.src = scored.image;
    $("result-kicker").textContent = state.quiz ? state.quiz.title : "whenever.";
    $("result-title").textContent = scored.name;
    $("result-sub").textContent = scored.short + (scored.runnerName ? "  ·  runner-up " + scored.runnerName : "");
    var copy = $("result-copy");
    copy.innerHTML = "";
    scored.paragraphs.forEach(function (p) {
      var el = document.createElement("p");
      el.textContent = p;
      copy.appendChild(el);
    });
    var ul = $("result-tells");
    ul.innerHTML = "";
    scored.tells.forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
  }

  function renderHistory() {
    var list = $("history-list");
    var hist = loadHistory();
    list.innerHTML = "";
    if (!hist.length) {
      var p = document.createElement("p");
      p.className = "empty";
      p.textContent = "Nothing yet. Take one. I'll keep it here.";
      list.appendChild(p);
      return;
    }
    hist.forEach(function (h) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hist";
      var art = document.createElement("div");
      art.className = "hist-art";
      art.style.setProperty("--wash", h.wash || "#c45c26");
      var im = document.createElement("img");
      im.alt = "";
      im.src = h.image;
      im.onerror = function () { im.remove(); };
      art.appendChild(im);
      var meta = document.createElement("div");
      var when = new Date(h.ts);
      var label = when.toLocaleDateString(undefined, { month: "short", day: "numeric" });
      meta.innerHTML = "<strong></strong><em></em>";
      meta.querySelector("strong").textContent = h.name;
      meta.querySelector("em").textContent = h.quizTitle + "  ·  " + label;
      b.appendChild(art);
      b.appendChild(meta);
      b.addEventListener("click", function () {
        state.quiz = { title: h.quizTitle, id: h.quizId, questions: [] };
        state.result = {
          winner: h.winner,
          name: h.name,
          short: h.short || "",
          wash: h.wash,
          image: h.image,
          paragraphs: h.paragraphs || [],
          tells: h.tells || [],
          runnerName: h.runner || ""
        };
        renderResult(state.result);
        show("result");
      });
      list.appendChild(b);
    });
  }

  function shareResult() {
    var r = state.result;
    if (!r) return;
    var name = getSettings().name;
    var lines = [
      "whenever.",
      r.name,
      r.short,
      "",
      (state.quiz && state.quiz.title) ? "from “" + state.quiz.title + "”" : "",
      "",
      (r.paragraphs || []).join("\n\n"),
      "",
      (r.tells || []).map(function (t) { return "— " + t; }).join("\n")
    ].filter(Boolean);
    if (name) lines.splice(1, 0, "for " + name);
    var text = lines.join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast("copied."); }).catch(fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast("copied."); } catch (e) { toast("copy failed."); }
      ta.remove();
    }
  }

  function openSettings() {
    var s = getSettings();
    $("set-name").value = s.name;
    $("set-key").value = s.key;
    $("set-provider").value = s.provider;
    $("set-model").value = s.model;
    $("settings-modal").hidden = false;
    $("settings-modal").classList.remove("hidden");
    $("set-name").focus();
  }

  function closeSettings() {
    $("settings-modal").hidden = true;
    $("settings-modal").classList.add("hidden");
  }

  function goHome() { show("home"); }
  function goChat() { ensureGreeting(); show("chat"); renderChat(); }
  function goHistory() { renderHistory(); show("history"); }

  function lastTheme() { return state.lastTheme; }
  function lastAsk() { return state.lastAsk; }

  function takeAnother() {
    var ask = state.lastAsk || (state.quiz && (state.quiz.ask || state.quiz.topic)) || "";
    if (ask) {
      startQuiz(WheneverEngine.generateFromAsk(ask));
      return;
    }
    if (state.lastTheme) {
      startQuiz(WheneverEngine.generateFromAsk(state.lastTheme));
      return;
    }
    goHome();
  }

  function init() {
    renderChips($("home-chips"), WheneverChat.CHIPS, function (text) {
      ensureGreeting();
      show("chat");
      sendChat(text);
    });
    renderCovers();

    $("home-composer").addEventListener("submit", function (e) {
      e.preventDefault();
      var v = $("home-input").value.trim();
      if (!v) return;
      $("home-input").value = "";
      ensureGreeting();
      show("chat");
      sendChat(v);
    });
    $("chat-composer").addEventListener("submit", function (e) {
      e.preventDefault();
      var v = $("chat-input").value.trim();
      if (!v) return;
      $("chat-input").value = "";
      sendChat(v);
    });

    $("btn-home").addEventListener("click", goHome);
    $("btn-history").addEventListener("click", goHistory);
    $("btn-settings").addEventListener("click", openSettings);
    $("settings-close").addEventListener("click", closeSettings);
    $("settings-modal").addEventListener("click", function (e) {
      if (e.target === $("settings-modal")) closeSettings();
    });
    $("settings-form").addEventListener("submit", function (e) {
      e.preventDefault();
      saveSettings({
        name: $("set-name").value.trim(),
        key: $("set-key").value.trim(),
        provider: $("set-provider").value,
        model: $("set-model").value.trim()
      });
      closeSettings();
      toast("saved.");
    });
    $("btn-clear-key").addEventListener("click", function () {
      $("set-key").value = "";
      var s = getSettings();
      s.key = "";
      s.name = $("set-name").value.trim();
      s.provider = $("set-provider").value;
      s.model = $("set-model").value.trim();
      saveSettings(s);
      toast("key forgotten.");
    });

    $("quiz-back").addEventListener("click", quizBack);
    $("btn-another").addEventListener("click", takeAnother);
    $("btn-talk").addEventListener("click", function () {
      ensureGreeting();
      state.chat.push({
        role: "bot",
        text: state.result ? "So that's " + state.result.name + ". Another, or do you want to argue with me?" : WheneverChat.STARTER,
        chips: WheneverChat.CHIPS
      });
      show("chat");
      renderChat();
    });
    $("btn-share").addEventListener("click", shareResult);

    document.addEventListener("keydown", function (e) {
      if (state.view !== "quiz") return;
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= 4) {
        var q = state.quiz && state.quiz.questions[state.qIndex];
        if (q && q.choices[n - 1]) pickChoice(n - 1);
      }
    });

    window.addEventListener("scroll", function () {
      document.querySelector(".top").classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });

    window.WheneverApp = {
      getSettings: getSettings,
      lastTheme: lastTheme,
      lastAsk: lastAsk,
      startQuiz: startQuiz,
      show: show
    };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})(window);
