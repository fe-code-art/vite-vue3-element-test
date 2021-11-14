const routes = [
  {
    path: '/home',
    name: 'home',
    title: "首页",
    component: () => import("@/components/Home.vue")
  },
  {
    path: '/news',
    name: 'news',
    title: "新闻",
    component: () => import("@/components/News.vue")
  }
]

export default routes