import Layout from '@/layout'
export default {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
          path: '/home',
          name: 'Home',
          component: () => import('@/views/Home/index'),
          meta: { title: '帝可得', icon: "home"}
        }]
}