# new-sample-vite-react-spa

A standard **Vite + React + TypeScript single-page application** with client-side
routing (`react-router-dom`) and several routes. It reproduces the tech stack of
a real DeployHQ Static Hosting customer site (`acme-marketing`, repo
`tanstack_start_ts`) so we can validate framework detection and the one-click
deploy on staging.

## Stack

- Vite 8 (`vite build` → output in `dist/`)
- React 19 + React DOM 19
- react-router-dom 7 (client-side routing: `/`, `/about`, `/products`, `/contact`, `*`)
- TypeScript 6

## Expected DeployHQ detection

The rule-based detector keys on `vite` **and** `react-router-dom` in
`package.json` and should classify this as:

| Field | Value |
|---|---|
| stack | `spa_vite_react` |
| confidence | **high** |
| root_path (Subdirectory to deploy from) | `dist` |
| spa_mode | **true** |

So onboarding should pre-fill `dist` + SPA mode automatically, and a
high-confidence deploy should fill a blank `root_path` at deploy time.

## Note on SPA mode

This app has real client-side routes. The homepage (`/`) serves `index.html`,
but a hard refresh on `/about` only works if the host rewrites unknown paths to
`/index.html` (DeployHQ **SPA mode**). If detection sets `root_path` but not
`spa_mode`, the homepage will serve while deep links 404 — a useful thing to
verify on staging.

## Run locally

```bash
npm install
npm run dev              # default http://localhost:5173
# or pin the port:
npm run dev -- --port 5173
```

## Build & serve (deploy)

```bash
npm run build            # type-check (tsc -b) + build static site into dist/
npm run preview          # serve the built dist/ locally (http://localhost:4173)
# or serve dist/ with any static file server:
npx serve dist
```

`dist/` is the deployable artifact — plain static files. On DeployHQ Static
Hosting the "Subdirectory to deploy from" should be `dist`, and SPA mode should
be on so deep links resolve.

## Testing on staging

1. Push this to a new GitHub repo.
2. Create a project in DeployHQ (staging) pointing at the repo.
3. Add a Static Hosting server / run the onboarding wizard and confirm the
   detected framework, subdirectory (`dist`), and SPA mode.
