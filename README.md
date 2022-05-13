# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

done 实现基于 element-plus 表格封装表单封装弹窗封装作为 qiankun 子应用嵌入旧页面(完成)

vue自带的国际化的使用
对于cookie 有封装的工具 
css mixin 的使用文件夹的规范自定义的色彩

多个项目去调通qiankun的使用--能够打开及传值(实现父传子)
1.该项目作为qiankun的主应用
2.子应用用的是别人的（https://github.com/aehyok/vue-qiankun/tree/dev/map-app-ts）

to do 
axios 的封装一些基本功能的 hooks 封装 cookie 及 token 的接入
element-plus 的hooks学习
vueUse的使用及是实现

基于ant封装动态表单
--defineExpose 使用理解--利用ref进行子集的抛出及父级的接收
动态slot与render函数的使用
jsx的使用
proxy代理收集
component的用法


2022.05.15  todo
数据改成用mock使用
封装树形的列表可拖拽
可拖拽可编辑的树形表格

文件夹的整理  及readme的内容更改




学无止境，自律
