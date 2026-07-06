# Session 1: From Java to TypeScript

**What you are practising:** adding type annotations to a plain JavaScript file and letting the compiler catch a mistake the runtime never would.

## Setup

Accept the assignment, clone **your** repository, then install the tooling once:

```bash
npm install
```

If you have not used npm before: `npm install` reads `package.json`, downloads the listed development tools (the TypeScript compiler, ESLint, and Prettier) into a `node_modules/` folder, and records the exact versions in `package-lock.json`. Think of it as Maven resolving your `pom.xml`, but into a local folder instead of a shared repository.

## The workflow

This is the rhythm for every TypeScript exercise in this module:

1. Open a terminal in the `exercise/` folder.
2. Rename the starter: `mv calculator.js calculator.ts` (or right-click and rename in VS Code).
3. Work through what the compiler surfaces. Under strict mode, every untyped parameter is an error, so the squiggles are your to-do list.
4. Compile with a bare `npx tsc`. Do not pass the filename: `npx tsc calculator.ts` ignores `tsconfig.json` completely and compiles with loose defaults, which defeats the point. The bare form picks up this folder's strict configuration.
5. Run the output: `node calculator.js`.

## Your task

The file contains four functions: `add`, `subtract`, `multiply`, and `divide`, plus a small test block that calls each of them.

1. Rename `calculator.js` to `calculator.ts`.
2. Add type annotations to all parameters and return types.
3. Fix any issues TypeScript flags. One of the test calls is deliberately wrong; find and fix it once the types make it visible.
4. Compile with `npx tsc` and confirm it produces clean JavaScript.
5. Run `node calculator.js` and verify the output.

Keep the exported function names (`add`, `subtract`, `multiply`, `divide`) — the autograder imports them by name.

## Stretch goals

- Add a fifth function, `percentageOf(part, whole)`, that returns a percentage as a number.
- Make `divide` safe. What should it return when the divisor is zero? How would you express that in the type?
- Try removing one of the return type annotations. Is the inferred type what you expected?

## Done when

`npx tsc` completes with no errors, `node calculator.js` prints four correct results, and your work is committed and pushed.

## How your work is graded

Every push runs two GitHub Actions checks:

- **Type check** — runs `npx tsc` on your exercise under the strict settings, once you have renamed the starter to `.ts`.
- **Autograding** — runs an automated test suite (Vitest) against your functions and reports a functionality score, plus an automated code-quality review.
