# xern
Seed project with express and node.

## Installation

With node
```
git clone https://github.com/samueleishion/xern
cd xern
npm install
```

With yarn
```
git clone https://github.com/samueleishion/xern
cd xern
yarn install
```

## Building

Working directory: `./src`
Build directory: `./static`

Building for development (+hot reload):
```
npm run build:dev
```

Building for production:
```
npm run build:prod
```

## Serving

If you are building for dev, the server will spin up automatically.
Once you've built for production, you can run the following command to serve the static output:
```
npm run serve
```

## Linting

There are a set of rules provided for eslint and prettier to lint. To lint:
```
npm run lint
```

The project will lint automatically in dev mode and before commits.
