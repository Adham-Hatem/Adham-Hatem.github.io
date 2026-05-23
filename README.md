---
title: Portofolio
emoji: 📉
port: 80
colorFrom: purple
colorTo: blue
sdk: docker
pinned: false
license: apache-2.0
---

# React + Vite Portfolio

This project is a React portfolio built with Vite and Docker for deployment to Hugging Face Spaces.

## About the Code

The app is a single-page React project using modern Vite tooling and a component-based layout.

- `src/main.jsx` initializes the app and renders the root React component.
- `src/App.jsx` contains the main page layout and loads the portfolio sections.
- `src/index.css`, `src/main.css`, and `src/catWindow.css` hold global and component-specific styling.

### Components

The portfolio UI is built from reusable components in `src/components/`:

- `Navbar.jsx` — site navigation and section links.
- `Hero.jsx` — landing section with hero text and animated intro.
- `About.jsx`, `Projects.jsx`, `Contact.jsx`, `Footer.jsx` — core portfolio sections.
- `AnimatedBlock.jsx`, `rain.jsx`, `rainWindow.jsx`, `starLayer.jsx`, `shuffleText.jsx`, `windowCat.jsx` — visual and motion effects used throughout the page.

### Context and State

Context providers in `src/context/` manage shared appearance and animation state:

- `AccentContext.jsx` — accent color control.
- `CatTypeContext.jsx` — selected cat style or theme state.
- `cloudContext.jsx` and `moonContext.jsx` — environmental display state for sky and atmosphere.

A reusable helper in `src/utils/createCycleContext.jsx` creates cyclic context patterns for switching between theme values.

## Folder Structure

- `public/` — static assets and public files.
- `src/assets/` — image and asset imports used by the app.
- `src/components/` — UI components and animation helpers.
- `src/context/` — React context providers and theme state.
- `src/hooks/` — custom hooks like accent pop effect.
- `src/utils/` — utility helpers for reusable logic.

## Build & Development

- Build: `npm run build`
- Dev: `npm run dev`
- Preview: `npm preview`

## Docker Deployment

See [DOCKER-DEPLOYMENT.md](DOCKER-DEPLOYMENT.md) for complete deployment instructions to Hugging Face Spaces.
