// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': 'off',
    // 忽略function圆括号前没有空格
    'space-before-function-paren': 'off'
  },
  overrides: [{
    'files': ['src/**/*.js'],
    'excludedFiles': ['node_modules'],
    'rules': {
      'quotes': ['off', 'double'],
      // 使用分号
      'semi': ["error", "always"]
    }
  }]
}