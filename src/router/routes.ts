const routes = [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('@/views/Login.vue'),
  },
];

export default routes;
