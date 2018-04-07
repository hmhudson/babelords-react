module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'arrow-body-style': [2, 'as-needed'],
    'import/extensions': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [0, { 'ignorePureComponents': true }],
    'react/self-closing-comp': ['error', { 'component': true, 'html': false }],
    'react/no-danger': [0],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'prefer-template': 0,
    'no-prototype-builtins': 0,
    'class-methods-use-this': 0,
  },
  globals: {
    document: 1,
  },
  parser: 'babel-eslint',
  env: {
    browser: 1,
  },
};
