/* whenever. nine seeded quizzes */
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
      resultOrder: ["felony", "floorplan", "accomplice", "alibi"],
      results: {
        felony: {
          name: "The Soft Felony",
          short: "trouble with manners",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You don't smash the night. You open a door that wasn't on the itinerary and walk through it first. The mess has charm. That's why people follow you into it.",
          p2: "Your trouble is a weather system, not a crime. You say \"what if we just\" and mean it. The Friday kind. The kind that becomes the story.",
          tells: [
            "You text \"I'm bored and dangerous\" and wait to see who is honest.",
            "You break a small rule and clean up after, like a gentleman thief.",
            "People call you unpredictable when they mean they felt something."
          ]
        },
        floorplan: {
          name: "The Floor Plan",
          short: "trouble with a spine",
          wash: "#2c3344",
          image: "img/result-architect.png",
          p1: "You get everyone in trouble and still get them home. The unwise thing has a last train and a glass of water waiting.",
          p2: "Someone thinks you're controlling. You're trying not to drop the evening. Fun happens because you already decided where the exit is.",
          tells: [
            "You pick the place with a back room and a working last train.",
            "You make a list, then ignore half of it on purpose.",
            "Trouble is cheaper when the floor holds."
          ]
        },
        accomplice: {
          name: "The Loyal Accomplice",
          short: "you get in trouble for other people",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "Your trouble is rarely yours. You go because they went. You stay because they stayed. The night orbits a person, not a plan.",
          p2: "You will take the social hit for someone who can't. That's not weakness. That's how you love: by being the second name on the story.",
          tells: [
            "You wait to see who needs you first.",
            "You apologize to the one person who actually got nicked.",
            "You spend the extra hour on whoever stayed."
          ]
        },
        alibi: {
          name: "The Beautiful Alibi",
          short: "you rewrite the ending",
          wash: "#8a3a36",
          image: "img/result-twist.png",
          p1: "You don't start the fire. You decide what it lights. If the night is cheap, you change it before dessert.",
          p2: "Getting caught is just a chance to tell it better. You wait one extra beat, then the story belongs to you.",
          tells: [
            "You let a wrong thing sit, then change the ending later.",
            "You turn getting caught into a better story than the crime.",
            "You rewrite the rule so it looks like it was always yours."
          ]
        }
      },
      questions: [
        Q("It's Saturday. No plans. The day is a blank page.", [
          C("You write a heading and three bullet points. Fun needs a spine.", "✎", ["floorplan"]),
          C("You text: I'm bored and dangerous. See who bites.", "✦", ["felony"]),
          C("You wait to see who needs you first.", "○", ["accomplice"]),
          C("You leave the house without a destination, on purpose.", "◇", ["alibi"])
        ]),
        Q("Someone you love is being polite about something that's actually wrong.", [
          C("You name it. Kindly. Before the rot sets in.", "✂", ["alibi"]),
          C("You change the lighting, the music, the seating. Mood first.", "🌿", ["accomplice"]),
          C("You let it sit. Then you change the ending later.", "↝", ["alibi"]),
          C("You fix the thing they didn't ask you to fix.", "⚙", ["floorplan"])
        ]),
        Q("The group wants 'whatever.' You have ninety seconds.", [
          C("You pick the place with a back room and a last train that works.", "✎", ["floorplan"]),
          C("You pick the idea that will get at least one person in trouble.", "✦", ["felony"]),
          C("You pick for the quietest person and don't announce why.", "○", ["accomplice"]),
          C("You refuse 'whatever.' You make them want something.", "✂", ["alibi"])
        ]),
        Q("A small rule is in the way of a better night.", [
          C("You break it softly and clean up after.", "✦", ["felony"]),
          C("You rewrite the rule so it looks like it was always yours.", "↝", ["alibi"]),
          C("You keep it. Trouble is cheaper when the floor holds.", "✎", ["floorplan"]),
          C("You ask who the rule is protecting. Then you decide.", "✂", ["alibi"])
        ]),
        Q("You get caught. Not criminally. Socially.", [
          C("You own it in one sentence. No monologue.", "✂", ["alibi"]),
          C("You turn it into a better story than the crime.", "↝", ["alibi"]),
          C("You apologize to the one person who actually got nicked.", "○", ["accomplice"]),
          C("You laugh, then you fix the mess before anyone else has to.", "⚙", ["floorplan"])
        ]),
        Q("The night offers you one extra hour you didn't earn.", [
          C("You spend it on the person who stayed.", "○", ["accomplice"]),
          C("You spend it doing the unwise thing you edited out at 9.", "✦", ["felony"]),
          C("You spend it setting tomorrow so it doesn't punish you.", "⚙", ["floorplan"]),
          C("You spend it doing nothing, with the window open.", "◇", ["alibi"])
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
      resultOrder: ["front", "squall", "climate", "clearing"],
      results: {
        front: {
          name: "The Warm Front",
          short: "you change the room's weather",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You are the air that arrives before the mood does. People become more themselves after an hour in your climate.",
          p2: "You notice the plant and the person with the same attention. If something is alive, you refuse to let it go thirsty.",
          tells: [
            "You move the chair into the stripe of sun and call that solved.",
            "You feed people without making a speech about it.",
            "Your places keep souvenirs of everyone who has been kind there."
          ]
        },
        squall: {
          name: "The Sudden Squall",
          short: "weather that will not sit still",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You stay out in the rain like it's information. Forecasts bore you. You are the weather other people check the sky for.",
          p2: "A stuck window is a suggestion. You shove it with your hip. Half-air is a mood, but full air is better.",
          tells: [
            "You stay out. Rain is information.",
            "You shove the stuck sash and swear at it kindly.",
            "You leave dying flowers because decay has a color you like."
          ]
        },
        climate: {
          name: "The House Climate",
          short: "you keep the temperature humane",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You adjust. Tool for the window, awning for the storm, extra chair for the person who went quiet.",
          p2: "You are not dramatic weather. You are the reason the room can have weather and still be a room.",
          tells: [
            "You fetch the tool. Weather should be adjustable.",
            "You get everyone under an awning first.",
            "You replace the flowers before the house notices it's sad."
          ]
        },
        clearing: {
          name: "The Honest Clearing",
          short: "you name the sky",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You will not pretend it's sunny. If the room is a storm, you say storm. Then people can dress for it.",
          p2: "Taste, for you, is just climate you refuse to fake. The record you put on is the true one, not the cool one.",
          tells: [
            "You ask who the weather is protecting, then you decide.",
            "You throw the flowers out. Sentiment is not a vase.",
            "You pick the honest song, not the impressive one."
          ]
        }
      },
      questions: [
        Q("First warm day. The window is stuck halfway.", [
          C("You fetch the tool. Weather should be adjustable.", "⚙", ["climate"]),
          C("You leave it. Half-air is a mood.", "◇", ["front"]),
          C("You shove it with your hip and a swear.", "✦", ["squall"]),
          C("You move the chair into the stripe of sun and call that solved.", "🌿", ["front"])
        ]),
        Q("A storm starts during a walk you wanted.", [
          C("You stay out. Rain is information.", "✦", ["squall"]),
          C("You duck into somewhere and make the storm the date.", "↝", ["squall"]),
          C("You get everyone under an awning first.", "○", ["climate"]),
          C("You watch it from a doorway until it finishes its sentence.", "◇", ["front"])
        ]),
        Q("Someone asks what your place 'feels like.'", [
          C("A workshop that learned manners.", "✎", ["climate"]),
          C("A greenhouse that also throws parties.", "🌿", ["front"]),
          C("A station. People pass through. Some stay in orbit.", "○", ["climate"]),
          C("An open window with a good lamp.", "◇", ["front"])
        ]),
        Q("You put on a record for a room that isn't yours.", [
          C("Something with a spine. The night needs architecture.", "✎", ["climate"]),
          C("The song that will slightly scandalize the host.", "✦", ["squall"]),
          C("Whatever will make the shy person unclench.", "🌿", ["front"]),
          C("You ask, then you pick the honest answer, not the cool one.", "✂", ["clearing"])
        ]),
        Q("The flowers on the table are dying on purpose.", [
          C("You cut the stems. One more week.", "🌿", ["front"]),
          C("You throw them out. Sentiment is not a vase.", "✂", ["clearing"]),
          C("You leave them. Decay has a color you like.", "✦", ["squall"]),
          C("You replace them before the house notices it's sad.", "⚙", ["climate"])
        ]),
        Q("Your private forecast for tomorrow, if you're honest.", [
          C("Clear, with a list taped to the fridge.", "✎", ["climate"]),
          C("Unsettled. You prefer it that way.", "✦", ["squall"]),
          C("Low clouds, but you'll show up anyway.", "○", ["climate"]),
          C("A front coming through. You'll say the thing.", "✂", ["clearing"])
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
      resultOrder: ["orbit", "kitchen", "sentence", "detour"],
      results: {
        orbit: {
          name: "The Steady Orbit",
          short: "you love by staying in range",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You take orbit like a vow. Not clinging — attending. You know where they are in a room without looking.",
          p2: "You rearrange your own weather so they aren't alone in theirs. Love, for you, is a location: near.",
          tells: [
            "You text \"home?\" and wait for the real answer.",
            "You remember the drink they didn't order last time.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        kitchen: {
          name: "The Extra Plate",
          short: "you love in the practical tense",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You love by changing the temperature until someone can grow. Food, light, the chair that was missing.",
          p2: "You will not make a speech about devotion. You will make the room possible. That's the whole poem.",
          tells: [
            "You feed people the way some people write letters.",
            "You remember who went quiet and go sit next to them.",
            "Home keeps a glass out for people who aren't there yet."
          ]
        },
        sentence: {
          name: "The Unadorned Sentence",
          short: "you love by telling the truth",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You say the true thing while it's still warm. Not to win. To stop the two of you from lying to the night.",
          p2: "Kind and sharp is how you stay. You would rather lose the pretty version than keep a fake peace.",
          tells: [
            "You name the thing everyone is stepping around.",
            "Your compliments are specific enough to sting a little.",
            "You ask, then you pick the honest answer, not the cool one."
          ]
        },
        detour: {
          name: "The Good Detour",
          short: "you love like a wrong turn that was the trip",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You follow the spark. The itinerary was a suggestion. They will remember the night you refused \"whatever.\"",
          p2: "Your chaos has manners. You won't smash them. You'll just open a door and see if they come.",
          tells: [
            "You say \"what if we just\" and mean it.",
            "Your best nights start as a wrong turn.",
            "You spend the unwise hour you edited out at 9."
          ]
        }
      },
      questions: [
        Q("They had a bad day. You have one evening.", [
          C("You build a small night with edges: food, bath, no plot.", "✎", ["kitchen"]),
          C("You take them somewhere the day can't follow.", "✦", ["detour"]),
          C("You sit close and let them be unimpressive.", "○", ["orbit"]),
          C("You ask the real question once, then you shut up.", "✂", ["sentence"])
        ]),
        Q("You want to say it. The words are right there.", [
          C("You say it. Warm, unornamented.", "✂", ["sentence"]),
          C("You arrange a night that says it for you.", "✎", ["kitchen"]),
          C("You wait for the turn. Timing is the romance.", "↝", ["detour"]),
          C("You do the errand that proves it, and never make a speech.", "⚙", ["kitchen"])
        ]),
        Q("They leave a sweater. It still smells like them.", [
          C("You wear it once, then fold it like evidence.", "○", ["orbit"]),
          C("You leave it on the chair. The room can keep a guest.", "🌿", ["kitchen"]),
          C("You text a photo. No caption. Let them squirm kindly.", "↝", ["detour"]),
          C("You put it in a bag so you don't build a shrine.", "◇", ["orbit"])
        ]),
        Q("A fight that is actually about the last three months.", [
          C("You put the real subject on the table. Tonight.", "✂", ["sentence"]),
          C("You cool the room first. Nobody thinks well on fire.", "🌿", ["kitchen"]),
          C("You already started fixing the pattern last Tuesday.", "⚙", ["kitchen"]),
          C("You change the ending by telling a truer story of how you got here.", "↝", ["detour"])
        ]),
        Q("They ask what you want from them. Really.", [
          C("Show up. Orbit is not cling. It's attendance.", "○", ["orbit"]),
          C("Tell me the truth while it's still warm.", "✂", ["sentence"]),
          C("Leave me a little air. I come back better.", "◇", ["orbit"]),
          C("Let me build us something that can hold a winter.", "✎", ["kitchen"])
        ]),
        Q("The last train is in nine minutes. You're mid-sentence.", [
          C("You walk them to it. The sentence can wait.", "⚙", ["kitchen"]),
          C("You miss it. The night just got honest.", "✦", ["detour"]),
          C("You finish the true part, then you run.", "✂", ["sentence"]),
          C("You let them go and watch the platform like a film still.", "◇", ["orbit"])
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
      resultOrder: ["lamp", "static", "vigil", "confession"],
      results: {
        lamp: {
          name: "The Last Lamp",
          short: "you keep 2am running",
          wash: "#4a3a28",
          image: "img/result-engine.png",
          p1: "The house is a machine at night and you are the quiet electricity. Toast, honey, the face-down phone. You know where the extra blanket is.",
          p2: "You like the hum more than the applause. If everyone gets to morning, that was the point of the hour.",
          tells: [
            "You are already three small tasks into the dark.",
            "You find the candles before anyone jokes.",
            "You are the reason everyone gets home."
          ]
        },
        static: {
          name: "The Open Frequency",
          short: "2am is when you stop translating",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You crack the night open and don't rush to fill it. The window, the static, the nothing that is actually something.",
          p2: "Two in the morning is not productive. That's the honesty. You let the hour be empty on purpose.",
          tells: [
            "You spend it doing nothing, with the window open.",
            "You talk more softly. The dark is a room too.",
            "You leave the map. Being lost is the point."
          ]
        },
        vigil: {
          name: "The Soft Vigil",
          short: "if they're still up, so are you",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "2am is a person. You stay because they stayed. The toast is for two even if they said they weren't hungry.",
          p2: "You take orbit in the dark. Not dramatic. Just unwilling to let someone be awake alone.",
          tells: [
            "If they're still up, so are you. That's the vow.",
            "You sit nearer to the person who hates the dark.",
            "You text nothing important, which is how you say I'm here."
          ]
        },
        confession: {
          name: "The Unedited Hour",
          short: "you say the sentence you've been editing all day",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "At 2am you stop performing. The true thing comes out warm. You would rather the night hear it than sleep on a lie.",
          p2: "This is not cruelty. This is the only hour that will let you be exact.",
          tells: [
            "You say the sentence you've been editing all day.",
            "You want a name. Mystery without a person bores you.",
            "Fine is a lie. You order what you want."
          ]
        }
      },
      questions: [
        Q("2:11. The house is quiet. Your phone is face-down.", [
          C("You sketch tomorrow so 9am doesn't get to ambush you.", "✎", ["lamp"]),
          C("You open a tab you shouldn't and follow it like a street.", "✦", ["static"]),
          C("You reread an old thread. Orbiting from the kitchen.", "○", ["vigil"]),
          C("You stand at the window and let the dark do the talking.", "◇", ["static"])
        ]),
        Q("Someone is still awake in the other room.", [
          C("You go in with two glasses of water. No speech.", "🌿", ["vigil"]),
          C("You text from the couch: still up? as if you don't know.", "○", ["vigil"]),
          C("You stay put. If they want you, the door is a choice.", "◇", ["static"]),
          C("You go in and say the thing the daytime kept editing.", "✂", ["confession"])
        ]),
        Q("A song from a year you'd rather not revisit.", [
          C("You let it finish. Skipping would be a little cowardly.", "✂", ["confession"]),
          C("You skip. The present is not a museum.", "◇", ["static"]),
          C("You send it to the one person who was there.", "○", ["vigil"]),
          C("You listen for the plot twist you missed the first time.", "↝", ["confession"])
        ]),
        Q("The leftovers look better than dinner did.", [
          C("You plate them like a second act.", "✎", ["lamp"]),
          C("Fridge light, fork, standing up. Citizenship of night.", "✦", ["static"]),
          C("You save the good bit for the person still sleeping.", "🌿", ["vigil"]),
          C("You eat, then wash the dish so morning is kind.", "⚙", ["lamp"])
        ]),
        Q("An old voicemail you never deleted.", [
          C("You listen once. Then you decide if it still gets to stay.", "✂", ["confession"]),
          C("You keep it. Archives are how you love.", "○", ["vigil"]),
          C("You listen for the you who hit save.", "↝", ["confession"]),
          C("You let it play, then crack a window.", "◇", ["static"])
        ]),
        Q("Sleep is available. You don't take it yet. Why.", [
          C("One more system to set down so tomorrow runs.", "⚙", ["lamp"]),
          C("The night finally got interesting.", "✦", ["static"]),
          C("Someone might still need you.", "○", ["vigil"]),
          C("This is the only hour that isn't rented out.", "◇", ["static"])
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
      resultOrder: ["wings", "foil", "extra", "stagehand"],
      results: {
        wings: {
          name: "The One in the Wings",
          short: "you make the lead possible and disappear",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You are the open window the scene needs. People come in different and leave lighter. Nobody writes you a speech. That's fine.",
          p2: "The play works because you left air in it. You don't need the spotlight to have been the point.",
          tells: [
            "You pick for the quietest person and don't announce why.",
            "You wait at the threshold until they look up.",
            "You leave a little space they can walk around in."
          ]
        },
        foil: {
          name: "The Beautiful Foil",
          short: "you change the ending from the side",
          wash: "#8a3a36",
          image: "img/result-twist.png",
          p1: "You read the room like a novel — for the turn. If the lead is about to be cheap, you rewrite them before dessert.",
          p2: "Side character is a job title, not a personality. You save a secret like a match, not a weapon.",
          tells: [
            "You wait one extra beat before answering.",
            "You turn a small disaster into the plot.",
            "People leave your scenes different than they entered them."
          ]
        },
        extra: {
          name: "The Recurring Extra",
          short: "you keep showing up in everyone's story",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You are in the background of a dozen lives on purpose. The coat on the chair. The extra plate. People are less alone because you exist in frame.",
          p2: "You will not demand a close-up. You will be the person who appears in the doorway without being summoned.",
          tells: [
            "You wait to see who needs you first.",
            "You remember the drink they didn't order last time.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        stagehand: {
          name: "The Stagehand",
          short: "the night runs because you decided it would",
          wash: "#4a3a28",
          image: "img/result-engine.png",
          p1: "Lights, music, the extra glass. Sequence. You keep the play running and almost never get credited for the electricity.",
          p2: "That's fine. You like the hum. If the scene holds, you held it.",
          tells: [
            "You hide the worst thing and call that hospitality.",
            "You already timed the last train.",
            "You fix the mess before anyone else has to."
          ]
        }
      },
      questions: [
        Q("In the movie of your friends' lives, you enter on a Saturday.", [
          C("You arrive with a plan and a spare charger.", "✎", ["stagehand"]),
          C("You arrive late, with a story, and the plot improves.", "✦", ["foil"]),
          C("You're already there. You never really left the kitchen.", "○", ["extra"]),
          C("You open a window and the scene can breathe.", "◇", ["wings"])
        ]),
        Q("The lead is about to make a beautiful mistake.", [
          C("You say the true thing. Then you help them do it anyway.", "✂", ["foil"]),
          C("You quietly pack the bag they'll need after.", "⚙", ["stagehand"]),
          C("You change one detail so the mistake becomes the ending they wanted.", "↝", ["foil"]),
          C("You sit with them in it. No moral.", "🌿", ["extra"])
        ]),
        Q("Someone has to hold the coats, the keys, the night.", [
          C("You. Obviously. You like the hum of being useful.", "⚙", ["stagehand"]),
          C("You, but you make it look like hospitality, not labor.", "🌿", ["extra"]),
          C("You refuse. You hand the keys to the person who always ducks.", "✂", ["foil"]),
          C("You hold them, then vanish before the credits try to thank you.", "◇", ["wings"])
        ]),
        Q("A rumor reaches you first.", [
          C("You kill it or confirm it. No half-life.", "✂", ["foil"]),
          C("You hold it until you know who it would bruise.", "🌿", ["extra"]),
          C("You already saw this plot. You've been watching the blocking.", "↝", ["foil"]),
          C("You don't pass it. Hallways are not your job.", "⚙", ["stagehand"])
        ]),
        Q("They cast you in one line in the group chat bio.", [
          C("the one who planned it", "✎", ["stagehand"]),
          C("the one who made it worse in a good way", "✦", ["foil"]),
          C("the one who came back for you", "○", ["extra"]),
          C("the one who said it", "✂", ["foil"])
        ]),
        Q("Credits. What are you doing.", [
          C("Resetting the room so tomorrow doesn't inherit the night.", "⚙", ["stagehand"]),
          C("Walking the last person to their door.", "○", ["extra"]),
          C("Already gone. Leave them wanting the cameo.", "↝", ["foil"]),
          C("Telling the lead what the scene was actually about.", "✂", ["foil"])
        ])
      ]
    },
    {
      id: "horses",
      title: "What kind of horse girl are you",
      subtitle: "barn air, soft hands, a little stubborn",
      cover: "img/cover-horses.png",
      wash: "#8a6a3a",
      word: "horses",
      theme: "home",
      resultOrder: ["mane", "rein", "pasture", "gallop"],
      results: {
        mane: {
          name: "The Soft Mane",
          short: "you speak horse before you speak people",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You notice the ear flick before the person does. Barn air is your weather. Soft hands, long patience, a little stubborn in the best way.",
          p2: "You don't perform \"horse girl.\" You just show up with the brush and the quiet. The animal decides you're safe, and that is the whole compliment.",
          tells: [
            "You talk softer in a stall than in a kitchen.",
            "You remember who needs the extra cookie.",
            "You would rearrange a whole day for a ride that makes someone breathe again."
          ]
        },
        rein: {
          name: "The Steady Rein",
          short: "you hold the line so they can trust it",
          wash: "#2c3344",
          image: "img/result-architect.png",
          p1: "You give the ride a floor. Warm-up, cool-down, the gate latched. Fun happens because you already decided where the fence is.",
          p2: "Someone thinks you're controlling. You're trying not to drop a thousand pounds of feeling. Soft and exact is how you love a horse.",
          tells: [
            "You check the girth twice and still let them have the fun mile.",
            "You make a plan for the trail and leave room for a detour.",
            "People relax around you because the floor is not going to move."
          ]
        },
        pasture: {
          name: "The Open Pasture",
          short: "you leave them room to be an animal",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You crack the day open and don't rush to fill it. Turnout, grass, the long nothing that is actually everything.",
          p2: "You are not here to dominate. You are here to let something large and living be itself near you.",
          tells: [
            "You linger at the fence with nothing to prove.",
            "You pick the quiet loop when the world is too loud.",
            "You leave a little space they can walk around in."
          ]
        },
        gallop: {
          name: "The Sudden Gallop",
          short: "you follow the spark in the saddle",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You say \"what if we just\" and mean it. The map was a suggestion. The good ride starts as a wrong turn with good footing.",
          p2: "Your chaos has manners. You won't smash the horse. You'll just open a gate and see what the afternoon wants.",
          tells: [
            "You pick the idea that gets at least one heart rate honest.",
            "Your best days start as a detour.",
            "People call you unpredictable when they mean they felt the wind."
          ]
        }
      },
      questions: [
        Q("Saturday at the barn. The aisles are still half-asleep.", [
          C("You check the board, the water, the latch. Then coffee.", "✎", ["rein"]),
          C("You go straight to the stall that always softens when you arrive.", "○", ["mane"]),
          C("You crack the paddock gate and let the day be long.", "◇", ["pasture"]),
          C("You say what if we just take the long trail before anyone plans it.", "✦", ["gallop"])
        ]),
        Q("A horse is spooky at the mounting block. Soft eyes, wrong energy.", [
          C("You name it kindly, then you hold the line until the feet settle.", "✂", ["rein"]),
          C("You breathe with them. Brush first. No rush to the saddle.", "🌿", ["mane"]),
          C("You walk them out to grass until the world gets smaller again.", "◇", ["pasture"]),
          C("You try a different door into the ride — new loop, same trust.", "✦", ["gallop"])
        ]),
        Q("Someone wants \"whatever\" for the afternoon ride.", [
          C("You refuse whatever. You pick footing, distance, a finish.", "✎", ["rein"]),
          C("You pick for the quietest horse and don't announce why.", "○", ["mane"]),
          C("You pick the open field and leave room to wander.", "◇", ["pasture"]),
          C("You pick the idea that gets at least one heart rate honest.", "✦", ["gallop"])
        ]),
        Q("A small barn rule is in the way of a better hour.", [
          C("You keep it. Trouble is cheaper when the fence holds.", "✎", ["rein"]),
          C("You ask who the rule is protecting. Then you decide.", "✂", ["mane"]),
          C("You leave space around it — maybe the hour doesn't need a fight.", "◇", ["pasture"]),
          C("You bend it softly and clean up after, like a gentleman thief.", "✦", ["gallop"])
        ]),
        Q("Rain shows up mid-ride. Not dramatic. Just wet.", [
          C("You already planned the cool-down barn path. You take it.", "⚙", ["rein"]),
          C("You talk softer. You finish the loop like a promise.", "○", ["mane"]),
          C("You linger under the trees and let the weather finish its sentence.", "◇", ["pasture"]),
          C("You laugh, open the next gate, and call it atmosphere.", "✦", ["gallop"])
        ]),
        Q("The day offers you one extra ride you didn't schedule.", [
          C("You spend it setting tomorrow so the horses don't pay for tonight.", "⚙", ["rein"]),
          C("You spend it on the one who needs the quiet brush most.", "○", ["mane"]),
          C("You spend it doing almost nothing at the fence line.", "◇", ["pasture"]),
          C("You spend it on the unwise trail you edited out at nine.", "✦", ["gallop"])
        ])
      ]
    },
    {
      id: "disney",
      title: "Which Disney night are you",
      subtitle: "the credits version of you, not the poster",
      cover: "img/cover-disney.png",
      wash: "#3a4a7a",
      word: "disney",
      theme: "aesthetic",
      resultOrder: ["overture", "villain", "chorus", "wish"],
      results: {
        overture: {
          name: "The Overture",
          short: "you build the world before the song",
          wash: "#2c3344",
          image: "img/result-architect.png",
          p1: "You are the opening shot. The castle, the light, the promise that the night has architecture. People relax because you already set the key.",
          p2: "Someone thinks you're controlling. You're scoring the evening so the feelings have somewhere to land.",
          tells: [
            "You pick the place with a last train and a good first song.",
            "You make a list, then ignore half of it on purpose.",
            "Fun happens because the floor holds."
          ]
        },
        villain: {
          name: "The Soft Villain",
          short: "you say the true thing in a beautiful coat",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You name the wrong thing while it's still warm. Not to ruin the ball. To stop the room from lying through the waltz.",
          p2: "Kind and sharp is a rare pairing. You would rather lose the pretty lie than keep a fake happily-ever-after.",
          tells: [
            "You name the thing everyone is stepping around.",
            "Your compliments are specific enough to sting.",
            "You refuse \"whatever.\" You make them want something."
          ]
        },
        chorus: {
          name: "The Loyal Chorus",
          short: "you show up in everyone else's song",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You take orbit like a vow. Not clinging — attending. You know where your people are in the ballroom without looking.",
          p2: "You will rearrange your own weather so someone isn't alone in theirs. That's how you love: by being the harmony that holds.",
          tells: [
            "You wait to see who needs you first.",
            "You remember the drink they didn't order last time.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        wish: {
          name: "The Midpoint Wish",
          short: "you follow the spark before the third act",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You say \"what if we just\" and mean it. The itinerary was a suggestion. The good night starts as a wrong turn with excellent lighting.",
          p2: "Your chaos has manners. You won't smash the castle. You'll just open a door that wasn't on the tour.",
          tells: [
            "Your best nights start as a wrong turn.",
            "You spend the unwise hour you edited out at 9.",
            "People call you unpredictable when they mean they felt something."
          ]
        }
      },
      questions: [
        Q("It's Saturday. Someone puts on a princess movie. The room waits.", [
          C("You dim the lamps, queue the snacks, set the key of the night.", "✎", ["overture"]),
          C("You say the true thing about the plot before the second song.", "✂", ["villain"]),
          C("You sit next to whoever went quiet and pass the blanket.", "○", ["chorus"]),
          C("You suggest we start halfway in — the wish scene, not the prologue.", "✦", ["wish"])
        ]),
        Q("The group wants \"whatever\" for movie night.", [
          C("You pick the place with a last train and a good first song.", "✎", ["overture"]),
          C("You refuse whatever. You make them want something.", "✂", ["villain"]),
          C("You pick for the quietest person and don't announce why.", "○", ["chorus"]),
          C("You pick the idea that will get at least one heart honest.", "✦", ["wish"])
        ]),
        Q("Someone is being polite about a story beat that's actually wrong.", [
          C("You change the lighting and the seating first. Mood, then truth.", "🌿", ["chorus"]),
          C("You name it kindly before the waltz keeps lying.", "✂", ["villain"]),
          C("You let it sit, then change the ending later.", "↝", ["wish"]),
          C("You fix the playlist so the night still has a floor.", "⚙", ["overture"])
        ]),
        Q("A glass-slipper kind of plan is in the way of a better night.", [
          C("You keep the spine. Fun is cheaper when the floor holds.", "✎", ["overture"]),
          C("You rewrite the rule so it looks like it was always yours.", "↝", ["villain"]),
          C("You break it softly and clean up after.", "✦", ["wish"]),
          C("You ask who the rule is protecting. Then you decide with them.", "○", ["chorus"])
        ]),
        Q("Halfway through, the room gets cheap — phones, jokes that miss.", [
          C("You already timed the snacks and the next song. You reset the key.", "⚙", ["overture"]),
          C("You say the one sharp line that puts the story back on its feet.", "✂", ["villain"]),
          C("You pull the quiet person back into orbit without a speech.", "○", ["chorus"]),
          C("You open a door that wasn't on the tour — balcony, dessert run, detour.", "✦", ["wish"])
        ]),
        Q("Credits. One extra hour you didn't earn.", [
          C("You spend it setting tomorrow so the night doesn't punish anyone.", "⚙", ["overture"]),
          C("You spend it telling the true version of what just happened.", "✂", ["villain"]),
          C("You spend it on the person who stayed.", "○", ["chorus"]),
          C("You spend it on the unwise thing you edited out at nine.", "✦", ["wish"])
        ])
      ]
    },
    {
      id: "fairies",
      title: "What kind of fairy are you",
      subtitle: "moss, mischief, a little dew",
      cover: "img/cover-fairies.png",
      wash: "#6b7f6a",
      word: "fairies",
      theme: "aesthetic",
      resultOrder: ["dew", "thorn", "lantern", "mischief"],
      results: {
        dew: {
          name: "The Morning Dew",
          short: "you leave the world a little wetter, kinder",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You crack rooms open. Air, soft light, the nothing that is actually care. People leave you lighter.",
          p2: "You are not loud magic. You are the open window with a good lamp.",
          tells: [
            "You linger in doorways until someone looks up.",
            "You leave a little space they can walk around in.",
            "You watch the storm finish its sentence."
          ]
        },
        thorn: {
          name: "The Soft Thorn",
          short: "you protect the grove by being exact",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You say the true thing while it's still warm. Fairy rings need boundaries. You would rather a clean cut than rot under moss.",
          p2: "Kind and sharp. If something is wrong in the clearing, you name it before the pretty lie grows roots.",
          tells: [
            "You name the thing everyone is stepping around.",
            "You ask who the rule is protecting, then you decide.",
            "Your compliments are specific enough to sting."
          ]
        },
        lantern: {
          name: "The Pocket Lantern",
          short: "you grow people and rooms",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You change the temperature until someone can grow. Moss, tea, the extra chair. Your magic looks like hospitality.",
          p2: "You notice the plant and the person with the same attention. If something is alive, you refuse to let it go thirsty.",
          tells: [
            "You feed people without making a speech.",
            "You remember who went quiet and sit next to them.",
            "Your places keep souvenirs of kindness."
          ]
        },
        mischief: {
          name: "The Good Mischief",
          short: "you follow the spark through the trees",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You open doors that weren't on the map. Soft chaos. The night gets a plot twist and a laugh.",
          p2: "You won't smash the grove. You'll just rearrange the mushrooms so the walk gets interesting.",
          tells: [
            "You say \"what if we just\" and mean it.",
            "Your best nights start as a wrong turn.",
            "You break a small rule and clean up after."
          ]
        }
      },
      questions: [
        Q("Dawn in an enchanted wood. Dew on everything. You have an hour.", [
          C("You open a path of light — soft, exact, no rush to fill it.", "◇", ["dew"]),
          C("You walk the ring and check which rules still deserve to stand.", "✂", ["thorn"]),
          C("You set a little table: tea, moss, an extra chair for whoever arrives.", "🌿", ["lantern"]),
          C("You rearrange the mushrooms so the walk gets interesting.", "✦", ["mischief"])
        ]),
        Q("Someone is lying beautifully in the clearing.", [
          C("You leave air around them until they look up on their own.", "◇", ["dew"]),
          C("You name it while it's still warm. Kind, and sharp.", "✂", ["thorn"]),
          C("You change the temperature — food, lamp, a quieter seat.", "🌿", ["lantern"]),
          C("You turn the lie into a better story before it roots.", "↝", ["mischief"])
        ]),
        Q("The grove wants \"whatever\" for the evening spell.", [
          C("You pick the quiet loop and leave room to wander.", "◇", ["dew"]),
          C("You refuse whatever. You make them want something true.", "✂", ["thorn"]),
          C("You pick for the quietest person and don't announce why.", "○", ["lantern"]),
          C("You pick the idea that gets at least one laugh honest.", "✦", ["mischief"])
        ]),
        Q("A fairy-ring rule is blocking a kinder night.", [
          C("You watch the storm of it finish, then step softly around.", "◇", ["dew"]),
          C("You ask who the rule is protecting, then you decide.", "✂", ["thorn"]),
          C("You keep hospitality intact — feed people, then renegotiate.", "🌿", ["lantern"]),
          C("You break it softly and clean up after.", "✦", ["mischief"])
        ]),
        Q("A friend went quiet under the trees.", [
          C("You linger in the doorway of the moment until they look up.", "◇", ["dew"]),
          C("You say the specific compliment that also tells the truth.", "✂", ["thorn"]),
          C("You sit next to them with tea and no speech.", "○", ["lantern"]),
          C("You invent a tiny quest that gets them moving again.", "✦", ["mischief"])
        ]),
        Q("The night offers one unwise spark through the woods.", [
          C("You spend it doing nothing loud — window open, moss underfoot.", "◇", ["dew"]),
          C("You spend it cutting one clean truth before bed.", "✂", ["thorn"]),
          C("You spend it growing the room so tomorrow can hold them.", "🌿", ["lantern"]),
          C("You say what if we just — and mean it.", "✦", ["mischief"])
        ])
      ]
    },
    {
      id: "pixar",
      title: "Which Pixar feeling are you",
      subtitle: "found family, a lump in the throat, excellent lighting",
      cover: "img/cover-pixar.png",
      wash: "#c45c26",
      word: "pixar",
      theme: "friendship",
      resultOrder: ["found", "glow", "montage", "credits"],
      results: {
        found: {
          name: "The Found Family",
          short: "you collect people like a second plot",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You take orbit like a vow. Your people are a mismatched crew and you are the gravity. Not clinging — attending.",
          p2: "You show up in the doorway without being summoned. The story works because you decided nobody eats alone.",
          tells: [
            "You wait to see who needs you first.",
            "You remember the drink they didn't order.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        glow: {
          name: "The Warm Glow",
          short: "you grow the room until it can hold a feeling",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You change the temperature. Lamp, food, the chair that was missing. People become more themselves after an hour in your weather.",
          p2: "You will not make a speech about devotion. You will make the scene possible. That's the whole short film.",
          tells: [
            "You feed people the way some people write letters.",
            "You remember who went quiet.",
            "Home keeps a glass out for people who aren't there yet."
          ]
        },
        montage: {
          name: "The Midpoint Montage",
          short: "you change the ending from inside the scene",
          wash: "#8a3a36",
          image: "img/result-twist.png",
          p1: "You read the room for the turn. If the night is cheap, you rewrite it before the sad song. Side character energy with main-character timing.",
          p2: "You save a secret like a match, not a weapon. People leave your stories different than they entered them.",
          tells: [
            "You wait one extra beat before answering.",
            "You turn a small disaster into the plot.",
            "You let a wrong thing sit, then change the ending later."
          ]
        },
        credits: {
          name: "The Quiet Credits",
          short: "the night runs because you decided it would",
          wash: "#4a3a28",
          image: "img/result-engine.png",
          p1: "Lights, snacks, the extra blanket. Sequence. You keep the watch party running and almost never get credited for the electricity.",
          p2: "That's fine. You like the hum. If everyone gets to the end of the movie okay, you held it.",
          tells: [
            "You already timed the last train.",
            "You fix the mess before anyone else has to.",
            "You're three small tasks into the evening before anyone notices."
          ]
        }
      },
      questions: [
        Q("Watch party. Found-family energy. The couch is a cast list.", [
          C("You're already counting who isn't here yet and saving a seat.", "○", ["found"]),
          C("You fix the lamp, the snacks, the chair that was missing.", "🌿", ["glow"]),
          C("You wait one beat, then suggest the film that will actually land.", "↝", ["montage"]),
          C("You already timed the runtime against the last train.", "⚙", ["credits"])
        ]),
        Q("Someone in the crew is about to make a beautiful mistake.", [
          C("You sit with them in it. No moral. Nobody eats that alone.", "○", ["found"]),
          C("You change the temperature so they can feel it safely.", "🌿", ["glow"]),
          C("You rewrite one detail so the mistake becomes the ending they needed.", "↝", ["montage"]),
          C("You quietly pack what they'll need after the credits.", "⚙", ["credits"])
        ]),
        Q("The group says \"whatever\" when picking the movie.", [
          C("You pick for the quietest person and don't announce why.", "○", ["found"]),
          C("You grow the room first — food, light — then the title is easy.", "🌿", ["glow"]),
          C("You refuse whatever. You make them want a feeling.", "✂", ["montage"]),
          C("You pick the one that fits the night's actual logistics.", "✎", ["credits"])
        ]),
        Q("A small disaster hits mid-film: spill, wrong mood, phone buzz.", [
          C("You pull the bruised person back into orbit without a speech.", "○", ["found"]),
          C("You feed people and reset the glow like nothing broke.", "🌿", ["glow"]),
          C("You turn the disaster into the plot. One extra beat. Better ending.", "↝", ["montage"]),
          C("You fix the mess before anyone else has to notice.", "⚙", ["credits"])
        ]),
        Q("They cast you in one line in the group-chat bio.", [
          C("the one who came back for you", "○", ["found"]),
          C("the one who made the room warm enough", "🌿", ["glow"]),
          C("the one who changed the ending", "↝", ["montage"]),
          C("the one who planned it", "✎", ["credits"])
        ]),
        Q("Credits rolling. What are you doing.", [
          C("Walking the last person to their door.", "○", ["found"]),
          C("Leaving a glass out for whoever isn't there yet.", "🌿", ["glow"]),
          C("Telling the quiet truth about what the night was actually about.", "✂", ["montage"]),
          C("Resetting the room so tomorrow doesn't inherit the mess.", "⚙", ["credits"])
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
      results: quiz.results || (E ? E.RESULT : {}),
      resultOrder: quiz.resultOrder
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
