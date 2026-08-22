/* whenever. local quiz engine — works with no key */
(function (global) {
  "use strict";

  var ARCHETYPES = {
    architect: {
      id: "architect",
      name: "The Midnight Architect",
      short: "builds systems, plans the fun",
      wash: "#2c3344",
      chip: "#8a7a4a"
    },
    anarchist: {
      id: "anarchist",
      name: "The Soft Anarchist",
      short: "gentle chaos, follows the spark",
      wash: "#c45c26",
      chip: "#c45c26"
    },
    satellite: {
      id: "satellite",
      name: "The Loyal Satellite",
      short: "shows up, orbits people they love",
      wash: "#6a7380",
      chip: "#6a7380"
    },
    knife: {
      id: "knife",
      name: "The Warm Knife",
      short: "kind, direct, cuts to the real thing",
      wash: "#9a4318",
      chip: "#c45c26"
    },
    greenhouse: {
      id: "greenhouse",
      name: "The Greenhouse",
      short: "grows people and rooms",
      wash: "#6b7f6a",
      chip: "#6b7f6a"
    },
    twist: {
      id: "twist",
      name: "The Plot Twist",
      short: "reads the room, changes the ending",
      wash: "#8a3a36",
      chip: "#8a3a36"
    },
    engine: {
      id: "engine",
      name: "The Quiet Engine",
      short: "keeps everything running, unnoticed",
      wash: "#4a3a28",
      chip: "#b48a48"
    },
    window: {
      id: "window",
      name: "The Open Window",
      short: "lets air in, leaves room for others",
      wash: "#8a7d68",
      chip: "#8a7d68"
    }
  };

  var RESULT = {
    architect: {
      p1: "You don't wait for the night to organize itself. You build a frame and then let people get sloppy inside it. That's the trick people miss — the plan is how you make room for accident.",
      p2: "Someone always thinks you're controlling. You're just trying not to drop the evening. The fun happens because you already decided where the glasses go.",
      tells: [
        "You make a list and then ignore half of it, on purpose.",
        "You check the lock twice and still host the wildest hour.",
        "People relax around you because the floor is not going to move."
      ]
    },
    anarchist: {
      p1: "You follow the spark like it's a small animal. Not reckless exactly — just unwilling to pretend the schedule is more real than the mood.",
      p2: "Your chaos has manners. You won't smash the night. You'll just open a door nobody put on the itinerary and walk through it first.",
      tells: [
        "You say 'what if we just' and mean it.",
        "Your best nights start as a wrong turn.",
        "People call you unpredictable when they mean they felt something."
      ]
    },
    satellite: {
      p1: "You take orbit like a vow. Not clinging — attending. You know where your people are in a room without looking.",
      p2: "You will rearrange your own weather to keep someone from being alone in theirs. That's not weakness. That's how you love: by showing up before you're asked.",
      tells: [
        "You text 'home?' and wait for the real answer.",
        "You remember the drink they didn't order last time.",
        "You leave last, not because you have nowhere to go."
      ]
    },
    knife: {
      p1: "You say the true thing while it's still warm. Not to win. To stop the room from lying to itself. People flinch, then thank you two days later.",
      p2: "Kind and sharp is a rare pairing. You don't confuse softness with fog. If something is wrong, you'd rather cut it clean than watch it rot polite.",
      tells: [
        "You name the thing everyone is stepping around.",
        "Your compliments are specific enough to sting a little.",
        "You would rather lose the joke than keep the fake peace."
      ]
    },
    greenhouse: {
      p1: "You grow rooms. Temperature, light, the extra chair. People become more themselves after an hour in your weather.",
      p2: "You notice the plant and the person with the same attention. Not saintly — practical. If something is alive, you refuse to let it go thirsty on your watch.",
      tells: [
        "You feed people without making a speech about it.",
        "You remember who went quiet and go sit next to them.",
        "Your places keep souvenirs of everyone who has been kind there."
      ]
    },
    twist: {
      p1: "You read the room the way some people read novels — for the turn. If the ending is cheap, you will rewrite it before dessert.",
      p2: "You are not two-faced. You are two-timed: one eye on what's happening, one on what could still happen. That's why nights change when you arrive.",
      tells: [
        "You wait one extra beat before answering.",
        "You save a secret like a match, not a weapon.",
        "People leave your stories different than they entered them."
      ]
    },
    engine: {
      p1: "You keep the night running and almost never get credited for the electricity. That's fine. You like the hum more than the applause.",
      p2: "While other people are having the feeling, you are making sure there is ice, a ride, a next step. Love, for you, looks like logistics with a pulse.",
      tells: [
        "You already checked the time of the last train.",
        "You fix the thing they mentioned once, three weeks ago.",
        "You disappear into usefulness and call it peace."
      ]
    },
    window: {
      p1: "You let air in. That's rarer than it sounds. You leave a seat empty on purpose. You ask the question that makes the room exhale.",
      p2: "You are not absent. You are spacious. People come to you when they need to remember they can still change their mind.",
      tells: [
        "You crack a window in every conversation.",
        "You don't fill silences that are doing work.",
        "You leave before you overstay, which makes people want you back."
      ]
    }
  };

  var THEMES = {
    chaos: { title: "What kind of trouble are you tonight", sub: "six little dares, then a name" },
    love: { title: "How you actually love", sub: "not the brochure version" },
    night: { title: "The 2am version of you", sub: "when the performing stops" },
    aesthetic: { title: "Your private weather", sub: "the climate you carry" },
    work: { title: "How you hold a day", sub: "the job under the job" },
    friendship: { title: "The kind of friend you are", sub: "in the kitchen, not the group photo" },
    surprise: { title: "A quiz I haven't used on you", sub: "six questions, no warning" },
    food: { title: "What the table knows", sub: "appetite as autobiography" },
    home: { title: "The room you actually are", sub: "keys, light, the last cup" },
    general: { title: "A small inventory of you", sub: "nothing clinical, I promise" }
  };

  var QUESTIONS = [
    { id: "b01", themes: ["home", "surprise"], text: "It's Saturday. No plans. The light is doing that late-morning thing.",
      choices: [
        { t: "You make a three-column list and ignore half of it on purpose.", e: "✎", tags: ["architect"] },
        { t: "You text the group: I'm bored and slightly dangerous.", e: "✦", tags: ["anarchist"] },
        { t: "You wait. Someone will need you. They always do.", e: "○", tags: ["satellite"] },
        { t: "You open a window and see who the day wants to be.", e: "◇", tags: ["window"] }
      ] },
    { id: "b02", themes: ["friendship", "love"], text: "A friend texts: I did something stupid.",
      choices: [
        { t: "You ask what, then say the true part out loud.", e: "✂", tags: ["knife"] },
        { t: "You come over with food and don't make them perform the story.", e: "🌿", tags: ["greenhouse"] },
        { t: "You already have a way to make it less stupid by midnight.", e: "⚙", tags: ["engine"] },
        { t: "You laugh first so they can breathe, then rewrite the ending.", e: "↝", tags: ["twist"] }
      ] },
    { id: "b03", themes: ["night", "home"], text: "The playlist dies in a quiet kitchen.",
      choices: [
        { t: "You put on the album that has a plan.", e: "♪", tags: ["architect"] },
        { t: "You leave it dead. The quiet is doing something.", e: "◇", tags: ["window"] },
        { t: "You start singing badly on purpose.", e: "✦", tags: ["anarchist"] },
        { t: "You ask what they need to hear. You mean it.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b04", themes: ["friendship", "chaos"], text: "You walk into a party you weren't sure about.",
      choices: [
        { t: "You find the person who looks stranded.", e: "○", tags: ["satellite", "greenhouse"] },
        { t: "You pick a fight with the lighting and move a lamp.", e: "✎", tags: ["architect", "greenhouse"] },
        { t: "You stay near the door. Air matters.", e: "◇", tags: ["window"] },
        { t: "You say the first true thing you notice.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b05", themes: ["surprise", "aesthetic"], text: "Someone leaves a book on your table with no note.",
      choices: [
        { t: "You read the last page first. Of course you do.", e: "↝", tags: ["twist"] },
        { t: "You leave it closed until the right hour.", e: "◇", tags: ["window"] },
        { t: "You start a system: bookmark, pencil, three nights.", e: "✎", tags: ["architect"] },
        { t: "You text them a single line from page twelve.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b06", themes: ["night", "chaos"], text: "The last train is in nine minutes. You're two songs from done.",
      choices: [
        { t: "You already timed this. You leave on the bridge.", e: "⚙", tags: ["engine"] },
        { t: "You miss it. The night just got interesting.", e: "✦", tags: ["anarchist"] },
        { t: "You take whoever else needs the train.", e: "○", tags: ["satellite"] },
        { t: "You name the choice out loud so nobody pretends it isn't one.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b07", themes: ["home", "surprise"], text: "You find a key that isn't yours.",
      choices: [
        { t: "You label it and wait for the story to arrive.", e: "✎", tags: ["architect"] },
        { t: "You try it in the door you shouldn't.", e: "✦", tags: ["anarchist", "twist"] },
        { t: "You ask around until someone sleeps better.", e: "🌿", tags: ["greenhouse"] },
        { t: "You put it in the bowl and leave the mystery some air.", e: "◇", tags: ["window"] }
      ] },
    { id: "b08", themes: ["food", "friendship"], text: "Dinner is running late and nobody is talking about it.",
      choices: [
        { t: "You put bread down and change the subject to something real.", e: "🌿", tags: ["greenhouse"] },
        { t: "You say: we're hungry and we're pretending. Then you fix it.", e: "✂", tags: ["knife"] },
        { t: "You're already in the kitchen, quietly making a second plan.", e: "⚙", tags: ["engine"] },
        { t: "You turn the delay into the point of the night.", e: "↝", tags: ["twist"] }
      ] },
    { id: "b09", themes: ["night", "home"], text: "Your phone dies at 2:11. The room is still awake.",
      choices: [
        { t: "Good. Now it's just the people who are actually here.", e: "◇", tags: ["window"] },
        { t: "You keep the conversation from falling off a cliff.", e: "⚙", tags: ["engine"] },
        { t: "You tell the story you don't tell when the phone is alive.", e: "✦", tags: ["anarchist", "knife"] },
        { t: "You check on the person who went quiet.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b10", themes: ["love", "aesthetic"], text: "A stranger compliments the exact thing you were hiding.",
      choices: [
        { t: "You thank them like a door just opened.", e: "◇", tags: ["window"] },
        { t: "You file it. You'll use it later, carefully.", e: "✎", tags: ["architect"] },
        { t: "You give it back, sharper and kinder.", e: "✂", tags: ["knife"] },
        { t: "You change the subject so they don't see you blush.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b11", themes: ["work", "home"], text: "You have one free hour between obligations.",
      choices: [
        { t: "You do the small ugly task so the rest of the day can breathe.", e: "⚙", tags: ["engine"] },
        { t: "You lie on the floor and refuse to be useful.", e: "✦", tags: ["anarchist"] },
        { t: "You sketch the evening like it's a building.", e: "✎", tags: ["architect"] },
        { t: "You send the text you've been carrying.", e: "○", tags: ["satellite", "knife"] }
      ] },
    { id: "b12", themes: ["friendship", "chaos"], text: "The group chat goes silent after your joke.",
      choices: [
        { t: "You let it sit. If it's dead, it's dead.", e: "◇", tags: ["window"] },
        { t: "You send the follow-up that saves everyone.", e: "↝", tags: ["twist"] },
        { t: "You own it in one line. No performance.", e: "✂", tags: ["knife"] },
        { t: "You privately check on the person it might have hit.", e: "🌿", tags: ["greenhouse"] }
      ] },
    { id: "b13", themes: ["food", "home"], text: "You open the fridge like it owes you an answer.",
      choices: [
        { t: "You build a plate from leftovers with actual composition.", e: "✎", tags: ["architect"] },
        { t: "You eat the thing standing up, in the light of the fridge.", e: "✦", tags: ["anarchist"] },
        { t: "You cook for a future version of the house.", e: "🌿", tags: ["greenhouse"] },
        { t: "You close it. Hunger can wait for better company.", e: "◇", tags: ["window"] }
      ] },
    { id: "b14", themes: ["love", "friendship"], text: "Someone you love is being polite about something that's wrong.",
      choices: [
        { t: "You name it. Kindly. Immediately.", e: "✂", tags: ["knife"] },
        { t: "You change the room until the mood has somewhere else to go.", e: "🌿", tags: ["greenhouse"] },
        { t: "You let it sit, then change the ending later.", e: "↝", tags: ["twist"] },
        { t: "You fix the thing they didn't ask you to fix.", e: "⚙", tags: ["engine"] }
      ] },
    { id: "b15", themes: ["home", "aesthetic"], text: "You inherit a houseplant that's half-dead.",
      choices: [
        { t: "You research, repot, and give it a schedule.", e: "✎", tags: ["architect", "greenhouse"] },
        { t: "You talk to it like a roommate with bad habits.", e: "✦", tags: ["anarchist"] },
        { t: "You put it in the best light and leave it some dignity.", e: "◇", tags: ["window"] },
        { t: "You ask who loved it first.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b16", themes: ["chaos", "friendship"], text: "The plan falls apart at 6pm.",
      choices: [
        { t: "You already had a second plan in your pocket.", e: "⚙", tags: ["engine", "architect"] },
        { t: "Good. The first plan was getting too proud.", e: "✦", tags: ["anarchist"] },
        { t: "You gather whoever's left and make a smaller, better night.", e: "🌿", tags: ["greenhouse"] },
        { t: "You tell the truth about why it fell. Then you move.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b17", themes: ["love", "surprise"], text: "You see your name in someone else's handwriting.",
      choices: [
        { t: "You keep the paper. Obviously.", e: "○", tags: ["satellite"] },
        { t: "You study the letters like a floor plan.", e: "✎", tags: ["architect"] },
        { t: "You write them back something they won't expect.", e: "↝", tags: ["twist"] },
        { t: "You feel it, then put it down before it owns the day.", e: "◇", tags: ["window"] }
      ] },
    { id: "b18", themes: ["aesthetic", "night"], text: "A storm starts during a walk you wanted.",
      choices: [
        { t: "You stay out. Weather is information.", e: "✦", tags: ["anarchist"] },
        { t: "You duck in somewhere and make the storm the date.", e: "↝", tags: ["twist"] },
        { t: "You get everyone under something dry.", e: "⚙", tags: ["engine"] },
        { t: "You watch it from a doorway and let it finish its sentence.", e: "◇", tags: ["window"] }
      ] },
    { id: "b19", themes: ["food", "friendship"], text: "You're asked to pick the restaurant.",
      choices: [
        { t: "You pick the place with a corner table and a plan B.", e: "✎", tags: ["architect"] },
        { t: "You pick the place that will slightly scandalize the group.", e: "✦", tags: ["anarchist"] },
        { t: "You pick for the pickiest person and don't announce it.", e: "○", tags: ["satellite", "engine"] },
        { t: "You ask what they actually want, then hold them to it.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b20", themes: ["work", "night"], text: "The email arrives at 11:58pm.",
      choices: [
        { t: "You answer it clean, then close the machine.", e: "⚙", tags: ["engine"] },
        { t: "You write the reply and schedule it for 9:12. Control the weather.", e: "✎", tags: ["architect"] },
        { t: "You leave it. Night is not their lobby.", e: "◇", tags: ["window"] },
        { t: "You send one honest sentence they didn't ask for.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b21", themes: ["aesthetic", "home"], text: "You walk past a window with your own life in it.",
      choices: [
        { t: "You notice what you'd restage.", e: "✎", tags: ["architect"] },
        { t: "You feel briefly like a guest. Then you go in anyway.", e: "◇", tags: ["window"] },
        { t: "You look for the person in the room who needs you.", e: "○", tags: ["satellite"] },
        { t: "You change one thing as soon as you cross the door.", e: "↝", tags: ["twist"] }
      ] },
    { id: "b22", themes: ["love", "friendship"], text: "A secret is offered to you like a drink.",
      choices: [
        { t: "You take it and never display it.", e: "○", tags: ["satellite"] },
        { t: "You ask why they're handing it over tonight.", e: "✂", tags: ["knife"] },
        { t: "You hold it until it becomes useful, not spicy.", e: "↝", tags: ["twist"] },
        { t: "You make the room safer so they didn't have to whisper.", e: "🌿", tags: ["greenhouse"] }
      ] },
    { id: "b23", themes: ["home", "aesthetic"], text: "The first warm day. The window is stuck.",
      choices: [
        { t: "You fetch the tool. Of course there's a tool.", e: "⚙", tags: ["engine"] },
        { t: "You shove it with your whole body and laugh.", e: "✦", tags: ["anarchist"] },
        { t: "You open a different window and call that enough.", e: "◇", tags: ["window"] },
        { t: "You make the room work around the stuck thing.", e: "🌿", tags: ["greenhouse"] }
      ] },
    { id: "b24", themes: ["friendship", "night"], text: "You have to leave a party that just got good.",
      choices: [
        { t: "You say goodbye like a complete sentence.", e: "✂", tags: ["knife"] },
        { t: "You vanish. Myth is a kind of manners.", e: "↝", tags: ["twist"] },
        { t: "You make sure your person has a ride first.", e: "⚙", tags: ["engine", "satellite"] },
        { t: "You linger in the doorway one extra minute.", e: "◇", tags: ["window"] }
      ] },
    { id: "b25", themes: ["love", "work"], text: "Someone asks what you want. Really.",
      choices: [
        { t: "You tell them, unadorned.", e: "✂", tags: ["knife"] },
        { t: "You want them to have a good night. You say that, and it's true.", e: "○", tags: ["satellite"] },
        { t: "You want a plan that still has air in it.", e: "✎", tags: ["architect", "window"] },
        { t: "You want the thing that would surprise even you.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b26", themes: ["food", "home"], text: "The leftovers look better than the original dinner.",
      choices: [
        { t: "Of course. You designed them to.", e: "✎", tags: ["architect"] },
        { t: "Midnight food is a different country. You emigrate.", e: "✦", tags: ["anarchist"] },
        { t: "You plate it for someone who will wake up hungry.", e: "🌿", tags: ["greenhouse"] },
        { t: "You eat standing, then wash the dish so morning is clean.", e: "⚙", tags: ["engine"] }
      ] },
    { id: "b27", themes: ["love", "night"], text: "You find an old voicemail you never deleted.",
      choices: [
        { t: "You listen once. Then you decide if it still gets to stay.", e: "✂", tags: ["knife"] },
        { t: "You keep it. Archives are a love language.", e: "○", tags: ["satellite"] },
        { t: "You listen for the version of you who saved it.", e: "↝", tags: ["twist"] },
        { t: "You let it play and then open a window.", e: "◇", tags: ["window"] }
      ] },
    { id: "b28", themes: ["work", "friendship"], text: "The meeting could have been a walk.",
      choices: [
        { t: "You turn the next one into a walk.", e: "↝", tags: ["twist"] },
        { t: "You take notes anyway. Someone has to catch the falling pieces.", e: "⚙", tags: ["engine"] },
        { t: "You say so, lightly, while it's still true.", e: "✂", tags: ["knife"] },
        { t: "You make the room less fluorescent with a question.", e: "🌿", tags: ["greenhouse"] }
      ] },
    { id: "b29", themes: ["home", "night"], text: "You're the first one awake in a house full of people.",
      choices: [
        { t: "Coffee for a crowd that doesn't know it yet.", e: "🌿", tags: ["greenhouse"] },
        { t: "You take the quiet like a private room.", e: "◇", tags: ["window"] },
        { t: "You check the doors, the milk, the day.", e: "⚙", tags: ["engine"] },
        { t: "You start something slightly too ambitious for breakfast.", e: "✎", tags: ["architect"] }
      ] },
    { id: "b30", themes: ["aesthetic", "love"], text: "A song from a year you'd rather not revisit.",
      choices: [
        { t: "You let it finish. Cowardice would be skipping.", e: "✂", tags: ["knife"] },
        { t: "You skip. The present is not a museum.", e: "◇", tags: ["window"] },
        { t: "You turn it into a joke so nobody sees the flinch.", e: "↝", tags: ["twist"] },
        { t: "You send it to the one person who was there.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b31", themes: ["home", "aesthetic"], text: "The flowers are dying on purpose.",
      choices: [
        { t: "You cut the stems and give them one more week.", e: "🌿", tags: ["greenhouse"] },
        { t: "You throw them out. Sentiment is not a vase.", e: "✂", tags: ["knife"] },
        { t: "You leave them. Decay has a color you like.", e: "✦", tags: ["anarchist", "window"] },
        { t: "You replace them before anyone else notices.", e: "⚙", tags: ["engine"] }
      ] },
    { id: "b32", themes: ["work", "friendship"], text: "You get assigned the seat by the door.",
      choices: [
        { t: "Perfect. Exits are a love language.", e: "◇", tags: ["window"] },
        { t: "You can see everyone. That's the job.", e: "○", tags: ["satellite"] },
        { t: "You move a chair two inches and the room improves.", e: "✎", tags: ["architect"] },
        { t: "You use it. First to leave when the air goes stale.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b33", themes: ["friendship", "chaos"], text: "A rumor reaches you first.",
      choices: [
        { t: "You kill it or confirm it. No half-life.", e: "✂", tags: ["knife"] },
        { t: "You hold it until you know who it would hurt.", e: "🌿", tags: ["greenhouse"] },
        { t: "You already knew. You've been watching the plot.", e: "↝", tags: ["twist"] },
        { t: "You don't pass it. You're not a hallway.", e: "⚙", tags: ["engine"] }
      ] },
    { id: "b34", themes: ["food", "home"], text: "The soup needs something and you don't know what.",
      choices: [
        { t: "Acid. You almost always mean acid.", e: "✂", tags: ["knife"] },
        { t: "You taste, wait, taste again. Patience is a spice.", e: "◇", tags: ["window"] },
        { t: "You call the person who would know.", e: "○", tags: ["satellite"] },
        { t: "You add the wrong thing and invent a new soup.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b35", themes: ["friendship", "love"], text: "You have to introduce two people who will change each other.",
      choices: [
        { t: "You do it and step back. You're not in the scene.", e: "◇", tags: ["window"] },
        { t: "You stage the lighting, the timing, the excuse.", e: "✎", tags: ["architect", "twist"] },
        { t: "You stay close enough to catch whoever wobbles.", e: "○", tags: ["satellite"] },
        { t: "You tell them both, in advance, why you're doing it.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b36", themes: ["night", "home"], text: "The lights flicker and stay off for a minute.",
      choices: [
        { t: "You find the candles before anyone jokes.", e: "⚙", tags: ["engine"] },
        { t: "You enjoy the blackout like it was invited.", e: "✦", tags: ["anarchist"] },
        { t: "You talk more softly. The dark is a room too.", e: "◇", tags: ["window"] },
        { t: "You sit nearer to the person who hates the dark.", e: "○", tags: ["satellite"] }
      ] },
    { id: "b37", themes: ["home", "love"], text: "You're asked to keep a key for the summer.",
      choices: [
        { t: "You put it on the ring like it always lived there.", e: "○", tags: ["satellite"] },
        { t: "You water what they forgot and don't mention it.", e: "🌿", tags: ["greenhouse", "engine"] },
        { t: "You treat the place like a secret you're designing.", e: "✎", tags: ["architect"] },
        { t: "You use it once at an odd hour, just to feel the privilege.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b38", themes: ["food", "friendship"], text: "The dessert menu arrives and everyone says they're fine.",
      choices: [
        { t: "You order one to share so nobody has to want it alone.", e: "🌿", tags: ["greenhouse"] },
        { t: "You order the one you want. Fine is a lie.", e: "✂", tags: ["knife"] },
        { t: "You already asked the waiter to delay it. Timing.", e: "✎", tags: ["architect"] },
        { t: "You suggest walking for something messier instead.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b39", themes: ["surprise", "aesthetic"], text: "You find a photograph of a room you don't remember.",
      choices: [
        { t: "You hunt the furniture like evidence.", e: "✎", tags: ["architect"] },
        { t: "You invent the night that belongs to it.", e: "↝", tags: ["twist"] },
        { t: "You ask the oldest person in your life.", e: "○", tags: ["satellite"] },
        { t: "You keep it face-down. Some rooms can stay lost.", e: "◇", tags: ["window"] }
      ] },
    { id: "b40", themes: ["work", "home"], text: "Monday tries to start without you.",
      choices: [
        { t: "You let it. You'll enter when the air is yours.", e: "◇", tags: ["window"] },
        { t: "You're already three tasks in. The day can catch up.", e: "⚙", tags: ["engine"] },
        { t: "You write the week on paper like a spell.", e: "✎", tags: ["architect"] },
        { t: "You do one unprofessional thing first, to stay human.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b41", themes: ["love", "surprise"], text: "A letter arrives with no return address.",
      choices: [
        { t: "You read it twice, then hide it somewhere kind.", e: "○", tags: ["satellite"] },
        { t: "You look for the tell in the sentences.", e: "↝", tags: ["twist"] },
        { t: "You want a name. Mystery without a person bores you.", e: "✂", tags: ["knife"] },
        { t: "You leave it on the table for a day. Let it ripen.", e: "◇", tags: ["window"] }
      ] },
    { id: "b42", themes: ["home", "friendship"], text: "The couch has a dent that isn't yours.",
      choices: [
        { t: "You like proof that people stay.", e: "🌿", tags: ["greenhouse"] },
        { t: "You fluff it. The room should look ready.", e: "⚙", tags: ["engine"] },
        { t: "You sit in it and steal their shape for a minute.", e: "○", tags: ["satellite"] },
        { t: "You leave it. Evidence is a kind of decorating.", e: "✦", tags: ["anarchist"] }
      ] },
    { id: "b43", themes: ["home", "chaos"], text: "You have four minutes before they arrive.",
      choices: [
        { t: "Lights, music, the extra glass. Sequence.", e: "✎", tags: ["architect"] },
        { t: "You hide the worst thing and call that hospitality.", e: "⚙", tags: ["engine"] },
        { t: "You do nothing. They can meet the room as it is.", e: "◇", tags: ["window"] },
        { t: "You start a mess that looks like a better story.", e: "↝", tags: ["twist"] }
      ] },
    { id: "b44", themes: ["love", "friendship"], text: "Someone cries in the next room and the door is open.",
      choices: [
        { t: "You go in. Sitting down is a complete sentence.", e: "○", tags: ["satellite"] },
        { t: "You bring water and don't ask them to narrate.", e: "🌿", tags: ["greenhouse"] },
        { t: "You wait at the threshold until they look up.", e: "◇", tags: ["window"] },
        { t: "You go in and say the kind thing that is also true.", e: "✂", tags: ["knife"] }
      ] },
    { id: "b45", themes: ["chaos", "night"], text: "The map is wrong and the night is good.",
      choices: [
        { t: "You throw the map. The night just got a promotion.", e: "✦", tags: ["anarchist"] },
        { t: "You make a new map from landmarks and snacks.", e: "✎", tags: ["architect"] },
        { t: "You keep the group together first. Romance second.", e: "⚙", tags: ["engine"] },
        { t: "You notice who is enjoying being lost, and stay near them.", e: "○", tags: ["satellite"] }
      ] }
  ];


  var TOPIC_TEMPLATES = [
    { text: "It's late. {topic} is the only thing still on the table.",
      choices: [
        { t: "You make a frame for it, then let people get sloppy inside.", e: "✎", tags: ["spine"] },
        { t: "You follow it like a spark. The clock can wait.", e: "✦", tags: ["spark"] },
        { t: "You look around to see who else is still holding it.", e: "○", tags: ["keeper"] },
        { t: "You name what it actually is, before it gets prettier.", e: "✂", tags: ["blade"] }
      ] },
    { text: "Someone you love has a strong opinion about {topic}.",
      choices: [
        { t: "You let them finish, then crack a window in the argument.", e: "◇", tags: ["spark"] },
        { t: "You change the temperature until the opinion can sit down.", e: "🌿", tags: ["keeper"] },
        { t: "You already see the turn. You wait for it.", e: "↝", tags: ["blade"] },
        { t: "You fix the part they didn't realize was the problem.", e: "⚙", tags: ["spine"] }
      ] },
    { text: "{Topic} goes wrong in a small, fixable way.",
      choices: [
        { t: "You already had the spare. Of course you did.", e: "⚙", tags: ["keeper"] },
        { t: "Good. Perfect was getting on your nerves.", e: "✦", tags: ["spark"] },
        { t: "You tell the truth about the dent, then keep going.", e: "✂", tags: ["blade"] },
        { t: "You sketch a better version before anyone panics.", e: "✎", tags: ["spine"] }
      ] },
    { text: "You're asked to explain {topic} in one sentence, at a table that is listening.",
      choices: [
        { t: "You give the true sentence, unadorned.", e: "✂", tags: ["blade"] },
        { t: "You make the room safer first, then say it.", e: "🌿", tags: ["spine"] },
        { t: "You tell the version that changes what happens next.", e: "↝", tags: ["spark"] },
        { t: "You leave a little air so someone else can finish it.", e: "◇", tags: ["keeper"] }
      ] },
    { text: "The group chat goes quiet after you mention {topic}.",
      choices: [
        { t: "You let it sit. If it's dead, it's dead.", e: "◇", tags: ["spark"] },
        { t: "You send the follow-up that saves everyone.", e: "↝", tags: ["spine"] },
        { t: "You privately check on the person it might have hit.", e: "○", tags: ["keeper"] },
        { t: "You own it in one line. No performance.", e: "✂", tags: ["blade"] }
      ] },
    { text: "You have four minutes with {topic} before they arrive.",
      choices: [
        { t: "Lights, sequence, the extra glass. You stage it.", e: "✎", tags: ["spine"] },
        { t: "You hide the worst part and call that hospitality.", e: "⚙", tags: ["keeper"] },
        { t: "You do nothing. They can meet it as it is.", e: "◇", tags: ["blade"] },
        { t: "You start a mess that looks like a better story.", e: "↝", tags: ["spark"] }
      ] },
    { text: "A stranger compliments the exact way you handle {topic}.",
      choices: [
        { t: "You thank them like a door just opened.", e: "◇", tags: ["spark"] },
        { t: "You file it. You'll use it later, carefully.", e: "✎", tags: ["spine"] },
        { t: "You give it back, sharper and kinder.", e: "✂", tags: ["blade"] },
        { t: "You change the subject so they don't see you blush.", e: "○", tags: ["keeper"] }
      ] },
    { text: "{Topic} is the reason the night could still turn.",
      choices: [
        { t: "You stay near it. Gravity is a kind of loyalty.", e: "○", tags: ["keeper"] },
        { t: "You decide what it lights. You don't start fires for sport.", e: "↝", tags: ["blade"] },
        { t: "You keep the ice, the ride, the next step ready.", e: "⚙", tags: ["spine"] },
        { t: "You walk toward it first so other people can follow.", e: "✦", tags: ["spark"] }
      ] },
    { text: "You find a note about {topic} in someone else's handwriting.",
      choices: [
        { t: "You keep the paper. Obviously.", e: "○", tags: ["keeper"] },
        { t: "You study it like a floor plan.", e: "✎", tags: ["spine"] },
        { t: "You write back something they won't expect.", e: "↝", tags: ["spark"] },
        { t: "You feel it, then put it down before it owns the day.", e: "◇", tags: ["blade"] }
      ] },
    { text: "Dinner is late and nobody will say {topic} is why.",
      choices: [
        { t: "You put bread down and change the subject to something real.", e: "🌿", tags: ["keeper"] },
        { t: "You say it out loud so the room can stop pretending.", e: "✂", tags: ["blade"] },
        { t: "You're already in the kitchen, quietly making a second plan.", e: "⚙", tags: ["spine"] },
        { t: "You turn the delay into the point of the night.", e: "↝", tags: ["spark"] }
      ] },
    { text: "It's Saturday. {Topic} has no appointment and neither do you.",
      choices: [
        { t: "You make a three-column list and ignore half of it on purpose.", e: "✎", tags: ["spine"] },
        { t: "You text: I'm bored and slightly dangerous.", e: "✦", tags: ["spark"] },
        { t: "You wait. Someone will need you, and this, together.", e: "○", tags: ["keeper"] },
        { t: "You open a window and see who the day wants to be.", e: "◇", tags: ["blade"] }
      ] },
    { text: "The last train is in nine minutes. {Topic} is two songs from done.",
      choices: [
        { t: "You already timed this. You leave on the bridge.", e: "⚙", tags: ["spine"] },
        { t: "You miss it. The night just got interesting.", e: "✦", tags: ["spark"] },
        { t: "You take whoever else still needs a ride.", e: "○", tags: ["keeper"] },
        { t: "You name the choice so nobody pretends it isn't one.", e: "✂", tags: ["blade"] }
      ] },
    { text: "Someone cries in the next room. {Topic} is still open on the table.",
      choices: [
        { t: "You go in. Sitting down is a complete sentence.", e: "○", tags: ["keeper"] },
        { t: "You bring water and don't ask them to narrate.", e: "🌿", tags: ["spine"] },
        { t: "You wait at the threshold until they look up.", e: "◇", tags: ["spark"] },
        { t: "You go in and say the kind thing that is also true.", e: "✂", tags: ["blade"] }
      ] },
    { text: "You inherit {topic} the way some people inherit a houseplant.",
      choices: [
        { t: "You research, repot, and give it a schedule.", e: "✎", tags: ["spine"] },
        { t: "You talk to it like a roommate with bad habits.", e: "✦", tags: ["spark"] },
        { t: "You put it in the best light and leave it some dignity.", e: "◇", tags: ["blade"] },
        { t: "You ask who loved it first.", e: "○", tags: ["keeper"] }
      ] },
    { text: "A rumor about {topic} reaches you first.",
      choices: [
        { t: "You kill it or confirm it. No half-life.", e: "✂", tags: ["blade"] },
        { t: "You hold it until you know who it would hurt.", e: "🌿", tags: ["keeper"] },
        { t: "You already knew. You've been watching the plot.", e: "↝", tags: ["spark"] },
        { t: "You don't pass it. You're not a hallway.", e: "⚙", tags: ["spine"] }
      ] },
    { text: "The plan for {topic} falls apart at 6pm.",
      choices: [
        { t: "You already had a second plan in your pocket.", e: "⚙", tags: ["spine"] },
        { t: "Good. The first plan was getting too proud.", e: "✦", tags: ["spark"] },
        { t: "You gather whoever's left and make a smaller, better night.", e: "🌿", tags: ["keeper"] },
        { t: "You tell the truth about why it fell. Then you move.", e: "✂", tags: ["blade"] }
      ] },
    { text: "You're the first one awake. {Topic} is still in the kitchen.",
      choices: [
        { t: "Coffee for a crowd that doesn't know it yet.", e: "🌿", tags: ["keeper"] },
        { t: "You take the quiet like a private room.", e: "◇", tags: ["blade"] },
        { t: "You check the doors, the milk, the day.", e: "⚙", tags: ["spine"] },
        { t: "You start something slightly too ambitious for breakfast.", e: "✎", tags: ["spark"] }
      ] },
    { text: "Someone asks what you want from {topic}. Really.",
      choices: [
        { t: "You tell them, unadorned.", e: "✂", tags: ["blade"] },
        { t: "You want them to have a good night. You say that, and it's true.", e: "○", tags: ["keeper"] },
        { t: "You want a plan that still has air in it.", e: "✎", tags: ["spine"] },
        { t: "You want the thing that would surprise even you.", e: "✦", tags: ["spark"] }
      ] },
    { text: "The lights flicker. For a minute it's just you and {topic}.",
      choices: [
        { t: "You find the candles before anyone jokes.", e: "⚙", tags: ["spine"] },
        { t: "You enjoy the blackout like it was invited.", e: "✦", tags: ["spark"] },
        { t: "You talk more softly. The dark is a room too.", e: "◇", tags: ["blade"] },
        { t: "You sit nearer to the person who hates the dark.", e: "○", tags: ["keeper"] }
      ] },
    { text: "A letter arrives with no return address. It is about {topic}.",
      choices: [
        { t: "You read it twice, then hide it somewhere kind.", e: "○", tags: ["keeper"] },
        { t: "You look for the tell in the sentences.", e: "↝", tags: ["spark"] },
        { t: "You want a name. Mystery without a person bores you.", e: "✂", tags: ["blade"] },
        { t: "You leave it on the table for a day. Let it ripen.", e: "◇", tags: ["spine"] }
      ] },
    { text: "You walk past a window and {topic} is inside it, looking like your life.",
      choices: [
        { t: "You notice what you'd restage.", e: "✎", tags: ["spine"] },
        { t: "You feel briefly like a guest. Then you go in anyway.", e: "◇", tags: ["spark"] },
        { t: "You look for the person in the room who needs you.", e: "○", tags: ["keeper"] },
        { t: "You change one thing as soon as you cross the door.", e: "↝", tags: ["blade"] }
      ] },
    { text: "The map is wrong. {Topic} is still good.",
      choices: [
        { t: "You throw the map. The night just got a promotion.", e: "✦", tags: ["spark"] },
        { t: "You make a new map from landmarks and snacks.", e: "✎", tags: ["spine"] },
        { t: "You keep the group together first. Romance second.", e: "⚙", tags: ["blade"] },
        { t: "You notice who is enjoying being lost, and stay near them.", e: "○", tags: ["keeper"] }
      ] }
  ];

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function hashSeed(s) {
    if (typeof s === "number" && !isNaN(s)) return s >>> 0;
    s = String(s == null ? Date.now() : s);
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function normalizeTheme(theme) {
    theme = String(theme || "surprise").toLowerCase();
    if (THEMES[theme]) return theme;
    return "general";
  }

  function pickQuestions(theme, rng, count) {
    count = count || 6;
    var themed = QUESTIONS.filter(function (q) {
      return q.themes.indexOf(theme) !== -1;
    });
    var rest = QUESTIONS.filter(function (q) {
      return q.themes.indexOf(theme) === -1;
    });
    var pool = shuffle(themed, rng).concat(shuffle(rest, rng));
    var seen = {};
    var out = [];
    for (var i = 0; i < pool.length && out.length < count; i++) {
      if (seen[pool[i].id]) continue;
      seen[pool[i].id] = true;
      out.push(formatQuestion(pool[i], rng));
    }
    return out;
  }

  function formatQuestion(q, rng) {
    var choices = shuffle(q.choices, rng).map(function (c, i) {
      return {
        id: q.id + "-" + i,
        text: c.t,
        emoji: c.e,
        tags: c.tags.slice()
      };
    });
    return { id: q.id, text: q.text, choices: choices };
  }

  function generateQuiz(theme, seed) {
    theme = normalizeTheme(theme);
    var seedNum = hashSeed(seed == null ? (theme + ":" + Date.now()) : seed);
    var rng = mulberry32(seedNum);
    var meta = THEMES[theme] || THEMES.general;
    var id = "gen-" + theme + "-" + seedNum.toString(36);
    return {
      id: id,
      title: meta.title,
      subtitle: meta.sub,
      cover: null,
      theme: theme,
      generated: true,
      seed: seedNum,
      questions: pickQuestions(theme, rng, 6),
      results: RESULT
    };
  }

  function isGenericTopic(topic) {
    if (!topic) return true;
    var t = String(topic).toLowerCase().replace(/[?!.,]+/g, " ").replace(/\s+/g, " ").trim();
    return /^(surprise( me)?|random|anything|whatever|pick( one)?|a quiz|quiz|one|something|new one|another( one)?|again|me)$/.test(t);
  }

  function stripTopic(ask) {
    var s = String(ask || "").trim().replace(/[?!.,]+$/g, "").trim();
    var patterns = [
      /^(hi|hey|hello|yo|heya|hiya)[,!.]?\s+/i,
      /^(please\s+)/i,
      /^(can you|could you|would you|will you)\s+/i,
      /^(i want|i need|i'd like|i would like)\s+(a\s+|an\s+|the\s+)?/i,
      /^(give me|give us|gimme)\s+/i,
      /^(make me|make us)\s+/i,
      /^(make one on|make one about|make a|make one|make)\s+/i,
      /^(write|create|build|generate|start)\s+(me\s+|us\s+|a\s+|an\s+|the\s+)?/i,
      /^(a\s+|an\s+|the\s+)?(new\s+)?quiz\s+(about|on|for|regarding|re)\s+/i,
      /^(a\s+|an\s+|the\s+)?(new\s+)?quiz\s+/i,
      /^(one\s+on|one\s+about|something\s+about|something\s+on)\s+/i,
      /^(about|on|regarding|re)\s+/i,
      /\s+please$/i,
      /\s+for me$/i,
      /\s+please\s+for me$/i
    ];
    var prev, guard = 0;
    do {
      prev = s;
      for (var i = 0; i < patterns.length; i++) {
        s = s.replace(patterns[i], "").trim();
      }
      s = s.replace(/[?!.,]+$/g, "").trim();
    } while (s !== prev && ++guard < 8);
    return s;
  }

  function fillTopicSlots(str, topic) {
    var pretty = String(topic || "this").trim();
    if (!pretty) pretty = "this";
    var Topic = pretty.charAt(0).toUpperCase() + pretty.slice(1);
    return String(str).replace(/\{Topic\}/g, Topic).replace(/\{topic\}/g, pretty);
  }

  function displayTopic(topic) {
    var t = String(topic || "").trim();
    if (!t) return "";
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function titleFromTopic(topic, rng) {
    var t = String(topic || "").trim();
    var T = displayTopic(t);
    var words = t.split(/\s+/).filter(Boolean);
    var options = words.length >= 4 ? [
      "You, but with " + t,
      T,
      T + ", written down"
    ] : [
      "You, but with " + t,
      "The " + t + " version of you",
      T + ", as autobiography",
      "What " + t + " knows"
    ];
    return options[Math.floor((rng ? rng() : Math.random()) * options.length)];
  }

  function themeFromAsk(ask, topic) {
    var hay = String(ask || "") + " " + String(topic || "");
    for (var i = 0; i < INTENT_MAP.length; i++) {
      var item = INTENT_MAP[i];
      if (item.theme === "AGAIN" || item.theme === "GREET" || item.theme === "THANKS") continue;
      if (item.re.test(hay)) return item.theme;
    }
    return "general";
  }

  function materializeTemplate(tpl, topic, rng, idx) {
    var id = "t" + String(idx + 1).padStart(2, "0") + "-" + hashSeed(tpl.text + "|" + topic).toString(36);
    return formatQuestion({
      id: id,
      text: fillTopicSlots(tpl.text, topic),
      choices: tpl.choices
    }, rng);
  }

  function isShortNounTopic(topic) {
    var t = String(topic || "").trim();
    if (!t || /\s/.test(t)) return false;
    if (/^(me|you|i|we|us|them|it|this|that|my|our|your|a|an|the)$/i.test(t)) return false;
    return true;
  }

  function phraseForNames(topic) {
    var t = String(topic || "").trim();
    if (!t) return "this";
    if (isShortNounTopic(t)) return t.charAt(0).toUpperCase() + t.slice(1);
    var m = t.match(/^(?:my|our)\s+(.+)$/i);
    if (m) return "your " + m[1];
    m = t.match(/^how\s+i\s+am\s+(?:at|in|on|around|during|about|with)\s+(.+)$/i);
    if (m) return m[1];
    return t;
  }

  function topicResultNames(topic) {
    var nt = phraseForNames(topic);
    var blade;
    if (isShortNounTopic(String(topic || "").trim())) {
      blade = "The honest " + nt;
    } else if (/^your\s+/i.test(nt)) {
      blade = "The honest one in " + nt;
    } else {
      blade = "The honest " + nt;
    }
    return {
      spark: "The spark in " + nt,
      keeper: "The one who keeps " + nt,
      spine: "The spine of " + nt,
      blade: blade
    };
  }

  function buildTopicResults(topic) {
    var pretty = String(topic || "this").trim() || "this";
    var names = topicResultNames(pretty);
    var t = pretty;
    var T = displayTopic(t);
    return {
      spark: {
        name: names.spark,
        short: "follows the heat",
        wash: "#c45c26",
        image: "img/result-anarchist.png",
        p1: "You follow the heat in " + t + ". Not reckless — just unwilling to pretend the itinerary is more real than the mood.",
        p2: "Your chaos has manners. You open a door that wasn't on the list and walk through it first. That's how " + t + " actually moves.",
        tells: [
          "You say \"what if we just\" about " + t + " and mean it.",
          "Your best nights start as a wrong turn.",
          "People call you unpredictable when they mean they felt something."
        ]
      },
      keeper: {
        name: names.keeper,
        short: "shows up and stays",
        wash: "#6a7380",
        image: "img/result-satellite.png",
        p1: "You keep " + t + " by showing up. Not clinging — attending. You know where it lives in a room without looking.",
        p2: "You stay. That's the vow. " + T + " is less alone because you decided to be in range.",
        tells: [
          "You wait to see who still needs " + t + ".",
          "You remember the version they didn't ask for last time.",
          "You leave last, not because you have nowhere to go."
        ]
      },
      spine: {
        name: names.spine,
        short: "gives it a floor",
        wash: "#2c3344",
        image: "img/result-architect.png",
        p1: "You give " + t + " a floor. A frame, then room for people to get sloppy inside it.",
        p2: "Someone thinks you're controlling. You're trying not to drop it. Fun happens because you already decided where the exit is.",
        tells: [
          "You make a list for " + t + ", then ignore half of it on purpose.",
          "You pick the place with a working last train.",
          "People relax because the floor is not going to move."
        ]
      },
      blade: {
        name: names.blade,
        short: "names the real thing",
        wash: "#9a4318",
        image: "img/result-knife.png",
        p1: "You name the real thing in " + t + " while it's still warm. Not to win. To stop the room from lying to itself.",
        p2: "Kind and sharp is how you stay. You would rather lose the pretty version than keep a fake peace.",
        tells: [
          "You name the part of " + t + " everyone is stepping around.",
          "Your compliments are specific enough to sting a little.",
          "You ask, then you pick the honest answer, not the cool one."
        ]
      }
    };
  }

  function generateFromAsk(ask, seed) {
    ask = String(ask == null ? "" : ask);
    var topic = stripTopic(ask);
    var theme = themeFromAsk(ask, topic);
    if (isGenericTopic(topic)) {
      var surprises = ["a long dinner", "the last train", "your group chat", "sunday morning", "the leftover wine", "a half-open window"];
      var seedNum0 = hashSeed(seed == null ? (ask + ":" + Date.now()) : seed);
      return generateFromAsk(surprises[seedNum0 % surprises.length], seed == null ? seedNum0 : seed);
    }
    var seedNum = hashSeed(seed == null ? (ask + ":" + Date.now()) : seed);
    var rng = mulberry32(seedNum);
    var templates = shuffle(TOPIC_TEMPLATES, rng).slice(0, 6);
    var topicQs = [];
    var i;
    for (i = 0; i < templates.length; i++) {
      topicQs.push(materializeTemplate(templates[i], topic, rng, i));
    }
    return {
      id: "ask-" + seedNum.toString(36),
      title: titleFromTopic(topic, rng),
      subtitle: "written just now",
      cover: null,
      theme: theme,
      topic: topic,
      ask: ask,
      generated: true,
      seed: seedNum,
      questions: topicQs,
      results: buildTopicResults(topic),
      resultOrder: ["spark", "keeper", "spine", "blade"]
    };
  }

  function quizHasCustomResults(quiz) {
    return !!(quiz && quiz.results && typeof quiz.results === "object" && !Array.isArray(quiz.results) && Object.keys(quiz.results).length);
  }

  function resultKeyOrder(quiz) {
    var i, k, keys = [], seen = {};
    if (quizHasCustomResults(quiz)) {
      if (quiz.resultOrder && quiz.resultOrder.length) {
        for (i = 0; i < quiz.resultOrder.length; i++) {
          k = quiz.resultOrder[i];
          if (quiz.results[k] && !seen[k]) { seen[k] = true; keys.push(k); }
        }
      }
      Object.keys(quiz.results).forEach(function (id) {
        if (!seen[id]) { seen[id] = true; keys.push(id); }
      });
      return keys;
    }
    return Object.keys(ARCHETYPES);
  }

  function resultImage(entry, id) {
    if (entry && entry.image) {
      if (/^img\//.test(entry.image) || /\.png$/i.test(entry.image)) return entry.image;
      return "img/result-" + entry.image + ".png";
    }
    if (ARCHETYPES[id]) return "img/result-" + id + ".png";
    return "img/result-architect.png";
  }

  function resolveResult(quiz, id) {
    var custom = quiz && quiz.results && quiz.results[id];
    var arch = ARCHETYPES[id] || {};
    var stock = RESULT[id] || {};
    if (custom && (custom.name || custom.p1 || custom.short || custom.tells)) {
      return {
        name: custom.name || arch.name || id,
        short: custom.short || arch.short || "",
        wash: custom.wash || arch.wash || "#2c3344",
        image: resultImage(custom, id),
        p1: custom.p1 || stock.p1 || "",
        p2: custom.p2 || stock.p2 || "",
        tells: (custom.tells || stock.tells || []).slice()
      };
    }
    return {
      name: arch.name || id,
      short: arch.short || "",
      wash: arch.wash || "#2c3344",
      image: resultImage(custom, id),
      p1: stock.p1 || "",
      p2: stock.p2 || "",
      tells: (stock.tells || []).slice()
    };
  }

  function emptyTally(quiz) {
    var t = {};
    resultKeyOrder(quiz).forEach(function (k) { t[k] = 0; });
    return t;
  }

  function score(answers, quiz) {
    var keys = resultKeyOrder(quiz);
    var allowed = {};
    keys.forEach(function (k) { allowed[k] = true; });
    var tally = emptyTally(quiz);
    var qs = (quiz && quiz.questions) || [];
    answers.forEach(function (choiceIndex, qi) {
      var q = qs[qi];
      if (!q || !q.choices[choiceIndex]) return;
      var tags = q.choices[choiceIndex].tags || [];
      tags.forEach(function (tag) {
        if (allowed[tag]) tally[tag] += 1;
      });
    });
    var ranked = keys.slice().sort(function (a, b) {
      if (tally[b] !== tally[a]) return tally[b] - tally[a];
      return keys.indexOf(a) - keys.indexOf(b);
    });
    var winner = ranked[0];
    var runner = ranked[1];
    var meta = resolveResult(quiz, winner);
    var run = resolveResult(quiz, runner);
    return {
      winner: winner,
      runner: runner,
      tally: tally,
      ranked: ranked,
      name: meta.name,
      short: meta.short,
      wash: meta.wash,
      image: meta.image,
      paragraphs: [meta.p1, meta.p2],
      tells: meta.tells.slice(),
      runnerName: run.name
    };
  }

  function writeFlavor(winner, runner, theme, topic) {
    var t = theme || "general";
    var map = {
      architect: {
        love: "In love you draft the weekend so nobody has to guess whether they matter.",
        night: "At 2am you are still the one who knows where the extra blanket is.",
        chaos: "Even your trouble has a floor plan.",
        food: "You plate things like the table is a small city.",
        home: "Home, for you, is a machine that politely disguises itself as a feeling."
      },
      anarchist: {
        love: "You love like a detour that turns out to be the trip.",
        night: "Two in the morning is when you finally stop translating yourself.",
        chaos: "This is your weather. You don't need a forecast.",
        food: "You eat with your hands when the night earns it.",
        home: "You keep one drawer that makes no sense. That's the chapel."
      },
      satellite: {
        love: "You love in orbits — close, consistent, a little gravitational.",
        night: "If they're still up, so are you. That's the vow.",
        friendship: "You are the friend who appears in the doorway without being summoned.",
        home: "Your house keeps a glass out for people who aren't there yet."
      },
      knife: {
        love: "You love by refusing the pretty lie, even when it would be easier.",
        night: "At 2am you say the sentence you've been editing all day.",
        friendship: "Your friends are better because you will not flatter their worst idea."
      },
      greenhouse: {
        love: "You love by changing the temperature until someone can grow.",
        home: "You are the reason the room feels like it has been expecting them.",
        food: "You feed people the way some people write letters."
      },
      twist: {
        love: "You love in third acts. The beginning was just research.",
        night: "You wait for the hour when people tell the truth by accident.",
        chaos: "You don't start the fire. You decide what it lights."
      },
      engine: {
        love: "You love in errands that look boring until someone notices they were held.",
        work: "The day runs because you decided it would, quietly.",
        night: "You are the reason everyone gets home."
      },
      window: {
        love: "You love by leaving a little space they can walk around in.",
        night: "You crack the night open and don't rush to fill it.",
        home: "You are the open window. People come in different and leave lighter."
      }
    };
    var row = map[winner] || {};
    var line = row[t] || row.home || RESULT[winner].p2;
    if (topic && !isGenericTopic(topic)) {
      var named = displayTopic(topic);
      line = line + " " + named + " is just the weather. This is the climate.";
    }
    return line;
  }

  var INTENT_MAP = [
    { re: /\b(again|another|redo|once more|same)\b/i, theme: "AGAIN" },
    { re: /\b(hi|hey|hello|yo)\b/i, theme: "GREET", weak: true },
    { re: /\b(thank|thanks|thx)\b/i, theme: "THANKS", weak: true },
    { re: /\b(chaot\w*|trouble|wild|messy|unhinged|reckless)\b/i, theme: "chaos" },
    { re: /\b(love|heart|crush|romance|dating|how i love)\b/i, theme: "love" },
    { re: /\b(2\s*am|2am|night|midnight|insomnia|late|dark)\b/i, theme: "night" },
    { re: /\b(weather|aesthetic|vibe|style|look|mood|taste)\b/i, theme: "aesthetic" },
    { re: /\b(work|job|career|office|monday)\b/i, theme: "work" },
    { re: /\b(friend|friendship|group chat)\b/i, theme: "friendship" },
    { re: /\b(food|eat|dinner|cook|kitchen|soup|table)\b/i, theme: "food" },
    { re: /\b(home|house|apartment|room|couch|key)\b/i, theme: "home" },
    { re: /\b(surprise|random|anything|whatever|pick)\b/i, theme: "surprise" },
    { re: /\b(side character|side)\b/i, theme: "friendship" },
    { re: /\b(horse|horses|pony|ponies|equestrian)\b/i, theme: "home" },
    { re: /\b(disney|princess movie|castle movie)\b/i, theme: "aesthetic" },
    { re: /\b(fair(?:y|ies)|pixie|enchanted wood)\b/i, theme: "aesthetic" },
    { re: /\b(pixar|found family)\b/i, theme: "friendship" },
    { re: /\b(quiz|question|tell me|about me|who am|what kind)\b/i, theme: "surprise" }
  ];

  function isMostlyGreeting(text) {
    return /^(hi|hey|hello|yo|heya|hiya|hey there|hi there)[\s!.]*$/i.test(text);
  }

  function isMostlyThanks(text) {
    return /^(thanks|thank you|thx|ty|thankyou|thanks so much|thank you so much)[\s!.]*$/i.test(text);
  }

  function isMostlyAgain(text) {
    return /^(again|another|redo|once more|same one|same|take another|another one)[\s!.]*$/i.test(text);
  }

  function parseIntent(text) {
    text = String(text || "").trim();
    if (!text) return { theme: "surprise", kind: "quiz", topic: "", ask: text };
    if (isMostlyAgain(text)) return { theme: "AGAIN", kind: "again", topic: "", ask: text };
    if (isMostlyGreeting(text)) return { theme: "surprise", kind: "greet", topic: "", ask: text };
    if (isMostlyThanks(text)) return { theme: "surprise", kind: "thanks", topic: "", ask: text };
    var topic = stripTopic(text);
    var theme = themeFromAsk(text, topic);
    if (isGenericTopic(topic)) {
      return { theme: theme === "general" ? "surprise" : theme, kind: "quiz", topic: "", ask: text };
    }
    return { theme: theme, kind: "quiz", topic: topic, ask: text };
  }

  var REPLIES = {
    greet: [
      "Hey. Tell me what you want to know about yourself, or pick a quiz.",
      "Hi. Chaos, love, 2am — or I can surprise you."
    ],
    thanks: [
      "Anytime. Another one, or are we done being examined?",
      "You're welcome. I have more where that came from."
    ],
    chaos: [
      "Chaos. Good. Let's see what kind you actually are.",
      "Trouble, then. Six questions. Don't tidy your answers."
    ],
    love: [
      "Love, then. Not the brochure version.",
      "How you love is rarely how you say you love. Let's check."
    ],
    night: [
      "Two in the morning. That's when you stop performing.",
      "Night-you is the honest one. I'll ask her."
    ],
    aesthetic: [
      "Taste is just weather you carry around. Let's name yours.",
      "Fine. A quiz about the climate in your head."
    ],
    work: [
      "The job under the job. That's the interesting one.",
      "How you hold a day says more than the title."
    ],
    friendship: [
      "Friendship, not the group photo. The kitchen version.",
      "Okay. Who you are when someone needs a ride."
    ],
    surprise: [
      "Surprise. I picked one I haven't used on you yet.",
      "Alright. Six questions, no warning. Don't overthink the first."
    ],
    food: [
      "The table knows. Appetite as autobiography.",
      "Good. Food is just character, plated."
    ],
    home: [
      "Home, then. Keys, light, the last cup.",
      "A room is a personality test if you ask it right."
    ],
    again: [
      "Again. I'll shuffle the deck.",
      "Okay. New questions. Same you, unfortunately."
    ],
    general: [
      "Okay. Six questions. Don't overthink the first one.",
      "Let's see. I'll keep it specific."
    ]
  };

  function pick(arr, seed) {
    var i = Math.floor(hashSeed(seed || Date.now()) % arr.length);
    return arr[i];
  }

  function localReply(intent, name) {
    if (intent && intent.kind === "quiz" && intent.topic && !isGenericTopic(intent.topic)) {
      return displayTopic(intent.topic) + ", then. Don't tidy your answers.";
    }
    var key = intent.kind === "again" ? "again" : (intent.kind === "greet" || intent.kind === "thanks" ? intent.kind : intent.theme);
    var bank = REPLIES[key] || REPLIES.general;
    var line = pick(bank, intent.theme + Date.now());
    if (name && intent.kind === "greet") {
      line = "Hey, " + name + ". Tell me what you want to know, or pick a quiz.";
    } else if (name && /okay|alright|good/i.test(line)) {
      line = line.replace(/^(Okay|Alright|Good)/, "$1, " + name);
    }
    var second = intent.kind === "greet" || intent.kind === "thanks" ? "" : "Don't perform. I can tell.";
    return second ? line + " " + second : line;
  }

  function attachResults(quiz) {
    quiz.results = RESULT;
    return quiz;
  }

  global.WheneverEngine = {
    ARCHETYPES: ARCHETYPES,
    RESULT: RESULT,
    QUESTIONS: QUESTIONS,
    THEMES: THEMES,
    generateQuiz: generateQuiz,
    generateFromAsk: generateFromAsk,
    score: score,
    parseIntent: parseIntent,
    localReply: localReply,
    attachResults: attachResults,
    formatQuestion: formatQuestion,
    hashSeed: hashSeed
  };
})(window);
