module.exports = {
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
  extends: ['eslint:recommended', 'typescript', 'plugin:vue/recommended'],
  rules: {
    // you may change rules as you like
    quotes: [1, 'single'],
    semi: 0,
  },
}
