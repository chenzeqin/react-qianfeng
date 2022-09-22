import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // path大小写不敏感
  routes: [
    { path: '/', component: '@/pages/App' },
    { path: '/films', component: '@/pages/films/index' },
    { path: '/cinemas', component: '@/pages/cinemas/index' },
  ],
  fastRefresh: {},
});
