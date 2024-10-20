// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Adiciona Prettier ao ESLint
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false, // Se você não estiver usando JSX
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Adicione suas regras personalizadas aqui
    '@typescript-eslint/no-explicit-any': 'warn', // Exemplo de regra: avisa sobre uso de "any"
    'prettier/prettier': 'error', // Mostra erros de estilo do Prettier como erros do ESLint
  },
};
