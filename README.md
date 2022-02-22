# Next.js Boilerplate including:

- TypeScript - Static type checking
- Styled Components - CSS in JS
- Redux - Global app state with SSR support
- ESLint — Find and fix problems in your code
- Prettier — Code Formatter for consistent style
- Yarn - Manage dependencies

## Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

## Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn check-types` — Validate code using TypeScript compiler.

## Path Aliases

TypeScript is configured with custom path aliases. To import components or files relative to repository root, use the `@` prefix.

```tsx
import { Button } from '@components/Button';
```
