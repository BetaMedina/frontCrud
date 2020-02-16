module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',

  ],
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
  plugins: [
    'react',
    'prettier',
    "react-hooks"
  ],
  rules: {
    'jsx-a11y/control-has-associated-label': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx']
    }],
    "react/state-in-constructor": 'off',
    'import/prefer-default-export': 'off',
    'no-console': ["error", { allow: ['tron', 'log'] }],
    'no-param-reassign': 'off',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
};
