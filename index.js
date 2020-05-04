'use strict';

const vinoRules = {
  'prettier/prettier': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  'react-hooks/exhaustive-deps': 'warn',
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: vinoRules,
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};