/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser'
    }
  ]
}
