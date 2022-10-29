module.exports = {
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.js'], // Your JavaScript files extension
      extends: ['plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['/test/**/*.js'], // Your JavaScript files extension
      extends: ['plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  root: true
};
