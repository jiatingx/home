module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    "_": true
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-unused-vars': 'warn',
    'no-var': 'warn',
    quotes: ['off', 'single'],
    semi: ['off', 'never']
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/prettier'
  ]
}
