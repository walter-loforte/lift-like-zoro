# Lift like Zoro

A mobile-first workout planner and session tracker built as a progressive web app.

## Features

- Create and manage workout plans
- Browse exercises by muscle group
- Configure sets and reps for each training day
- Track workout weights in kilograms
- Review completed sessions in history
- Share and import plans using share codes
- Installable PWA with offline support

## Run Locally

Serve this directory with any static HTTP server. For example:

```powershell
npx serve .
```

Then open the displayed local URL in a browser.

Opening `index.html` directly also works for most features, but PWA installation and
offline caching require HTTP or HTTPS.

## Data

Plans and workout history are currently stored locally in the browser using
`localStorage`.
