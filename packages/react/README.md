# React Component Lab

This package is the React-based implementation of the UI Component Lab, built for rapid prototyping, testing, and showcasing UI components based on the Untitled UI design system.

It uses Vite with TypeScript and PostCSS to provide a modern, fast development environment. Global design tokens (colors, typography, spacing, etc.) are shared via `@shared/tokens`.

## Folder Structure
```
packages/react/
├── button/               # First component (WIP)
│   ├── Button.tsx
│   ├── Button.module.css
│   └── index.ts
├── src/                  # React demo app
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── ...
```
## Getting Started

From the project root:

    cd packages/react
    npm install
    npm run dev

Open http://localhost:5173 to see the lab in action.

## Tokens

Design tokens (colors, fonts, spacing, etc.) are defined in:

    packages/shared/tokens/

And imported globally in main.tsx.

## ESLint & Formatting

Linting is enabled via `eslint.config.js` and should conform to React + TypeScript best practices.

Run:

    npm run lint

## Component Development

Each component:
- Lives in its own folder (e.g. `button/`)
- Has its own .tsx, .module.css, and index.ts
- Uses semantic CSS variables from the shared tokens

## License

This is a personal/professional UI lab. Fonts (Inter) are licensed under the SIL Open Font License.
