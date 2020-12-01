module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'import/prefer-default-export': 0,
    'prettier/prettier': 'error',
  },
};
