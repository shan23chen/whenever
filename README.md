# whenever.

A small personality-quiz magazine. Built for her, open whenever.

## Open it

No build step.

- Double-click `index.html`, or
- From this folder:

```bash
python3 -m http.server 8765
```

Then go to [http://localhost:8765](http://localhost:8765).

Google Fonts (Fraunces + Outfit) load if you're online. Offline, it falls back to Georgia and system-ui. Quizzes, chat, and scoring all run locally.

## What's here

- **Home** — wordmark, a line to ask for a quiz, starter chips, nine covers
- **Chat** — talk to the bot; it answers in character and launches a quiz
- **Quiz** — six questions, four choices, progress dots, back
- **Result** — full-bleed image, two short paragraphs, three tells, copy, take another
- **History** — last results, kept in `localStorage` on this phone

## Settings

The gear is quiet on purpose.

- Optional display name
- Optional xAI or OpenAI-compatible API key (stored only in `localStorage`)
- No key: the local engine writes every quiz
- With a key: custom asks can generate a fresh quiz via `https://api.x.ai/v1/chat/completions` (model `grok-2-latest` or `grok-4`) or `https://api.openai.com/v1/chat/completions`

Never put a key in the source files.

## Local engine

`js/engine.js` has forty-five original questions and eight archetypes:

- architect — The Midnight Architect
- anarchist — The Soft Anarchist
- satellite — The Loyal Satellite
- knife — The Warm Knife
- greenhouse — The Greenhouse
- twist — The Plot Twist
- engine — The Quiet Engine
- window — The Open Window

`generateQuiz(theme, seed)` is deterministic when you pass a seed.

## Seeded quizzes

1. What kind of trouble are you
2. Your secret weather
3. How you actually love
4. The 2am version of you
5. Which side character are you
6. What kind of horse girl are you
7. Which Disney night are you
8. What kind of fairy are you
9. Which Pixar feeling are you
