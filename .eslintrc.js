module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 空格标准这里是2个空格为标准 可以写4,tab
    indent: ['error', 4],
    // 关闭语句强制分号结尾
    "semi": [0],
    // 函数定义时括号前面要不要有空格
    "space-before-function-paren": [0, "always"],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
