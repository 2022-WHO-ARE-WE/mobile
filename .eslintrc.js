module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
  ],
  'rules': {
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 'off',
    'max-len': ['error', { 'code': 120 }],
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
  },
};
