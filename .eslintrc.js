
module.exports = {
    parser: 'babel-eslint',
    plugins: ['prettier', 'react'],
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    'parserOptions': {
      'ecmaVersion': 6,
      'sourceType': 'module',
      'ecmaFeatures': {
        'experimentalObjectRestSpread': true,
        jsx: true,
      }
    },
    extends: [
      'eslint:recommended',
      'prettier',
    ],
    rules: {
      camelcase: 0,
      'no-duplicate-imports': 0,
      'class-methods-use-this': 0,
      'comma-dangle': 0,
      'func-names': 0,
      'import/named': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-cycle': 0,
      'max-len': 0,
      'no-nested-ternary': 0,
      'no-unneeded-ternary': 2,
      'no-param-reassign': [2, { props: false }],
      'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
      'no-return-assign': 0,
      'no-unused-expressions': 0,
      'no-var': 0,
      'no-void': 0,
      'no-useless-escape': 0,
      'no-restricted-modules': [2, 'buffer'],
      'prefer-destructuring': 0,
      'prefer-object-spread': 2,
      'prefer-promise-reject-errors': 0,
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error'
    },
  };
  