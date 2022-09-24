import { defineConfig } from 'umi';

/*
  配置式： 如果配置了该文件，路由模式切换为配置式
  约定式：如果不配置，将根据pages页面编译，自动生成路由配置
 */

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // path大小写不敏感
  routes: [
    { exact: true, path: '/', component: '@/pages/App' },
    { path: '/films', component: '@/pages/films/index' },
    { path: '/cinemas', component: '@/pages/cinemas/index' },
    { component: '@/pages/404' },
  ],
  fastRefresh: {},
});
