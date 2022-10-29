module.exports = {
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  files: ['*.js'], // Your JavaScript files extension
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  root: true
};
