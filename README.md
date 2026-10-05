# Sukanya Neog — Portfolio

A personal portfolio site built with React + Vite, using the real content
from your resume (projects, skills, education, certifications).

## What's inside

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Journey, DSA, Education, Contact, Footer
├── data/           # profile.js, skills.js, projects.js — edit these to update content
├── styles/         # index.css — all styling, no external UI library
├── App.jsx
└── main.jsx
```

To change your name, email, links, skills, or projects, you only need to
edit the files in `src/data/` — the components read from there.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or later installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.
The page hot-reloads as you edit files.

## Build for production

```bash
npm run build
```

This outputs a static site into the `dist/` folder. You can preview the
production build locally with:

```bash
npm run preview
```

## Notes on the contact form

The contact form validates input in the browser but does **not** send
email — there's no backend wired up. To make it functional, either:

- Use a form service like [Formspree](https://formspree.io) or
  [EmailJS](https://www.emailjs.com/) (no backend needed, small free tier), or
- Build a small backend endpoint (e.g. Node/Express) that emails you the
  submission, and call it from `handleSubmit` in
  `src/components/Contact.jsx`.

## Deploying the site

Any static host works, since `npm run build` produces plain HTML/CSS/JS in
`dist/`. Three easy options:

### Option A — Vercel (recommended, free)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   **Add New → Project**, and select your repo.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL like `your-project.vercel.app`
   within a minute, and it redeploys automatically on every push.

### Option B — Netlify (free)

1. Push the project to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an
   existing project**, and connect your repo.
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**. Netlify also gives you a free `.netlify.app` URL
   and redeploys on every push.

You can also skip Git entirely: run `npm run build` locally, then drag the
`dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for
an instant deploy.

### Option C — GitHub Pages (free)

1. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set `base: "/<repo-name>/"` (matches your repo
   name).
4. Push your project to a GitHub repo, then run:
   ```bash
   npm run deploy
   ```
5. In the repo's **Settings → Pages**, set the source to the `gh-pages`
   branch. Your site will be live at the `homepage` URL above within a
   couple of minutes.

### Custom domain

All three hosts (Vercel, Netlify, GitHub Pages) support adding your own
domain for free under **Site settings → Domains**, once you own one from a
registrar like Namecheap or Google Domains.

## A note on content

The **Banking Application** project mentioned in some portfolio briefs
wasn't on your resume, so it was left out — the Projects section only
includes ChatyApp, QRify, and Crypto AI Dashboard, which are real. Add more
projects any time by editing `src/data/projects.js`.
