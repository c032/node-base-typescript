# `node-base-typescript`

Base TypeScript configuration for easily including in my projects.

## Install

```sh
npm install --ignore-scripts --save-dev 'github:c032/node-base-typescript'
```

## `tsconfig.json`

```json
{
  "extends": "node-base-typescript",
  "compilerOptions": {
    "outDir": "./build"
  }
}
```

## `package.json`

```js
{
  // ...

  "scripts": {
    "build": "tsc",
    "fmt": "fmt",
    "lint": "lint"
  }

  // ...
}
```
