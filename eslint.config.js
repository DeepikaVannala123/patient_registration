// Import base ESLint config for JavaScript
import js from '@eslint/js'
// Import global variables for different environments
import globals from 'globals'
// Import React Hooks ESLint plugin
import reactHooks from 'eslint-plugin-react-hooks'
// Import React Refresh ESLint plugin (for fast refresh in development)
import reactRefresh from 'eslint-plugin-react-refresh'
// Import TypeScript ESLint config
import tseslint from 'typescript-eslint'

// Export the ESLint configuration using typescript-eslint's config helper
export default tseslint.config(
  // Ignore the 'dist' directory from linting
  { ignores: ['dist'] },
  {
    // Extend recommended configs for JS and TypeScript
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // Apply these settings to TypeScript files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 syntax
      globals: globals.browser, // Use browser global variables
    },
    plugins: {
      'react-hooks': reactHooks, // Add React Hooks plugin
      'react-refresh': reactRefresh, // Add React Refresh plugin
    },
    rules: {
      // Use recommended rules for React Hooks
      ...reactHooks.configs.recommended.rules,
      // Warn if components are not exported correctly for React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)