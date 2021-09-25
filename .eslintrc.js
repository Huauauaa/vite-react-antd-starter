module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/jsx-no-undef': 'warn',
    'no-undef': 'warn',
    'import/prefer-default-export': 'warn',
    'arrow-parens': ['warn', 'always'],
  },
};