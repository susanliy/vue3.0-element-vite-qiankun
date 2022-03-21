// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true, //如果项目目录下有多个配置文件，ESLint 只会使用一个，优先级为：.eslintrc.js > .eslintrc > package.json，一般我们都是在 .eslintrc.js 配置
  /*同时，如果配置文件里没有"root": true这个属性，ESLint就会继续向外寻找配置文件，直到找到有"root": true的为止，所有这些配置文件的规则都会被层叠应用。若有重复的属性配置，则离文件更近的配置文件具有更高的优先级。
  当想要所有项目都遵循一个特定的约定时会很有用，但还是建议给项目根目录的.eslintrc.js加上root: true*/

  /* 指定代码运行环境 */
  env: {
    browser: true, //浏览器环境中的全局变量
    node: true, //Node.js全局变量和Node.js作用域
    es6: true, //启用除模块外的所有ECMAScript 6功能（这会自动将ecmaVersion parser选项设置为6）。
  },
  /* 指定如何解析语法。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser', //将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用
    ecmaVersion: 2020, //emcaVersion用来指定你想要使用的 ECMAScript 版本
    sourceType: 'module', // 设置为 "script" (默认)或"module"（如果你的代码是 ECMAScript 模块)
    jsxPragma: 'React',
    //想使用额外的语言特性
    ecmaFeatures: {
      jsx: true, //启用jsx
    },
  },
  /* 一个ESLint配置文件，一旦扩展了(即从外部引入了其他配置包)，就能继承另一个配置文件的所有属性(包括rules, plugins, and language option在内)，然后通过merge合并/覆盖所有原本的配置。 */
  /* 字符串数组，每个扩展都会先继承前面一个扩展的配置 */
  extends: [
    'plugin:vue/vue3-recommended', //有 plugin: 前缀，显然要先去找./node_modules/eslint-plugin-vue，然后看它导出的配置里的essential属性。在./node_modules/eslint-plugin-vue/lib/index.js 里找到了。
    'plugin:@typescript-eslint/recommended', // 使用@typescript eslint/eslint插件中推荐的规则。./node_modules/下的@typescript-eslint
    'prettier', //  ESLint 会先找到./node_modules/下的eslint-config-prettier
    'plugin:prettier/recommended', //启用eslint插件prettier和eslint配置prettier。这将把更漂亮的错误显示为ESLint错误。确保这始终是扩展阵列中的最后一个配置。
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error', //防止将<template>中使用的<script setup>变量标记为未使用,ESLint no unused vars规则不会检测<template>中使用的<script setup>中的变量。此规则将在<template>中使用的<script setup>中查找变量，并将其标记为已使用。此规则仅在启用“无未使用的vars”规则时有效。
    '@typescript-eslint/ban-ts-ignore': 'off', //禁止使用“/@ts-ignore”规则
    '@typescript-eslint/explicit-function-return-type': 'off', //关闭函数缺少返回类型时的警告
    '@typescript-eslint/no-explicit-any': 'off', //关闭any类型警告
    '@typescript-eslint/no-var-requires': 'off', //不允许在导入语句中使用require语句
    '@typescript-eslint/no-empty-function': 'off', //不允许空函数
    'vue/custom-event-name-casing': 'off', //为了保持一致性，定义自定义事件名称大小写的样式,在Vue 3中，使用camelCase或kebab case作为自定义事件名称并不限制其在v-on中的使用。然而，遵循JavaScript约定，camelCase更自然。这条规则在默认情况下强制执行短横杆连接形式。
    'no-use-before-define': 'off', //此规则会在遇到对尚未声明的标识符的引用时发出警告
    '@typescript-eslint/no-use-before-define': 'off', //同上
    '@typescript-eslint/ban-ts-comment': 'off', //禁止使用@ts-<directive>注释，或要求在指令后进行描述。此规则允许您设置要在代码库中允许的指令注释。默认情况下，只允许@ts check，因为它启用而不是抑制错误。
    '@typescript-eslint/ban-types': 'off', //禁止使用特定类型,例如：不要使用大写基本类型，应该使用小写类型以保持一致性。
    '@typescript-eslint/no-non-null-assertion': 'off', //不允许使用！后缀运算符
    '@typescript-eslint/explicit-module-boundary-types': 'off', //在导出的函数和类的公共类方法上需要显式的返回和参数类型。
    '@typescript-eslint/no-unused-vars': [
      //不允许未使用的变量,此规则扩展了基本eslint/no unused vars规则。它增加了对类型脚本功能的支持，例如类型。
      'error',
      {
        argsIgnorePattern: '^_', //名称以下划线开头的变量
        varsIgnorePattern: '^_', //名称包含下划线的变量
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off', //在函数括号之前强制执行一致的间距

    // 'vue/attributes-order': 'off',
    /* 该规则旨在强制组件属性的排序，这个规则包含在"plugin:vue/vue3-recommended" 和 "plugin:vue/recommended"中 */
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', //'is', 'v-is'
          'LIST_RENDERING', //'v-for item in items'
          'CONDITIONALS', //'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          'RENDER_MODIFIERS', //'v-once', 'v-pre'
          'GLOBAL', //'id'
          ['UNIQUE', 'SLOT'], //'ref', 'key','v-slot', 'slot'
          'TWO_WAY_BINDING', //'v-model'
          'OTHER_DIRECTIVES', //'v-custom-directive'
          'OTHER_ATTR', // 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
          'EVENTS', //'@click="functionCall"', 'v-on="event"'
          'CONTENT', //'v-text', 'v-html'
        ],
        alphabetical: false, //按字母顺序排列
      },
    ],
    'vue/one-component-per-file': 'off', //强制每个组件都应该在单独的文件中
    'vue/html-closing-bracket-newline': 'off', //要求或不允许在标记的结束括号之前有换行符
    'vue/max-attributes-per-line': 'off', //强制执行每行的最大属性数
    'vue/multiline-html-element-content-newline': 'off', //在多行元素的内容之前和之后需要换行
    'vue/singleline-html-element-content-newline': 'off', //在单行元素的内容之前和之后需要换行
    'vue/attribute-hyphenation': 'off', //在模板中的自定义组件上执行属性命名样式
    'vue/require-default-prop': 'off', //props 需要默认值
    'vue/require-explicit-emits': 'off', //由$emit()触发的事件名称需要定义在emits:[]选项中
    /* 执行标签自闭的风格,例如：<div/>*/
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off', //此规则要求组件名称始终为多字，但根应用程序组件和Vue提供的内置组件除外，如<transition>或<component>。这可以防止与现有和未来的HTML元素发生冲突，因为所有HTML元素都是一个单词。
    'vue/no-v-html': 0,
    // 'vue/no-mutating-props': 0,
  },
});
