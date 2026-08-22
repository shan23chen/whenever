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
    // trouble: what kind of Friday trouble you are
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
          short: "soft chaos / spark",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You don't smash the night. You open the dare, the afterparty door, the \"what if we just\" that wasn't on anyone's list — and walk through it first. The mess has charm. That's why people follow you into it.",
          p2: "Your trouble is a weather system, not a crime. Friday softens when you arrive. You start the bit. You mean it. The morning-after story usually begins with your name.",
          tells: [
            "You text \"I'm bored and dangerous\" and wait to see who is honest.",
            "You take the dare first so nobody else has to look brave alone.",
            "People call you unpredictable when they mean they felt something."
          ]
        },
        floorplan: {
          name: "The Floor Plan",
          short: "structured mischief / safety net",
          wash: "#2c3344",
          image: "img/result-architect.png",
          p1: "You get everyone in trouble and still get them home. The unwise thing has a rideshare pinned, a glass of water waiting, and a cover story that holds under fluorescent light.",
          p2: "Someone thinks you're controlling. You're trying not to drop the evening. Fun happens because you already decided where the exit is and who has the keys.",
          tells: [
            "You pick the party with a back door and a working rideshare.",
            "You make a mischief list, then ignore half of it on purpose.",
            "Trouble is cheaper when the floor holds."
          ]
        },
        accomplice: {
          name: "The Loyal Accomplice",
          short: "you get in trouble FOR people",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "Your trouble is rarely yours. You go because they went. You stay past curfew because they stayed. The night orbits a person, not a plan.",
          p2: "You will take the social hit for someone who can't. That's not weakness. That's how you love: by being the second name on the story when Friday goes sideways.",
          tells: [
            "You wait to see who needs cover first.",
            "You apologize to the one person who actually got nicked.",
            "You spend the morning-after hour on whoever stayed."
          ]
        },
        alibi: {
          name: "The Beautiful Alibi",
          short: "you rewrite the story after",
          wash: "#8a3a36",
          image: "img/result-twist.png",
          p1: "You don't always start the fire. You decide what it lights. If the night is cheap, you change the ending before the group chat solidifies.",
          p2: "Getting caught mid-bit is just a chance to tell it better. You wait one extra beat, then the alibi belongs to you — and somehow everyone prefers your version.",
          tells: [
            "You let a wrong thing sit, then change the ending later.",
            "You turn getting caught into a better story than the crime.",
            "You rewrite the night so it looks like it was always yours."
          ]
        }
      },
      questions: [
        Q("Party planning goes sideways. The host cancels at 8. The group is already dressed.", [
          C("You text three alternate addresses and a pinned rideshare. Chaos needs a floor.", "✎", ["floorplan"]),
          C("You say: fine — my place, bring whatever, no itinerary. Soft felony energy.", "✦", ["felony"]),
          C("You call the quietest friend first and ask where THEY want the night to land.", "○", ["accomplice"]),
          C("You invent a better reason the cancel was fate, then sell the new plot.", "↝", ["alibi"])
        ]),
        Q("Someone dares the table to do the unwise thing before midnight.", [
          C("You take it first so nobody else has to look brave alone.", "✦", ["felony"]),
          C("You rewrite the dare into something that still counts but won't wreck Monday.", "✎", ["floorplan"]),
          C("You take it for the person who wants to but can't afford the social hit.", "○", ["accomplice"]),
          C("You wait one beat, then propose a version that sounds better in the retelling.", "↝", ["alibi"])
        ]),
        Q("A secret lands in your lap at the party — half gossip, half live wire.", [
          C("You hold it until you know who it would bruise, then you decide with them.", "○", ["accomplice"]),
          C("You start a softer rumor of your own so the sharp one never lands. Soft felony.", "✦", ["felony"]),
          C("You wait one beat, then rewrite what the secret means before the group chat freezes it.", "↝", ["alibi"]),
          C("You file it, protect the people in it, and keep the party from detonating.", "⚙", ["floorplan"])
        ]),
        Q("Broken-curfew energy. Someone wants to stay out past the sensible hour.", [
          C("You stay because they stayed. The night orbits a person.", "○", ["accomplice"]),
          C("You check the last rideshare window and who still needs a ride home.", "⚙", ["floorplan"]),
          C("You open the afterparty door that wasn't on anyone's list and walk through first.", "✦", ["felony"]),
          C("You start composing the morning-after version while you're still in it.", "↝", ["alibi"])
        ]),
        Q("You get caught mid-bit. Not criminally. Socially. The room turns.", [
          C("You turn it into a better story than the crime before anyone can freeze it.", "↝", ["alibi"]),
          C("You own it in one sentence, then fix the mess before anyone else has to.", "⚙", ["floorplan"]),
          C("You apologize to the one person who actually got nicked — not the audience.", "○", ["accomplice"]),
          C("You laugh, lean in, and make the bit bigger so the flinch becomes the joke.", "✦", ["felony"])
        ]),
        Q("Morning after. The group chat wants a clean narrative. You have one coffee.", [
          C("You rewrite the night so it looks like it was always yours — kinder, sharper, true-ish.", "↝", ["alibi"]),
          C("You spend the hour on whoever stayed and still looks a little wrecked.", "○", ["accomplice"]),
          C("You send the logistics: who got home, who needs water, what Monday owes nobody.", "⚙", ["floorplan"]),
          C("You refuse the clean version. You keep the spark that made Friday worth it.", "✦", ["felony"])
        ])
      ]
    },

    // weather: the climate you bring into rooms
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
          short: "you warm / change the room",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You are the air that arrives before the mood does. Sticky summer rooms soften. Awkward dinners inhale. People become more themselves after an hour in your climate.",
          p2: "You notice the plant and the person with the same attention. If something is alive, you refuse to let it go thirsty — including the room.",
          tells: [
            "You crack the window and call that solved before anyone names the heat.",
            "You feed people without making a speech about the weather.",
            "Your places keep souvenirs of everyone who has been kind there."
          ]
        },
        squall: {
          name: "The Sudden Squall",
          short: "sudden weather, restless",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You stay out in the rain like it's information. Forecasts bore you. You are the weather other people check the sky for — restless, honest, a little too much, exactly enough.",
          p2: "A stuck sash is a suggestion. Half-air is a mood, but full air is better. You shove the night open with your hip.",
          tells: [
            "You stay out. Rain is information.",
            "You shove the stuck sash and swear at it kindly.",
            "You leave dying flowers because decay has a color you like."
          ]
        },
        climate: {
          name: "The House Climate",
          short: "steady humane temperature",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You adjust. Tool for the window, awning for the storm, AC versus open air, extra chair for the person who went quiet. You keep the temperature humane.",
          p2: "You are not dramatic weather. You are the reason the room can have weather and still be a room people can live in.",
          tells: [
            "You fetch the tool. Weather should be adjustable.",
            "You get everyone under an awning first.",
            "You pack for the trip's mood, not just the forecast."
          ]
        },
        clearing: {
          name: "The Honest Clearing",
          short: "you name the actual sky",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You will not pretend it's sunny. If the room is a storm, you say storm. Then people can dress for it — funeral weather, first-date air, roommate climate included.",
          p2: "Taste, for you, is just climate you refuse to fake. The record you put on is the true one, not the cool one.",
          tells: [
            "You ask who the weather is protecting, then you decide.",
            "You throw the flowers out. Sentiment is not a vase.",
            "You pick the honest song, not the impressive one."
          ]
        }
      },
      questions: [
        Q("Sticky summer room. The AC is losing to the heat. Everyone is polite about it.", [
          C("You crack every window and call the sweat part of the night.", "✦", ["squall"]),
          C("You fetch the tool, wedge the sash, and make the air adjustable.", "⚙", ["climate"]),
          C("You move the chairs into the one stripe of breeze and feed people cold fruit.", "🌿", ["front"]),
          C("You say it: this room is a swamp. Then you ask who wants the porch.", "✂", ["clearing"])
        ]),
        Q("Awkward dinner weather — funeral leftovers, or a table that forgot how to breathe.", [
          C("You warm the room first: soft lamp, bread, a seat for the quietest person.", "🌿", ["front"]),
          C("You name the sky. Kindly. Before the politeness rots.", "✂", ["clearing"]),
          C("You keep the temperature humane — water, timing, an exit that isn't rude.", "⚙", ["climate"]),
          C("You open a door that wasn't on the seating chart and let restless air in.", "✦", ["squall"])
        ]),
        Q("First-date air. The bar is too loud and the forecast between you is unclear.", [
          C("You change the microclimate: outside table, quieter corner, better light.", "🌿", ["front"]),
          C("You ask the honest question once, then you shut up and watch the sky.", "✂", ["clearing"]),
          C("You already picked a second place with a real last train of conversation.", "✎", ["climate"]),
          C("You suggest you leave the plan and walk until the air tells the truth.", "✦", ["squall"])
        ]),
        Q("Roommate conflict climate. The apartment has been holding its breath for a week.", [
          C("You say the actual weather out loud so nobody has to keep dressing for fake sun.", "✂", ["clearing"]),
          C("You cool the room first — dishes, shared list, a humane temperature — then talk.", "⚙", ["climate"]),
          C("You sit nearer and feed the bond until the storm can land without wrecking the lease.", "○", ["front"]),
          C("You shove the stuck conversation open. Half-air was getting on your nerves.", "✦", ["squall"])
        ]),
        Q("Packing for a trip's mood, not just the forecast. One bag. Honest weather.", [
          C("You pack the spare plan: layers, charger, the thing that keeps the group humane.", "✎", ["climate"]),
          C("You pack for the squall — the jacket that says you're willing to get wet.", "✦", ["squall"]),
          C("You pack the soft climate: snacks, the sweater they always forget, room for air.", "🌿", ["front"]),
          C("You name what the trip actually is before anyone packs for a brochure.", "✂", ["clearing"])
        ]),
        Q("Open window versus AC. The room is choosing a politics of air.", [
          C("You open it all the way. Full air is better than managed comfort.", "✦", ["squall"]),
          C("You adjust until the temperature is humane for the person who runs cold.", "⚙", ["climate"]),
          C("You crack it, move a chair into the stripe of night, and call that hospitality.", "🌿", ["front"]),
          C("You ask who the closed air is protecting — then you decide with the room.", "✂", ["clearing"])
        ])
      ]
    },

    // love: how you actually love
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
          short: "proximity / attendance",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You take orbit like a vow. Not clinging — attending. Missed call, bad day, parents' driveway: you know where they are without performing distance.",
          p2: "You rearrange your own weather so they aren't alone in theirs. Love, for you, is a location: near.",
          tells: [
            "You text \"home?\" and wait for the real answer.",
            "You remember the drink they didn't order last time.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        kitchen: {
          name: "The Extra Plate",
          short: "practical care / feeding the bond",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You love in the practical tense. Grocery aisle, packed bag, extra plate. Food, light, the errand that proves it without a speech.",
          p2: "You will not make a monologue about devotion. You will make the room possible. That's the whole poem.",
          tells: [
            "You feed people the way some people write letters.",
            "You pack their charger before you pack your own pride.",
            "Home keeps a glass out for people who aren't there yet."
          ]
        },
        sentence: {
          name: "The Unadorned Sentence",
          short: "truth-telling love",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You say the true thing while it's still warm. Not to win. To stop the two of you from lying to the night — in the aisle, at the table, on the missed call.",
          p2: "Kind and sharp is how you stay. You would rather lose the pretty version than keep a fake peace.",
          tells: [
            "You name the thing everyone is stepping around.",
            "Your compliments are specific enough to sting a little.",
            "You ask, then you pick the honest answer, not the cool one."
          ]
        },
        detour: {
          name: "The Good Detour",
          short: "adventurous / spark love",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You follow the spark. Anniversary with no plan becomes the best wrong turn. The itinerary was a suggestion. They will remember the night you refused \"fine.\"",
          p2: "Your chaos has manners. You won't smash them. You'll just open a door and see if they come.",
          tells: [
            "You say \"what if we just\" and mean it.",
            "Your best nights start as a wrong turn.",
            "You spend the unwise hour you edited out at nine."
          ]
        }
      },
      questions: [
        Q("Missed call. Three rings, then nothing. You know that silence.", [
          C("You call back and stay on the line until the quiet has company.", "○", ["orbit"]),
          C("You show up with food and don't make them narrate the day.", "🌿", ["kitchen"]),
          C("You text the real question once: are you okay, or are you performing okay.", "✂", ["sentence"]),
          C("You say what if we just leave the apartment and walk until the air changes.", "✦", ["detour"])
        ]),
        Q("Meeting their parents. The driveway is a small theater.", [
          C("You sit near them under the table energy — orbit as attendance, not performance.", "○", ["orbit"]),
          C("You bring the thing that feeds the room: dessert, a story, practical warmth.", "🌿", ["kitchen"]),
          C("You tell the unadorned truth about who you are when someone tests for polish.", "✂", ["sentence"]),
          C("You take the scenic wrong turn of a joke that loosens the whole table.", "✦", ["detour"])
        ]),
        Q("Conflict in a grocery aisle. The cart is full of things that aren't the fight.", [
          C("You put the real subject on the conveyor belt. Tonight. Kindly.", "✂", ["sentence"]),
          C("You cool it first — finish the list, get them fed, then talk where the light is softer.", "🌿", ["kitchen"]),
          C("You stay in range. You don't storm out of produce. Attendance is the vow.", "○", ["orbit"]),
          C("You abandon the cart for a walk around the block until the spark can be honest.", "✦", ["detour"])
        ]),
        Q("Packing for a trip together. One bag between nerves and itinerary.", [
          C("You pack their charger, the snack they forget, the practical care that is the poem.", "⚙", ["kitchen"]),
          C("You throw the itinerary. The good trip starts as a wrong turn with excellent company.", "✦", ["detour"]),
          C("You ask what they actually want from the days — not the brochure version.", "✂", ["sentence"]),
          C("You check in every hour of packing like proximity is the point.", "○", ["orbit"])
        ]),
        Q("They had a bad day. You have one evening and no script.", [
          C("You build a small night with edges: food, bath, no plot required.", "✎", ["kitchen"]),
          C("You take them somewhere the day can't follow.", "✦", ["detour"]),
          C("You sit close and let them be unimpressive. Orbit, not advice.", "○", ["orbit"]),
          C("You ask the real question once, then you shut up.", "✂", ["sentence"])
        ]),
        Q("Anniversary. No plan. The calendar is blank and slightly accusing.", [
          C("You cook the thing that means I was paying attention all year.", "🌿", ["kitchen"]),
          C("You say what if we just — and build the night from heat, not reservation apps.", "✦", ["detour"]),
          C("You tell them the unadorned sentence about why this day still matters.", "✂", ["sentence"]),
          C("You stay home on purpose and keep them in range all evening.", "○", ["orbit"])
        ])
      ]
    },

    // 2am: who you are when the performance drops
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
          short: "keeper of the night logistics",
          wash: "#4a3a28",
          image: "img/result-engine.png",
          p1: "The house is a machine at night and you are the quiet electricity. Fridge light, face-down phone, tomorrow in four hours — you know where the extra blanket is.",
          p2: "You like the hum more than the applause. If everyone gets to morning, that was the point of the hour.",
          tells: [
            "You are already three small tasks into the dark.",
            "You find the candles before anyone jokes.",
            "You set tomorrow so 9am doesn't get to ambush anyone."
          ]
        },
        static: {
          name: "The Open Frequency",
          short: "open empty frequency",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You crack the night open and don't rush to fill it. Insomnia playlist, fridge light, the nothing that is actually something. Open empty frequency.",
          p2: "Two in the morning is not productive. That's the honesty. You let the hour be empty on purpose.",
          tells: [
            "You spend it doing nothing, with the window open.",
            "You talk more softly. The dark is a room too.",
            "You leave the map. Being lost is the point."
          ]
        },
        vigil: {
          name: "The Soft Vigil",
          short: "staying up for someone",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "2am is a person. Phone lights up, roommate still awake — you stay because they stayed. The toast is for two even if they said they weren't hungry.",
          p2: "You take orbit in the dark. Not dramatic. Just unwilling to let someone be awake alone.",
          tells: [
            "If they're still up, so are you. That's the vow.",
            "You sit nearer to the person who hates the dark.",
            "You text nothing important, which is how you say I'm here."
          ]
        },
        confession: {
          name: "The Unedited Hour",
          short: "unedited truth hour",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "At 2am you stop performing. The text you almost send becomes the sentence you send. You would rather the night hear it than sleep on a lie.",
          p2: "This is not cruelty. This is the only hour that will let you be exact.",
          tells: [
            "You say the sentence you've been editing all day.",
            "You want a name. Mystery without a person bores you.",
            "Fine is a lie. You order what you want from the dark."
          ]
        }
      },
      questions: [
        Q("Phone lights up at 2:11. Face-down was a lie. Someone is still in the world.", [
          C("You answer and stay until the logistics of their night have a floor.", "⚙", ["lamp"]),
          C("You leave it. Open frequency. If it's urgent, they'll call twice.", "◇", ["static"]),
          C("You pick up because if they're still up, so are you. That's the vow.", "○", ["vigil"]),
          C("You answer and say the sentence you've been editing all day.", "✂", ["confession"])
        ]),
        Q("Fridge light. The leftovers look better than dinner did. The kitchen is a chapel.", [
          C("You plate them like a second act, then wash the dish so morning is kind.", "⚙", ["lamp"]),
          C("Fridge light, fork, standing up. Citizenship of night. No performance.", "✦", ["static"]),
          C("You save the good bit for the person still sleeping down the hall.", "🌿", ["vigil"]),
          C("You eat, then admit out loud what you're actually hungry for.", "✂", ["confession"])
        ]),
        Q("Insomnia playlist. The same three songs looping like a soft interrogation.", [
          C("You let it finish. Skipping would be a little cowardly tonight.", "✂", ["confession"]),
          C("You leave it on as open static and stare at the ceiling like a map.", "◇", ["static"]),
          C("You send one track to the person who was there the first time.", "○", ["vigil"]),
          C("You switch to something with a spine so tomorrow has a chance.", "✎", ["lamp"])
        ]),
        Q("The text you almost send. Cursor blinking like a dare.", [
          C("You send the unedited truth. Warm. Exact. No emoji armor.", "✂", ["confession"]),
          C("You delete it and open the window. Empty frequency is safer tonight.", "◇", ["static"]),
          C("You send nothing important — a photo of the fridge — which is how you say I'm here.", "○", ["vigil"]),
          C("You draft it, schedule tomorrow's kindness, and put the phone face-down for real.", "⚙", ["lamp"])
        ]),
        Q("Roommate still awake. Light under their door. The hallway is a choice.", [
          C("You go in with two glasses of water. No speech. Soft vigil.", "🌿", ["vigil"]),
          C("You stay put. If they want you, the door is a choice. Open frequency.", "◇", ["static"]),
          C("You go in and say the thing the daytime kept editing.", "✂", ["confession"]),
          C("You check if they need tomorrow set down — alarm, water, the ugly small task.", "⚙", ["lamp"])
        ]),
        Q("Tomorrow starts in four hours. Sleep is available. You don't take it yet. Why.", [
          C("One more system to set down so 9am doesn't ambush anyone.", "⚙", ["lamp"]),
          C("The night finally got interesting. Empty on purpose.", "✦", ["static"]),
          C("Someone might still need you. If they're up, so are you.", "○", ["vigil"]),
          C("This is the only hour that will take the unedited sentence.", "✂", ["confession"])
        ])
      ]
    },

    // side: which side character you play in other people's stories
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
          short: "make the lead possible, disappear",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You are the open window the scene needs. Wedding toast you're not giving, group photo edge, credits energy — people leave lighter. Nobody writes you a speech. That's fine.",
          p2: "The play works because you left air in it. You don't need the spotlight to have been the point.",
          tells: [
            "You pick for the quietest person and don't announce why.",
            "You wait at the threshold until they look up.",
            "You vanish before the credits try to thank you."
          ]
        },
        foil: {
          name: "The Beautiful Foil",
          short: "change the ending from the side",
          wash: "#8a3a36",
          image: "img/result-twist.png",
          p1: "You read the room like a novel — for the turn. Friend dumping someone, road-trip casting, someone else's big night: if the lead is about to be cheap, you rewrite them before dessert.",
          p2: "Side character is a job title, not a personality. You save a secret like a match, not a weapon.",
          tells: [
            "You wait one extra beat before answering.",
            "You turn a small disaster into the plot.",
            "People leave your scenes different than they entered them."
          ]
        },
        extra: {
          name: "The Recurring Extra",
          short: "recurring supportive presence",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You are in the background of a dozen lives on purpose. Group photo, kitchen doorway, the coat on the chair. People are less alone because you exist in frame.",
          p2: "You will not demand a close-up. You will be the person who appears without being summoned.",
          tells: [
            "You're already there. You never really left the kitchen.",
            "You remember the drink they didn't order last time.",
            "You walk the last person to their door."
          ]
        },
        stagehand: {
          name: "The Stagehand",
          short: "logistics that make the scene run",
          wash: "#4a3a28",
          image: "img/result-engine.png",
          p1: "Lights, music, spare charger, the extra glass. Sequence. You keep someone else's big night running and almost never get credited for the electricity.",
          p2: "That's fine. You like the hum. If the scene holds, you held it.",
          tells: [
            "You arrive with a plan and a spare charger.",
            "You hide the worst thing and call that hospitality.",
            "You reset the room so tomorrow doesn't inherit the night."
          ]
        }
      },
      questions: [
        Q("Wedding toast you're not giving. You're in the wings with a glass and a job.", [
          C("You catch the lead's eye once, then disappear so the speech can land without you.", "◇", ["wings"]),
          C("You whisper the one line that keeps them from saying the cheap thing.", "✂", ["foil"]),
          C("You're already refilling water for the nervous table. Recurring presence.", "○", ["extra"]),
          C("You timed the mic, the playlist cue, and who still needs a ride after.", "⚙", ["stagehand"])
        ]),
        Q("Group photo. Everyone is performing the frame. You have three seconds.", [
          C("You step to the edge so the lead can be the poster. Wings energy.", "◇", ["wings"]),
          C("You change the blocking — one person closer — and the ending improves.", "↝", ["foil"]),
          C("You're already in every photo of this friend group. Of course you are.", "○", ["extra"]),
          C("You take the phone, count down, and make sure the light isn't lying.", "⚙", ["stagehand"])
        ]),
        Q("Friend is dumping someone. You're the side character with a key to the apartment.", [
          C("You sit with them in it. No moral. Supportive presence, not a TED talk.", "○", ["extra"]),
          C("You say the true thing, then help them do the hard thing anyway.", "✂", ["foil"]),
          C("You quietly pack the bag they'll need after the scene ends.", "⚙", ["stagehand"]),
          C("You leave air — threshold energy — until they look up and ask.", "◇", ["wings"])
        ]),
        Q("Road trip casting. Someone has to decide who drives, who DJs, who disappears into the map.", [
          C("You take logistics: gas, playlist spine, the spare charger in the glovebox.", "✎", ["stagehand"]),
          C("You cast yourself as the foil who changes the destination mid-drive.", "✦", ["foil"]),
          C("You're the recurring extra in the back seat who keeps everyone fed and human.", "○", ["extra"]),
          C("You volunteer for the quiet role that makes the lead's story possible, then fade.", "◇", ["wings"])
        ]),
        Q("Someone else's big night. Promotions, openings, the spotlight that isn't yours.", [
          C("You vanish before the credits thank you. The night wasn't about you.", "◇", ["wings"]),
          C("You wait one beat, then say the line that keeps the night from going cheap.", "↝", ["foil"]),
          C("You're in the doorway with their coat, already part of the frame.", "○", ["extra"]),
          C("You run lights, timing, the afterparty address. The scene runs because you decided.", "⚙", ["stagehand"])
        ]),
        Q("Credits energy. The night is ending. What are you doing in the last shot.", [
          C("Resetting the room so tomorrow doesn't inherit someone else's mess.", "⚙", ["stagehand"]),
          C("Walking the last person to their door. Recurring. Soft. In frame.", "○", ["extra"]),
          C("Already gone. Leave them wanting the cameo.", "↝", ["wings"]),
          C("Telling the lead what the scene was actually about — then letting them own it.", "✂", ["foil"])
        ])
      ]
    },

    // horses: how you relate to a large living animal
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
          short: "animal-reader, soft hands, attunement",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You notice the ear flick before the person does. Spook at the mounting block, muddy girth, last cookie — soft hands, long patience. You speak horse before you speak people.",
          p2: "You don't perform \"horse girl.\" You show up with the brush and the quiet. The animal decides you're safe, and that is the whole compliment.",
          tells: [
            "You talk softer in a stall than in a kitchen.",
            "You remember who needs the extra cookie.",
            "Brush first. No rush to the saddle."
          ]
        },
        rein: {
          name: "The Steady Rein",
          short: "structure, safety, clear aids",
          wash: "#2c3344",
          image: "img/result-architect.png",
          p1: "You give the ride a floor. Warm-up, cool-down, girth checked twice, gate latched. Fun happens because you already decided where the fence is.",
          p2: "Someone thinks you're controlling. You're trying not to drop a thousand pounds of feeling. Soft and exact is how you love a horse.",
          tells: [
            "You check the girth twice and still let them have the fun mile.",
            "You make a plan for the trail and leave room for honest footing.",
            "People relax around you because the floor is not going to move."
          ]
        },
        pasture: {
          name: "The Open Pasture",
          short: "space, turnout, non-domination",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You crack the day open and don't rush to fill it. Turnout, grass, new horse in the herd given room. You leave them space to be an animal.",
          p2: "You are not here to dominate. You are here to let something large and living be itself near you.",
          tells: [
            "You linger at the fence with nothing to prove.",
            "You pick the quiet loop when the world is too loud.",
            "You leave a little space they can walk around in."
          ]
        },
        gallop: {
          name: "The Sudden Gallop",
          short: "spark, trail curiosity, honest heart rate",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You say \"what if we just\" and mean it. Lost shoe, new trail, the gate that wasn't on the map — the good ride starts as a wrong turn with good footing.",
          p2: "Your chaos has manners. You won't smash the horse. You'll just open a gate and see what the afternoon wants.",
          tells: [
            "You pick the idea that gets at least one heart rate honest.",
            "Your best days start as a trail detour.",
            "People call you unpredictable when they mean they felt the wind."
          ]
        }
      },
      questions: [
        Q("Spook at the mounting block. Soft eyes, wrong energy, feet not settling.", [
          C("You breathe with them. Brush first. No rush to the saddle.", "🌿", ["mane"]),
          C("You name it kindly, then hold the line with clear aids until the feet settle.", "✂", ["rein"]),
          C("You walk them out to grass until the world gets smaller again.", "◇", ["pasture"]),
          C("You try a different door into the ride — new loop, same trust, honest heart rate.", "✦", ["gallop"])
        ]),
        Q("Muddy girth. The tack is a mess and the horse is waiting like a question.", [
          C("You clean it properly, check twice, warm up slow. Safety is the love language.", "✎", ["rein"]),
          C("You talk softer while you work. Soft hands. Attunement over hurry.", "○", ["mane"]),
          C("You leave extra time — turnout energy even in the aisle. No domination clock.", "◇", ["pasture"]),
          C("You laugh, wipe the worst, and still take the trail that gets the blood moving.", "✦", ["gallop"])
        ]),
        Q("New horse in the herd. The paddock is renegotiating the whole social order.", [
          C("You watch ear flicks and who eats first. Animal-reader before you intervene.", "○", ["mane"]),
          C("You manage the turnout plan: who pairs, which gate, clear structure.", "✎", ["rein"]),
          C("You give them space and time. Non-domination. Let the herd write its own chapter.", "◇", ["pasture"]),
          C("You take the curious one out for a short spark ride so the day still has wind.", "✦", ["gallop"])
        ]),
        Q("Farrier day. Patience is the whole sport. The aisle smells like hoof and honesty.", [
          C("You hold steady, keep the aids quiet, make the floor safe for everyone involved.", "⚙", ["rein"]),
          C("You stay at the shoulder with soft hands and a voice the horse already trusts.", "○", ["mane"]),
          C("You don't rush the stand. Space. Turnout mentality even in the stocks.", "◇", ["pasture"]),
          C("You promise a fun mile after — spark as the reward for standing like a saint.", "✦", ["gallop"])
        ]),
        Q("Lost shoe on trail. Mid-ride. The footing just got personal.", [
          C("You dismount, check the sole, walk them in on the softest line. Structure first.", "⚙", ["rein"]),
          C("You read their face before the farrier math. Soft hands on the neck the whole walk in.", "○", ["mane"]),
          C("You take the long quiet way home. No drama. Pasture pace.", "◇", ["pasture"]),
          C("You still find one honest canter on good footing before you call it — carefully.", "✦", ["gallop"])
        ]),
        Q("Who gets the last cookie. Two soft noses. One treat. Barn politics.", [
          C("You remember who actually needs it — the anxious one, the elder, the soft mouth.", "○", ["mane"]),
          C("You split it with a rule everyone can predict next time. Clear aids, even for cookies.", "✎", ["rein"]),
          C("You toss it into the paddock and let them sort turnout justice themselves.", "◇", ["pasture"]),
          C("You invent a tiny trick for it — spark, laugh, both horses brighter.", "✦", ["gallop"])
        ])
      ]
    },

    // disney: what role you play in a fairy-tale movie night
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
          short: "world-builder, sets the key / lighting / order",
          wash: "#2c3344",
          image: "img/result-architect.png",
          p1: "You are the opening shot. Stack of films ordered, lamps dimmed, snacks staged. People relax because you already set the key of the fairy-tale night.",
          p2: "Someone thinks you're controlling. You're scoring the evening so the feelings have somewhere to land before act two gets sad.",
          tells: [
            "You order the stack: overture film first, tearjerker second, adventure last.",
            "You dim the lamps and stage the snacks before anyone presses play.",
            "Fun happens because the floor of the night holds."
          ]
        },
        villain: {
          name: "The Soft Villain",
          short: "honest friction / names the fake happily-ever-after",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You name the wrong thing while it's still warm. Someone talks through the song — you say so. You would rather lose the pretty lie than keep a fake happily-ever-after.",
          p2: "Kind and sharp is a rare pairing. You protect the story by refusing the cheap ending.",
          tells: [
            "You name the thing everyone is stepping around in the plot.",
            "Your compliments are specific enough to sting.",
            "You refuse the brochure ending. You make them want something true."
          ]
        },
        chorus: {
          name: "The Loyal Chorus",
          short: "harmony, snacks for others, sits with the cryers",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You take orbit like a vow. Sad act two, midnight blanket fort — you sit with the cryers and pass the snacks without a speech. Harmony that holds.",
          p2: "You rearrange your own weather so someone isn't alone in theirs. That's how you love a movie night: by being the chorus.",
          tells: [
            "You sit next to whoever went quiet and pass the blanket.",
            "You remember who needs the tissues before the sad song.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        wish: {
          name: "The Midpoint Wish",
          short: "midpoint spark / one more movie / costume energy",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You say \"one more movie\" and mean it. Costume energy, blanket fort at midnight, princess versus adventure argument that turns into the best wrong turn.",
          p2: "Your chaos has manners. You won't smash the castle. You'll just open a door that wasn't on the tour.",
          tells: [
            "Your best nights start as \"one more\" after the credits.",
            "You spend the unwise hour you edited out at nine.",
            "People call you unpredictable when they mean they felt something."
          ]
        }
      },
      questions: [
        Q("Picking the stack of movies. Princess versus adventure. The room is a hung jury.", [
          C("You order the night: world-builder first, cry film second, spark last. Key set.", "✎", ["overture"]),
          C("You name the fake compromise out loud — then make them want a real feeling.", "✂", ["villain"]),
          C("You pick for the quietest person and don't announce why. Harmony first.", "○", ["chorus"]),
          C("You say one more after the first credits — costume energy, no bedtime.", "✦", ["wish"])
        ]),
        Q("Someone talks through the song. The magic is getting stepped on.", [
          C("You pause, reset the lighting, and restart the verse like a conductor.", "✎", ["overture"]),
          C("You say the true thing kindly: the song is the point. Soft villain.", "✂", ["villain"]),
          C("You pass snacks to the talker and the cryer alike — keep the chorus kind.", "○", ["chorus"]),
          C("You drag everyone into a living-room chorus until the talk becomes the bit.", "✦", ["wish"])
        ]),
        Q("Sad act two. Someone is crying and pretending they have allergies.", [
          C("You sit with the cryers. Blanket. No speech. Loyal chorus.", "○", ["chorus"]),
          C("You dim the lamps harder and protect the scene like it has architecture.", "✎", ["overture"]),
          C("You name it: this is the lump-in-the-throat part. Let it be true.", "✂", ["villain"]),
          C("You pause for ice cream, then dive back in — midpoint wish as medicine.", "✦", ["wish"])
        ]),
        Q("Midnight blanket fort. Credits cookies still warm. The night could still turn.", [
          C("You stage the fort: pillows sequenced, playlist soft, cookies on a tray.", "⚙", ["overture"]),
          C("You ask who we're actually staying up for — name the sky of the room.", "✂", ["villain"]),
          C("You crawl in next to whoever looks smallest in the dark.", "○", ["chorus"]),
          C("You propose one more film. Costume optional. Spark mandatory.", "✦", ["wish"])
        ]),
        Q("Arguing princess versus adventure for the last slot. Voices rising.", [
          C("You build a double feature with a clear order so both feelings land.", "✎", ["overture"]),
          C("You cut the fake peace: say which argument is taste and which is control.", "✂", ["villain"]),
          C("You vote with the person who always yields — then sit with them either way.", "○", ["chorus"]),
          C("You refuse the binary. What if we start halfway into the wish scene.", "✦", ["wish"])
        ]),
        Q("Credits cookies. One extra hour. The castle is still lit in the TV glow.", [
          C("You reset the room so tomorrow doesn't inherit the fort.", "⚙", ["overture"]),
          C("You tell the true version of what the night was actually about.", "✂", ["villain"]),
          C("You spend it on the person who stayed through every sad song.", "○", ["chorus"]),
          C("You spend it on one more movie you edited out at nine.", "✦", ["wish"])
        ])
      ]
    },

    // fairies: what kind of small magic you practice
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
          short: "gentle air / opening",
          wash: "#8a7d68",
          image: "img/result-window.png",
          p1: "You crack small worlds open. Mossy walks, garden at dusk, dew on everything. Gentle air. People leave you lighter — like a ring of mushrooms left undisturbed.",
          p2: "You are not loud magic. You are the open path with a thimble of light.",
          tells: [
            "You linger at the garden edge until someone looks up.",
            "You leave a little space they can walk around in.",
            "You watch the dusk finish its sentence before you speak."
          ]
        },
        thorn: {
          name: "The Soft Thorn",
          short: "boundary magic, exactness",
          wash: "#9a4318",
          image: "img/result-knife.png",
          p1: "You say the true thing while it's still warm. Someone steps on the flowerbed — you name it. Fairy rings need boundaries. Clean cut over rot under moss.",
          p2: "Kind and sharp. If something is wrong in the clearing, you name it before the pretty lie grows roots.",
          tells: [
            "You name the thing everyone is stepping around.",
            "You ask who the rule is protecting, then you decide.",
            "Your compliments are specific enough to sting."
          ]
        },
        lantern: {
          name: "The Pocket Lantern",
          short: "hospitality / growth magic",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You change the temperature until someone can grow. Party needs enchantment? Thimble tea, moss seats, extra chair. Your magic looks like hospitality.",
          p2: "You notice the plant and the person with the same attention. If something is alive, you refuse to let it go thirsty.",
          tells: [
            "You feed people without making a speech.",
            "You remember who went quiet and sit next to them.",
            "Your places keep souvenirs of kindness — thimbles, pressed leaves."
          ]
        },
        mischief: {
          name: "The Good Mischief",
          short: "playful rearrangement",
          wash: "#c45c26",
          image: "img/result-anarchist.png",
          p1: "You rearrange the mushrooms so the walk gets interesting. Lost earring becomes a quest. Soft chaos. The dusk gets a plot twist and a laugh.",
          p2: "You won't smash the grove. You'll just move the ring of mushrooms one foot to the left.",
          tells: [
            "You say \"what if we just\" and mean it.",
            "Your best nights start as a wrong turn through the moss.",
            "You break a small rule and clean up after — gentleman thief of dew."
          ]
        }
      },
      questions: [
        Q("Mossy walk. Dew on everything. A ring of mushrooms you almost step through.", [
          C("You leave air around it — gentle opening. The ring can keep its quiet.", "◇", ["dew"]),
          C("You name the boundary: this is not a shortcut. Soft thorn.", "✂", ["thorn"]),
          C("You set a thimble picnic at the edge for whoever arrives next.", "🌿", ["lantern"]),
          C("You rearrange three mushrooms so the path gets a tiny plot twist.", "✦", ["mischief"])
        ]),
        Q("Someone steps on the flowerbed. Boots in the soft world. The garden flinches.", [
          C("You say it while it's warm: that bed is spoken for. Exact, kind.", "✂", ["thorn"]),
          C("You mend what you can — water, stakes, hospitality for the bruised stems.", "🌿", ["lantern"]),
          C("You leave space for them to notice without a speech. Dew energy.", "◇", ["dew"]),
          C("You invent a tiny penance quest involving a watering can and a laugh.", "✦", ["mischief"])
        ]),
        Q("A party needs enchantment. The yard is fluorescent and unconvinced.", [
          C("You hang lanterns low, set moss bowls, grow the room until it can hold magic.", "🌿", ["lantern"]),
          C("You open the garden path and let dusk do half the work. Gentle air.", "◇", ["dew"]),
          C("You refuse the fake sparkle and name what would actually feel true.", "✂", ["thorn"]),
          C("You hide thimbles in the grass and dare people to find the mischief.", "✦", ["mischief"])
        ]),
        Q("A child asks if fairies are real. Dewlight. Serious eyes.", [
          C("You leave the question open like a window — air, not a lecture.", "◇", ["dew"]),
          C("You give the exact true answer you can stand behind, no sugar rot.", "✂", ["thorn"]),
          C("You show them the lantern trick: hospitality as proof that magic practices care.", "🌿", ["lantern"]),
          C("You stage a tiny rearrangement — earring in the moss, ring of stones — and wink.", "✦", ["mischief"])
        ]),
        Q("Lost earring in the grass. Gold wink under dusk. The hunt is on.", [
          C("You kneel slow, soft hands, leave the lawn its dignity while you search.", "◇", ["dew"]),
          C("You mark the boundary of the search grid. Exactness is a kind of spell.", "✎", ["thorn"]),
          C("You bring a pocket lantern and tea for whoever's knees give out first.", "🌿", ["lantern"]),
          C("You turn it into a quest with ridiculous rules and a prize thimble.", "✦", ["mischief"])
        ]),
        Q("Garden at dusk. One unwise spark through the hedge. The mushrooms are listening.", [
          C("You spend it doing nothing loud — dew, open air, moss underfoot.", "◇", ["dew"]),
          C("You spend it cutting one clean truth before the dark gets dishonest.", "✂", ["thorn"]),
          C("You spend it growing the clearing so tomorrow can hold whoever arrives.", "🌿", ["lantern"]),
          C("You say what if we just — and rearrange the night like gentleman mischief.", "✦", ["mischief"])
        ])
      ]
    },

    // pixar: which emotional engine you run in found-family stories
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
          short: "collecting people, mismatched crew gravity",
          wash: "#6a7380",
          image: "img/result-satellite.png",
          p1: "You take orbit like a vow. Friend group falling apart, someone new at the table — your people are a mismatched crew and you are the gravity. Not clinging — attending.",
          p2: "You show up in the doorway without being summoned. The story works because you decided nobody eats alone.",
          tells: [
            "You wait to see who needs you first.",
            "You save a seat for whoever isn't here yet.",
            "You leave last, not because you have nowhere to go."
          ]
        },
        glow: {
          name: "The Warm Glow",
          short: "warming the scene until feelings fit",
          wash: "#6b7f6a",
          image: "img/result-greenhouse.png",
          p1: "You change the temperature. Moving day, cry movie, airport goodbye — lamp, food, the chair that was missing. People become more themselves after an hour in your weather.",
          p2: "You will not make a speech about devotion. You will make the scene possible. That's the whole short film.",
          tells: [
            "You feed people the way some people write letters.",
            "You remember who went quiet.",
            "Home keeps a glass out for people who aren't there yet."
          ]
        },
        montage: {
          name: "The Midpoint Montage",
          short: "mid-story turn, reframing",
          wash: "#8a3a36",
          image: "img/result-twist.png",
          p1: "You read the room for the turn. If the night is cheap, you rewrite it before the sad song. Fixing something broken together becomes the montage that saves the ending.",
          p2: "You save a secret like a match, not a weapon. People leave your stories different than they entered them.",
          tells: [
            "You wait one extra beat before answering.",
            "You turn a small disaster into the plot.",
            "You let a wrong thing sit, then change the ending later."
          ]
        },
        credits: {
          name: "The Quiet Credits",
          short: "quiet logistics through the lump-in-throat",
          wash: "#4a3a28",
          image: "img/result-engine.png",
          p1: "Lights, snacks, the extra blanket, the ride to the airport. Sequence. You keep the found-family watch party running and almost never get credited for the electricity.",
          p2: "That's fine. You like the hum. If everyone gets through the lump in the throat okay, you held it.",
          tells: [
            "You're three small tasks into the evening before anyone notices.",
            "You fix the mess before anyone else has to.",
            "You reset the room so tomorrow doesn't inherit the feeling."
          ]
        }
      },
      questions: [
        Q("Friend group falling apart. The cast list is rewriting itself without a meeting.", [
          C("You collect whoever's left and make a smaller, truer crew. Gravity.", "○", ["found"]),
          C("You warm a room big enough for the feeling — food, lamp, no speeches yet.", "🌿", ["glow"]),
          C("You wait one beat, then reframe the story so it can still have a midpoint.", "↝", ["montage"]),
          C("You handle the quiet logistics: who needs a ride, who got left out of the thread.", "⚙", ["credits"])
        ]),
        Q("Moving day. Boxes, dust, the short-film lighting of a life in transit.", [
          C("You're already counting who isn't here yet and saving them a task that feels like belonging.", "○", ["found"]),
          C("You fix the lamp in the new place first so feelings have somewhere to land.", "🌿", ["glow"]),
          C("You turn the disaster box into the montage — wrong turn that becomes the plot.", "↝", ["montage"]),
          C("You labeled everything last night. Sequence. The move runs because you decided.", "⚙", ["credits"])
        ]),
        Q("Watching a cry movie together. Lump in the throat. Excellent bad lighting.", [
          C("You pull the quiet person back into orbit without a speech.", "○", ["found"]),
          C("You pass tissues and warm the scene until the feeling fits.", "🌿", ["glow"]),
          C("You wait for the turn, then say the one line that reframes why you're all here.", "↝", ["montage"]),
          C("You already timed the runtime against who needs a ride home after.", "⚙", ["credits"])
        ]),
        Q("Someone new joins the table. Mismatched crew energy. The gravity shifts.", [
          C("You make space like collecting people is the whole second plot.", "○", ["found"]),
          C("You change the temperature — extra plate, softer light — until they can grow here.", "🌿", ["glow"]),
          C("You wait one extra beat, then invite the turn that makes them part of the story.", "↝", ["montage"]),
          C("You handle chairs, names, the logistics of belonging without a spotlight.", "⚙", ["credits"])
        ]),
        Q("Airport goodbye. Found family in fluorescent light. The short film ending early.", [
          C("You stay until the last possible second. Attendance is the vow.", "○", ["found"]),
          C("You pack the snack, the charger, the warmth that travels.", "🌿", ["glow"]),
          C("You say the midpoint truth now so the goodbye isn't a cheap ending.", "✂", ["montage"]),
          C("You already checked the gate, the ride home, the lump-in-throat logistics.", "⚙", ["credits"])
        ]),
        Q("Fixing something broken together — shelf, plan, a night that cracked.", [
          C("You keep the crew in the scene. Nobody fixes the important things alone.", "○", ["found"]),
          C("You warm the work until it feels like care, not a chore.", "🌿", ["glow"]),
          C("You reframe the break as the montage that changes the ending.", "↝", ["montage"]),
          C("You bring the tools and the sequence. Quiet credits energy.", "⚙", ["credits"])
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
})(typeof window !== "undefined" ? window : global);
