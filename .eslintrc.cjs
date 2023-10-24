/* eslint-env node */
// In This file we can configurated our eslint proyect
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // This Array represent a bundle of rules
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
