// eslint.config.cjs

const path = require('path');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: [
      'angular.json',
      'package.json',
      'index.html',
    ],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        sourceType: 'module',
      },
    },
    plugins: {
      '@angular-eslint': angularEslintPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'no-console': ['warn', { allow: ['error'] }],
      'no-debugger': 'warn',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'prefer-const': 'error',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@angular-eslint/no-empty-lifecycle-method': 'off',
      '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prettier/prettier': 'error',
      'max-lines': ['warn', { max: 200, skipBlankLines: true, skipComments: true }],
      'no-duplicate-imports': 'error',
      'max-depth': ['warn', 3],
      '@angular-eslint/no-forward-ref': 'off',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/contextual-lifecycle': 'warn',
      '@angular-eslint/no-pipe-impure': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      'no-dupe-else-if': 'warn',
      'no-duplicate-case': 'warn',
      'prefer-spread': 'warn',
      'no-extra-boolean-cast': 'warn',
      'prefer-rest-params': 'warn',
      'no-empty': 'warn',
      'no-setter-return': 'warn',
      'no-control-regex': 'warn',
      'no-redeclare': 'warn',
      'no-prototype-builtins': 'warn',
      '@typescript-eslint/require-await': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'off',
      '@typescript-eslint/prefer-for-of': 'warn',
      'prefer-exponentiation-operator': 'warn',
      'no-template-curly-in-string': 'warn',
      'no-loop-func': 'error',
      'no-return-await': 'off',
      'preferDestructuring': ['off', { array: true, object: true }],
    },
  },
  {
    files: ['src/**/*.component.html'],
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
    },
    rules: {
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/click-events-have-key-events': 'warn',
      '@angular-eslint/template/no-autofocus': 'warn',
      '@angular-eslint/template/no-call-expression': 'warn',
      '@angular-eslint/template/no-template-shadow': 'off',
      '@angular-eslint/template/alt-text': 'warn',
      '@angular-eslint/template/button-has-type': 'warn',
      '@angular-eslint/template/role-has-required-aria': 'warn',
      '@angular-eslint/template/no-inline-styles': 'warn',
    },
  },
];
