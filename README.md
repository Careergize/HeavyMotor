# React + TypeScript + Tailwind CSS

A lightweight frontend starter powered by Vite, React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — type-check and create a production build
- `npm run lint` — lint the project
- `npm run preview` — preview the production build locally

## Project structure

```text
src/
├── components/     # Reusable UI components
│   └── ui/
├── hooks/          # Shared React hooks
├── layouts/        # App and page layouts
├── pages/          # Route-level screens
├── types/          # Shared TypeScript types
├── App.tsx         # Root component
├── index.css       # Tailwind import and global styles
└── main.tsx        # Application entry point
```

Tailwind CSS is available in every component. Add utility classes directly to JSX; no separate Tailwind configuration file is needed with Tailwind CSS v4.
