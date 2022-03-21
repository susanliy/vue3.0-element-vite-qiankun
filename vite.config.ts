import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import qiankun from 'vite-plugin-qiankun'; //目前vite不支持qiankun  从而引入组件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { name } from './package.json';
import { viteMockServe } from 'vite-plugin-mock';

//提供gzip
import viteCompression from 'vite-plugin-compression';

//优化--初始化的时候提前加载依赖（针对开发环境）
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

// useDevMode 开启时与热更新插件冲突
const useDevMode = true; // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};
// https://vitejs.dev/config/
export default defineConfig(() => {
  let config = {
    plugins: [
      PkgConfig(),
      OptimizationPersist(),
      vue(),
      vueJsx(),
      viteCompression({
        // 是否在控制台输出压缩结果
        verbose: true,
        // 是否禁用
        disable: false,
        // 体积大于 threshold 才会被压缩,单位 b
        threshold: 10240,
        // 压缩算法
        algorithm: 'gzip',
        // 生成的压缩包后缀
        ext: '.gz',
        // 压缩后是否删除源文件
        deleteOriginFile: false,
      }),
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
        dirs: ['src/components'],
        resolvers: [ElementPlusResolver()],
        dts: 'types/components.d.ts',
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
      alias: [
        {
          find: '@',
          replacement: pathResolve('src'),
        },
        {
          find: '@images',
          replacement: pathResolve('src/assets/images'),
        },
        {
          find: '@svg',
          replacement: pathResolve('src/assets/svg'),
        },
        {
          find: '#',
          replacement: pathResolve('types'),
        },
      ],
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
  };
  return config;
});
