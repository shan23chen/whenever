/* whenever. conversation + optional remote quiz */
(function (global) {
  "use strict";

  var STARTER = "Hey. Tell me what you want to know about yourself, or pick a quiz.";
  var CHIPS = [
    { label: "Surprise me", send: "surprise me" },
    { label: "How I love", send: "how I love" },
    { label: "A chaotic one", send: "give me a chaotic one" },
    { label: "2am brain", send: "2am brain" },
    { label: "Make a new one", focus: true }
  ];

  function settings() {
    return global.WheneverApp ? global.WheneverApp.getSettings() : { name: "", key: "", provider: "xai", model: "" };
  }

  function lastTheme() {
    return global.WheneverApp ? global.WheneverApp.lastTheme() : "surprise";
  }

  function lastAsk() {
    return global.WheneverApp && global.WheneverApp.lastAsk ? global.WheneverApp.lastAsk() : "";
  }

  function hasKey() {
    var s = settings();
    return !!(s && s.key && s.key.trim());
  }

  function endpoint(s) {
    if (s.provider === "openai") return "https://api.openai.com/v1/chat/completions";
    return "https://api.x.ai/v1/chat/completions";
  }

  function modelName(s) {
    if (s.model && s.model.trim()) return s.model.trim();
    return s.provider === "openai" ? "gpt-4o-mini" : "grok-2-latest";
  }

  var SYSTEM = [
    "You are the voice of Whenever, a small personality-quiz magazine.",
    "Warm, sharp, slightly teasing friend. Short sentences. 2–4 sentences max.",
    "Never say you are an AI, a model, or a language model.",
    "No Certainly, no help-desk tone, no BuzzFeed cringe, no therapy-speak.",
    "If they want a quiz, return JSON only:",
    '{"reply":"2-4 short sentences","quiz":{"title":"","subtitle":"","theme":"love|chaos|night|aesthetic|work|friendship|surprise|food|home|general","questions":[{"text":"cinematic specific question","choices":[{"text":"","emoji":"","tags":["architect"]}]}]}}',
    "Exactly 6 questions, 4 choices each. Tags must be from: architect, anarchist, satellite, knife, greenhouse, twist, engine, window.",
    "Questions feel like: It's Saturday. No plans. Not: Are you an introvert.",
    "If they are only greeting, quiz may be null."
  ].join(" ");

  function parseJson(raw) {
    if (!raw) return null;
    var text = String(raw).trim();
    var fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (fence) text = fence[1].trim();
    var start = text.indexOf("{");
    var end = text.lastIndexOf("}");
    if (start === -1 || end === -1) return null;
    try { return JSON.parse(text.slice(start, end + 1)); } catch (e) { return null; }
  }

  function normalizeRemoteQuiz(data, fallbackTheme) {
    if (!data || !data.questions || data.questions.length < 4) return null;
    var E = global.WheneverEngine;
    var ids = Object.keys(E.ARCHETYPES);
    var qs = data.questions.slice(0, 6).map(function (q, qi) {
      var choices = (q.choices || []).slice(0, 4).map(function (c, ci) {
        var tags = (c.tags || []).filter(function (t) { return ids.indexOf(t) !== -1; });
        if (!tags.length) tags = [ids[(qi + ci) % ids.length]];
        return { id: "api-" + qi + "-" + ci, text: c.text || c.t || "this one", emoji: c.emoji || c.e || "·", tags: tags };
      });
      while (choices.length < 4) {
        choices.push({ id: "api-" + qi + "-x" + choices.length, text: "the quiet option", emoji: "◇", tags: ["window"] });
      }
      return { id: "api-q" + qi, text: q.text, choices: choices };
    });
    while (qs.length < 6) {
      var extra = E.generateQuiz(fallbackTheme || "surprise", "pad-" + qs.length);
      qs.push(extra.questions[qs.length % extra.questions.length]);
    }
    return {
      id: "api-" + Date.now().toString(36),
      title: data.title || "A quiz just for this",
      subtitle: data.subtitle || "written in the room",
      cover: null,
      theme: data.theme || fallbackTheme || "surprise",
      generated: true,
      questions: qs,
      results: E.RESULT
    };
  }

  async function viaApi(userText, intent) {
    var s = settings();
    var body = {
      model: modelName(s),
      temperature: 0.8,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: userText }
      ]
    };
    var res = await fetch(endpoint(s), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + s.key.trim()
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error("api " + res.status);
    var json = await res.json();
    var content = json.choices && json.choices[0] && json.choices[0].message && json.choices[0].message.content;
    var parsed = parseJson(content);
    if (!parsed) throw new Error("bad json");
    var quiz = parsed.quiz ? normalizeRemoteQuiz(parsed.quiz, intent.theme) : null;
    return { reply: String(parsed.reply || "").trim() || global.WheneverEngine.localReply(intent, s.name), quiz: quiz };
  }

  function viaLocal(userText, intent) {
    var E = global.WheneverEngine;
    var s = settings();
    var ask = userText;
    if (intent.kind === "again") {
      ask = lastAsk() || lastTheme() || userText;
    }
    var reply = E.localReply(intent, s.name);
    var quiz = null;
    if (intent.kind !== "greet" && intent.kind !== "thanks") {
      quiz = E.generateFromAsk(ask);
      var topic = (quiz && quiz.topic) || intent.topic;
      if (topic) {
        var named = topic.charAt(0).toUpperCase() + topic.slice(1);
        reply = named + ", then. Don't tidy your answers.";
      }
    }
    return { reply: reply, quiz: quiz };
  }

  async function respond(userText) {
    var E = global.WheneverEngine;
    var intent = E.parseIntent(userText);
    if (hasKey() && intent.kind !== "thanks") {
      try {
        return await viaApi(userText, intent);
      } catch (err) {
        var local = viaLocal(userText, intent);
        local.reply = "The fancy line is busy. Local it is. " + local.reply;
        return local;
      }
    }
    return viaLocal(userText, intent);
  }

  global.WheneverChat = {
    STARTER: STARTER,
    CHIPS: CHIPS,
    respond: respond,
    hasKey: hasKey
  };
})(window);
