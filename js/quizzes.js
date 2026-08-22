/* whenever. five seeded quizzes */
(function (global) {
  "use strict";

  function Q(text, choices) {
    return { text: text, choices: choices };
  }
  function C(text, emoji, tags) {
    return { text: text, emoji: emoji, tags: tags };
  }

  var SEEDED = [
    {
      id: "trouble",
      title: "What kind of trouble are you",
      subtitle: "not the police kind. the Friday kind.",
      cover: "img/cover-trouble.png",
      wash: "#c45c26",
      word: "trouble",
      theme: "chaos",
      questions: [
        Q("It's Saturday. No plans. The day is a blank page.", [
          C("You write a heading and three bullet points. Fun needs a spine.", "✎", ["architect"]),
          C("You text: I'm bored and dangerous. See who bites.", "✦", ["anarchist"]),
          C("You wait to see who needs you first.", "○", ["satellite"]),
          C("You leave the house without a destination, on purpose.", "◇", ["window"])
        ]),
        Q("Someone you love is being polite about something that's actually wrong.", [
          C("You name it. Kindly. Before the rot sets in.", "✂", ["knife"]),
          C("You change the lighting, the music, the seating. Mood first.", "🌿", ["greenhouse"]),
          C("You let it sit. Then you change the ending later.", "↝", ["twist"]),
          C("You fix the thing they didn't ask you to fix.", "⚙", ["engine"])
        ]),
        Q("The group wants 'whatever.' You have ninety seconds.", [
          C("You pick the place with a back room and a last train that works.", "✎", ["architect", "engine"]),
          C("You pick the idea that will get at least one person in trouble.", "✦", ["anarchist"]),
          C("You pick for the quietest person and don't announce why.", "○", ["satellite"]),
          C("You refuse 'whatever.' You make them want something.", "✂", ["knife"])
        ]),
        Q("A small rule is in the way of a better night.", [
          C("You break it softly and clean up after.", "✦", ["anarchist", "engine"]),
          C("You rewrite the rule so it looks like it was always yours.", "↝", ["twist"]),
          C("You keep it. Trouble is cheaper when the floor holds.", "✎", ["architect"]),
          C("You ask who the rule is protecting. Then you decide.", "✂", ["knife"])
        ]),
        Q("You get caught. Not criminally. Socially.", [
          C("You own it in one sentence. No monologue.", "✂", ["knife"]),
          C("You turn it into a better story than the crime.", "↝", ["twist"]),
          C("You apologize to the one person who actually got nicked.", "○", ["satellite", "greenhouse"]),
          C("You laugh, then you fix the mess before anyone else has to.", "⚙", ["engine"])
        ]),
        Q("The night offers you one extra hour you didn't earn.", [
          C("You spend it on the person who stayed.", "○", ["satellite"]),
          C("You spend it doing the unwise thing you edited out at 9.", "✦", ["anarchist"]),
          C("You spend it setting tomorrow so it doesn't punish you.", "⚙", ["engine", "architect"]),
          C("You spend it doing nothing, with the window open.", "◇", ["window"])
        ])
      ]
    },
    {
      id: "weather",
      title: "Your secret weather",
      subtitle: "the climate you take into rooms",
      cover: "img/cover-weather.png",
      wash: "#6b7f6a",
      word: "weather",
      theme: "aesthetic",
      questions: [
        Q("First warm day. The window is stuck halfway.", [
          C("You fetch the tool. Weather should be adjustable.", "⚙", ["engine"]),
          C("You leave it. Half-air is a mood.", "◇", ["window"]),
          C("You shove it with your hip and a swear.", "✦", ["anarchist"]),
          C("You move the chair into the stripe of sun and call that solved.", "🌿", ["greenhouse"])
        ]),
        Q("A storm starts during a walk you wanted.", [
          C("You stay out. Rain is information.", "✦", ["anarchist"]),
          C("You duck into somewhere and make the storm the date.", "↝", ["twist"]),
          C("You get everyone under an awning first.", "○", ["satellite", "engine"]),
          C("You watch it from a doorway until it finishes its sentence.", "◇", ["window"])
        ]),
        Q("Someone asks what your place 'feels like.'", [
          C("A workshop that learned manners.", "✎", ["architect"]),
          C("A greenhouse that also throws parties.", "🌿", ["greenhouse"]),
          C("A station. People pass through. Some stay in orbit.", "○", ["satellite"]),
          C("An open window with a good lamp.", "◇", ["window"])
        ]),
        Q("You put on a record for a room that isn't yours.", [
          C("Something with a spine. The night needs architecture.", "✎", ["architect"]),
          C("The song that will slightly scandalize the host.", "✦", ["anarchist"]),
          C("Whatever will make the shy person unclench.", "🌿", ["greenhouse"]),
          C("You ask, then you pick the honest answer, not the cool one.", "✂", ["knife"])
        ]),
        Q("The flowers on the table are dying on purpose.", [
          C("You cut the stems. One more week.", "🌿", ["greenhouse"]),
          C("You throw them out. Sentiment is not a vase.", "✂", ["knife"]),
          C("You leave them. Decay has a color you like.", "✦", ["anarchist", "window"]),
          C("You replace them before the house notices it's sad.", "⚙", ["engine"])
        ]),
        Q("Your private forecast for tomorrow, if you're honest.", [
          C("Clear, with a list taped to the fridge.", "✎", ["architect"]),
          C("Unsettled. You prefer it that way.", "✦", ["anarchist"]),
          C("Low clouds, but you'll show up anyway.", "○", ["satellite"]),
          C("A front coming through. You'll say the thing.", "✂", ["knife"])
        ])
      ]
    },
    {
      id: "love",
      title: "How you actually love",
      subtitle: "not how you say you do",
      cover: "img/cover-love.png",
      wash: "#a64b3a",
      word: "love",
      theme: "love",
      questions: [
        Q("They had a bad day. You have one evening.", [
          C("You build a small night with edges: food, bath, no plot.", "✎", ["architect"]),
          C("You take them somewhere the day can't follow.", "✦", ["anarchist"]),
          C("You sit close and let them be unimpressive.", "○", ["satellite"]),
          C("You ask the real question once, then you shut up.", "✂", ["knife"])
        ]),
        Q("You want to say it. The words are right there.", [
          C("You say it. Warm, unornamented.", "✂", ["knife"]),
          C("You arrange a night that says it for you.", "✎", ["architect", "greenhouse"]),
          C("You wait for the turn. Timing is the romance.", "↝", ["twist"]),
          C("You do the errand that proves it, and never make a speech.", "⚙", ["engine"])
        ]),
        Q("They leave a sweater. It still smells like them.", [
          C("You wear it once, then fold it like evidence.", "○", ["satellite"]),
          C("You leave it on the chair. The room can keep a guest.", "🌿", ["greenhouse"]),
          C("You text a photo. No caption. Let them squirm kindly.", "↝", ["twist"]),
          C("You put it in a bag so you don't build a shrine.", "◇", ["window"])
        ]),
        Q("A fight that is actually about the last three months.", [
          C("You put the real subject on the table. Tonight.", "✂", ["knife"]),
          C("You cool the room first. Nobody thinks well on fire.", "🌿", ["greenhouse"]),
          C("You already started fixing the pattern last Tuesday.", "⚙", ["engine"]),
          C("You change the ending by telling a truer story of how you got here.", "↝", ["twist"])
        ]),
        Q("They ask what you want from them. Really.", [
          C("Show up. Orbit is not cling. It's attendance.", "○", ["satellite"]),
          C("Tell me the truth while it's still warm.", "✂", ["knife"]),
          C("Leave me a little air. I come back better.", "◇", ["window"]),
          C("Let me build us something that can hold a winter.", "✎", ["architect"])
        ]),
        Q("The last train is in nine minutes. You're mid-sentence.", [
          C("You walk them to it. The sentence can wait.", "⚙", ["engine", "satellite"]),
          C("You miss it. The night just got honest.", "✦", ["anarchist"]),
          C("You finish the true part, then you run.", "✂", ["knife"]),
          C("You let them go and watch the platform like a film still.", "◇", ["window"])
        ])
      ]
    },
    {
      id: "twoam",
      title: "The 2am version of you",
      subtitle: "when the performing stops",
      cover: "img/cover-2am.png",
      wash: "#2a2420",
      word: "2am",
      theme: "night",
      questions: [
        Q("2:11. The house is quiet. Your phone is face-down.", [
          C("You sketch tomorrow so 9am doesn't get to ambush you.", "✎", ["architect"]),
          C("You open a tab you shouldn't and follow it like a street.", "✦", ["anarchist"]),
          C("You reread an old thread. Orbiting from the kitchen.", "○", ["satellite"]),
          C("You stand at the window and let the dark do the talking.", "◇", ["window"])
        ]),
        Q("Someone is still awake in the other room.", [
          C("You go in with two glasses of water. No speech.", "🌿", ["greenhouse"]),
          C("You text from the couch: still up? as if you don't know.", "○", ["satellite"]),
          C("You stay put. If they want you, the door is a choice.", "◇", ["window"]),
          C("You go in and say the thing the daytime kept editing.", "✂", ["knife"])
        ]),
        Q("A song from a year you'd rather not revisit.", [
          C("You let it finish. Skipping would be a little cowardly.", "✂", ["knife"]),
          C("You skip. The present is not a museum.", "◇", ["window"]),
          C("You send it to the one person who was there.", "○", ["satellite"]),
          C("You listen for the plot twist you missed the first time.", "↝", ["twist"])
        ]),
        Q("The leftovers look better than dinner did.", [
          C("You plate them like a second act.", "✎", ["architect"]),
          C("Fridge light, fork, standing up. Citizenship of night.", "✦", ["anarchist"]),
          C("You save the good bit for the person still sleeping.", "🌿", ["greenhouse"]),
          C("You eat, then wash the dish so morning is kind.", "⚙", ["engine"])
        ]),
        Q("An old voicemail you never deleted.", [
          C("You listen once. Then you decide if it still gets to stay.", "✂", ["knife"]),
          C("You keep it. Archives are how you love.", "○", ["satellite"]),
          C("You listen for the you who hit save.", "↝", ["twist"]),
          C("You let it play, then crack a window.", "◇", ["window"])
        ]),
        Q("Sleep is available. You don't take it yet. Why.", [
          C("One more system to set down so tomorrow runs.", "⚙", ["engine", "architect"]),
          C("The night finally got interesting.", "✦", ["anarchist"]),
          C("Someone might still need you.", "○", ["satellite"]),
          C("This is the only hour that isn't rented out.", "◇", ["window"])
        ])
      ]
    },
    {
      id: "side",
      title: "Which side character are you",
      subtitle: "not the poster. the one who steals the scene.",
      cover: "img/cover-side.png",
      wash: "#8a6a4a",
      word: "side",
      theme: "friendship",
      questions: [
        Q("In the movie of your friends' lives, you enter on a Saturday.", [
          C("You arrive with a plan and a spare charger.", "✎", ["architect", "engine"]),
          C("You arrive late, with a story, and the plot improves.", "✦", ["anarchist", "twist"]),
          C("You're already there. You never really left the kitchen.", "○", ["satellite"]),
          C("You open a window and the scene can breathe.", "◇", ["window"])
        ]),
        Q("The lead is about to make a beautiful mistake.", [
          C("You say the true thing. Then you help them do it anyway.", "✂", ["knife"]),
          C("You quietly pack the bag they'll need after.", "⚙", ["engine"]),
          C("You change one detail so the mistake becomes the ending they wanted.", "↝", ["twist"]),
          C("You sit with them in it. No moral.", "🌿", ["greenhouse"])
        ]),
        Q("Someone has to hold the coats, the keys, the night.", [
          C("You. Obviously. You like the hum of being useful.", "⚙", ["engine"]),
          C("You, but you make it look like hospitality, not labor.", "🌿", ["greenhouse"]),
          C("You refuse. You hand the keys to the person who always ducks.", "✂", ["knife"]),
          C("You hold them, then vanish before the credits try to thank you.", "◇", ["window"])
        ]),
        Q("A rumor reaches you first.", [
          C("You kill it or confirm it. No half-life.", "✂", ["knife"]),
          C("You hold it until you know who it would bruise.", "🌿", ["greenhouse"]),
          C("You already saw this plot. You've been watching the blocking.", "↝", ["twist"]),
          C("You don't pass it. Hallways are not your job.", "⚙", ["engine"])
        ]),
        Q("They cast you in one line in the group chat bio.", [
          C("the one who planned it", "✎", ["architect"]),
          C("the one who made it worse in a good way", "✦", ["anarchist"]),
          C("the one who came back for you", "○", ["satellite"]),
          C("the one who said it", "✂", ["knife"])
        ]),
        Q("Credits. What are you doing.", [
          C("Resetting the room so tomorrow doesn't inherit the night.", "⚙", ["engine"]),
          C("Walking the last person to their door.", "○", ["satellite"]),
          C("Already gone. Leave them wanting the cameo.", "↝", ["twist", "window"]),
          C("Telling the lead what the scene was actually about.", "✂", ["knife"])
        ])
      ]
    }
  ];

  function hydrate(quiz) {
    var E = global.WheneverEngine;
    var q = {
      id: quiz.id,
      title: quiz.title,
      subtitle: quiz.subtitle,
      cover: quiz.cover,
      wash: quiz.wash,
      word: quiz.word,
      theme: quiz.theme,
      generated: false,
      questions: quiz.questions.map(function (item, qi) {
        return {
          id: quiz.id + "-q" + qi,
          text: item.text,
          choices: item.choices.map(function (c, ci) {
            return { id: quiz.id + "-q" + qi + "-" + ci, text: c.text, emoji: c.emoji, tags: c.tags.slice() };
          })
        };
      }),
      results: E ? E.RESULT : {}
    };
    return q;
  }

  function all() {
    return SEEDED.map(hydrate);
  }

  function byId(id) {
    for (var i = 0; i < SEEDED.length; i++) {
      if (SEEDED[i].id === id) return hydrate(SEEDED[i]);
    }
    return null;
  }

  global.WheneverQuizzes = {
    SEEDED: SEEDED,
    all: all,
    byId: byId
  };
})(window);
