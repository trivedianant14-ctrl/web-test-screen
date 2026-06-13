# NPrep CBT Prototype

Working browser prototype of a CBT exam experience for NPrep.

## Run locally

```powershell
node local-server.js
```

Open:

```text
http://127.0.0.1:4173
```

The launch button requests fullscreen and opens the CBT flow. Browsers require fullscreen to be triggered by a user click, so the prototype starts with a click-to-launch screen.

## Included

- General instructions screen
- Test declaration and language gate
- Active CBT exam screen
- Countdown timer
- Question palette statuses
- Save, mark for review, clear response, pause, submit, instructions, and question paper interactions

## Deploying on Vercel

This is a static site. Vercel should serve `index.html` directly from the repository root. The local Node server is named `local-server.js` so Vercel does not confuse it with a production serverless entry point.
