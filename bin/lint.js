#!/usr/bin/env node

const childProcess = require("node:child_process");
const path = require("node:path");

const REPOSITORY_PATH = path.join(__dirname, "..");

const ESLINT_CONFIG_FILE = path.join(REPOSITORY_PATH, ".eslintrc.json");
const ESLINT_IGNORE_FILE = path.join(REPOSITORY_PATH, ".eslintignore");

childProcess.execFileSync(
  "eslint",
  [
    "--config",
    ESLINT_CONFIG_FILE,
    "--ignore-path",
    ESLINT_IGNORE_FILE,
    "./**/*.{js,jsx,ts,tsx,json}",
  ],
  {
    stdio: [null, process.stdout, process.stderr],
  },
);
