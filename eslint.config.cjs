// eslint.config.cjs
/** @type {import('eslint').Linter.Config} */
const config = [
  {
    files: ['**/*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'no-console': 'warn', // Alerta para uso de console
      // Adicione outras regras conforme necessário
    },
  },
];

module.exports = config;
