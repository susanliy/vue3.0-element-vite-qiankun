module.exports = {
  // 超过100换行
  printWidth: 100,
  // 结尾使用分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  //给vue中的 <script> and <style>标签加缩进
  vueIndentScriptAndStyle: true,
  // 在多行逗号分隔的语法结构中，尽可能打印末尾逗号。(例如，单行数组的末尾永远不会有逗号。),对象或数组末尾加逗号
  trailingComma: 'es5',
  // 换行,always：超过printWidth就换行，never：不换行，preserve：按照原样处理
  proseWrap: 'never',
  //html中的空格敏感性:"css"- 遵守CSS display属性的默认值;"strict" - 空格被认为是敏感的;"ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: 'strict',
  // 行尾换行格式
  endOfLine: 'auto',
};