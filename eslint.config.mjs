import astro from 'eslint-plugin-astro';
import js from '@eslint/js';
import globals from 'globals';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist/',
      'node_modules/',
      '.astro/',
      'public/old*',
      '.vscode/',
      '.env*',
      'coverage/',
      '**/*.config.*',
      'bun.lockb',
      'package-lock.json'
    ]
  },

  // Recommended config Astro — ini yang mengatur parser .astro dengan benar
  ...astro.configs.recommended,

  // Override/tambahan rule khusus .astro
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-unused-define-vars-in-style': 'warn',
      'astro/no-unused-css-selector': 'warn'
    }
  },

  // Config untuk file JS/TS murni
  {
    files: ['**/*.js', '**/*.mjs', '**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,

      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      'no-console': ['warn', { allow: ['error', 'warn'] }],
      'no-debugger': 'error',
      'no-unused-vars': 'off',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'prefer-const': 'warn'
    }
  },

  // Harus paling akhir: matikan rule stylistic yang bentrok dengan Prettier
  prettier
];