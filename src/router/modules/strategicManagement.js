import Layout from '@/layout'
export default {
        path: '/policy',
        component: Layout,
        children: [{
          path: '/policy/index',
          name: 'StrategicManagement',
          component: () => import('@/views/StrategicManagement/index'),
          meta: { title: '策略管理', icon: "celue"}
        }]
}