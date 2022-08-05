import Layout from '@/layout'
export default {
        path: '/order',
        component: Layout,
        children: [{
          path: '/order/index',
          name: 'OrderManagement',
          component: () => import('@/views/OrderManagement/index'),
          meta: { title: '订单管理', icon: "dingdan"}
        }]
}