# `node-base-typescript`

Base TypeScript configuration for easily including in my projects.

The main objective is having as much config as possible in this package,
so that I can just include it in TypeScript projects and avoid
cluttering them with so copy-pasted config files.

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
