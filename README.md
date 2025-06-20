# components-lab

A cross-framework UI component lab for clean, scalable frontend design based on https://www.untitledui.com/.
Reusable, accessible components built from scratch in multiple frameworks. Starting with React, expanding soon to Angular and others.

## Project Structure

```
components-lab/
├── packages/
│   ├── react/                 # React component implementations
│   │   └── dropdown/          # React Dropdown component
│   ├── angular/               # Angular components (planned)
│   └── shared/                # Design tokens and shared utilities (planned)
├── examples/                  # Standalone examples for demos/testing
│   ├── react-dropdown-demo/
├── figma/                     # UI designs and specs
├── README.md                  # You're here
└── package.json               # Root config (optional monorepo tools)
```

## Current Components

| Package        | Status      | Description                                                                                          |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| react/dropdown | In Progress | A fully accessible dropdown menu with keyboard navigation, click-away handling, and flexible styling |

## Getting Started

Clone the repo:

```bash
git clone https://github.com/your-username/components-lab.git
cd components-lab
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run an example:

```bash
cd examples/react-dropdown-demo
npm install
npm run dev
```

## Design Philosophy

- Accessibility-first
- Framework-agnostic thinking
- Minimal, composable components
- Alignment with real design systems (via Figma)

## License

MIT – free to use, adapt, or contribute.

### Fonts

Inter by Rasmus Andersson is used under the SIL Open Font License v1.1  
https://github.com/rsms/inter
