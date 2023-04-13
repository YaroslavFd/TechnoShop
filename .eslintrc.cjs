module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:css-import-order/recommended',
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        plugins: ['jsx'],
      },
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import', 'css-import-order'],
  root: true,
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-param-reassign': 0,
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    quotes: ['warn', 'single'],
    // 'comma-dangle': ['warn', 'never'],
    // 'eol-last': 'error',
    'jsx-quotes': ['warn', 'prefer-double'],
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: [
          // 'function-expression',
          'function-declaration',
          'arrow-function',
        ],
        unnamedComponents: 'function-expression',
      },
    ],
    // 'no-param-reassign': [2, { props: false }],
    // 'prefer-const': 'error',
    // 'max-len': ['error', { code: 100 }],
    // 'comma-dangle': ['error', 'always-multilinbe'],
    // semi: ['warn', 'always'],
    // allowShortCircuit: true,
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
};
