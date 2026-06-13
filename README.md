# NPrep NORCET CBT Prototype

Working browser prototype of a NORCET-style CBT exam experience for NPrep.

## Run locally

```powershell
node local-server.js
```

Open:

```text
http://127.0.0.1:4173
```

The first click inside the CBT interface requests fullscreen. Browsers require fullscreen to be triggered by a user gesture, so the app renders the exam interface immediately and requests fullscreen on the user's first interaction.

## Included

- General instructions screen
- Test declaration and language gate
- Active NORCET-style exam screen
- 90-minute countdown timer
- Section tabs and right-side question palette
- Previous, Save & Next, Mark for Review & Next, Clear Response, and Submit Exam interactions

## Deploying on Vercel

This is a static site. `vercel.json` explicitly uses Vercel's static builder for `index.html`, `styles.css`, and `app.js`. The local Node server is named `local-server.js` so it is not used as a production serverless entry point.
