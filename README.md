# Sukanya Neog — Portfolio

A personal portfolio site built with React + Vite

## What's inside

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Journey, DSA, Education, Contact, Footer
├── data/           # profile.js, skills.js, projects.js — edit these to update content
├── styles/         # index.css — all styling, no external UI library
├── App.jsx
└── main.jsx
```

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
