module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'next/core-web-vitals',
    'standard-with-typescript',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      plugins: ['jest', 'jest-formatting', 'testing-library', 'jest-dom'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react', 'tailwindcss', 'react-hooks', 'prettier'],
  rules: {
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
