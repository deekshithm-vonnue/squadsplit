# SquadSplit

Split a group of players into balanced teams. Enter each player's rating and
position, and SquadSplit builds fair teams for any number of players, including
odd counts. Football first, with other games planned.

## Tech stack

- Next.js (App Router), TypeScript, Tailwind CSS
- Vitest for tests
- Husky, lint-staged and commitlint for commit checks
- Planned: PostgreSQL with Prisma, optional sign-in with Auth.js

## Getting started

Requires Node 24 and pnpm.

    pnpm install
    cp .env.example .env.local
    pnpm dev

Open http://localhost:3000.

## Scripts

| Command          | What it does                                       |
| ---------------- | -------------------------------------------------- |
| `pnpm dev`       | Start the dev server                               |
| `pnpm build`     | Production build                                   |
| `pnpm lint`      | Run ESLint                                         |
| `pnpm typecheck` | Run the TypeScript compiler without emitting files |
| `pnpm test`      | Run tests once                                     |
| `pnpm check`     | Lint, typecheck and test, the same as CI           |
| `pnpm format`    | Format the code with Prettier                      |

## Workflow

- Work on `feat/*` or `chore/*` branches and open a PR into `staging`.
- Promote tested work from `staging` to `main` with a PR.
- Commits follow `type(scope): summary`, checked by commitlint.

## Environment variables

See `.env.example`. Never commit real values.
