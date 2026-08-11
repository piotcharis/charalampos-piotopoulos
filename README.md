# charalampos-piotopoulos.com

My personal portfolio website: [charalampos-piotopoulos.com](https://charalampos-piotopoulos.com/)

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/) / [Bootstrap](https://getbootstrap.com/)
- [styled-components](https://styled-components.com/)

## Getting started

This project uses [Yarn 4 (Berry)](https://yarnpkg.com/) via [Corepack](https://nodejs.org/api/corepack.html), which ships with Node.js 16.10+.

```bash
corepack enable
yarn install
yarn dev
```

## Scripts

- `yarn dev` / `yarn start` — run the Vite dev server
- `yarn build` — build for production into `dist/`

## Deployment

Pushes to `main` are built and deployed via the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
