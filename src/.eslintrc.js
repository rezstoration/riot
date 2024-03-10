module.exports = {
  parser: '@typescript-eslint/parser', // If you're using TypeScript
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
