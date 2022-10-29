module.exports = {
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  root: true
};
