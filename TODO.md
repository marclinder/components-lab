## Accessibility & Styling Cleanup TODOs

      [ ] Replace raw color values (e.g. --green-500) with semantic tokens (--color-success, etc.)
      [ ] Ensure consistent token naming and fallback structure across all variant × intent combinations
      [ ] Add :focus:not(:focus-visible) reset:
            &:focus:not(:focus-visible) {
              outline: none;
            }
      [ ] Ensure .disabled buttons have aria-disabled="true" programmatically applied
      [ ] Use native <button> or role="button" + keyboard handlers for all buttons
      [ ] Add aria-label or aria-labelledby to icon-only buttons
      [ ] Audit and verify color contrast meets WCAG 2.2 AA requirements
      [ ] Add :active:not(.disabled) state styles with tokens:
            --color-active-bg
            --color-active-border
            --color-active-text
      [ ] Temporarily mirror hover state for active state if distinct tokens don’t exist

## Tooling & DX Enhancements

      [ ] Enable ESLint auto-fix on save in your editor
      [ ] Add Prettier with support for PostCSS nesting
      [ ] Validate .eslintrc, .prettierrc, and VSCode settings
      [ ] Set up unit tests with Jest + React Testing Library
      [ ] Add snapshot tests for all button variant × intent combinations
      [ ] Add tests for keyboard nav + a11y state handling with @testing-library/user-event
      [ ] Add postcss, cssnano, and autoprefixer to CSS build step
      [ ] Configure type-checking, test running, and bundling (Vite/Webpack/Rollup)
      [ ] Add `npm run build` and `npm run dev` scripts

## Storybook Setup

      [ ] Install and configure Storybook
      [ ] Add stories for all variant × intent button combinations and states
      [ ] Integrate PostCSS nesting into Storybook config
      [ ] Add @storybook/addon-a11y for accessibility testing

## GitHub Pages / Static Docs

      [ ] Use Storybook's static build to generate docs (storybook-static)
      [ ] Add npm script to deploy to GitHub Pages (`npm run deploy-docs`)
      [ ] (Optional) Add GitHub Actions workflow for CI/CD deployment

## Next Component Set

      [ ] Choose and scaffold the next atomic components (Badge, Input, Tooltip, Toast, etc.)
      [ ] Reuse token strategy and variant × intent pattern in new components
