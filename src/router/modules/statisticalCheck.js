import Layout from '@/layout'
export default {
        path: '/report',
        component: Layout,
        children: [{
          path: '/report/index',
          name: 'StatisticalCheck',
          component: () => import('@/views/StatisticalCheck/index'),
          meta: { title: '对账统计', icon: "duizhang"}
        }]
}