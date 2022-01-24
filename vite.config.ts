import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import qiankun from 'vite-plugin-qiankun' //目前vite不支持qiankun  从而引入组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { name } from './package.json'
import { viteMockServe } from 'vite-plugin-mock'

// useDevMode 开启时与热更新插件冲突
const useDevMode = true // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响
// https://vitejs.dev/config/
export default defineConfig(() => {
  let config = {
    plugins: [
      vue(),
      vueJsx(),
      qiankun('vite-vue-ts', { useDevMode }),
      eslintPlugin({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.js'],
      }),
      // ElementPlus自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      //添加mock板块
      viteMockServe({
        ignore: /^\_/, //自动读取模拟.ts 文件时，请忽略指定格式的文件
        mockPath: 'mock',
        localEnabled: true,
        prodEnabled: false, //设置打包是否启用 mock 功能
        //不打包mock的代码
        injectCode: ` 
          import { setupProdMockServer } from './mock/_createProductionServer';
          setupProdMockServer();
          `,
      }),
    ],
    define: {
      'process.env': {},
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },

    server: {
      port: 7000,
      open: true, // 启动时自动打开
      cors: true, // 运行跨域
      host: true,
      proxy: {
        //代理
        '/infra': {
          target: 'http://139.186.205.7:5000/api', // 用于测试代理接口--后期删除
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/infra/, ''),
        },
      },
    },
  }
  return config
})
