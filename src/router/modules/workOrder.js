import Layout from '@/layout'
export default {
  path: '/task',
  component: Layout,
//   redirect: '/task/business',
  name: 'WorkOrder',
  meta: { title: '工单管理', icon: 'gongdan' },
  children: [
    {
      path: 'business',
      name: 'Operate',
      component: () => import('@/views/WorkOrder/Operate/index'),
      meta: { title: '运营工单' },
    },
    {
      path: 'operation',
      name: 'OperationMaintenance',
      component: () => import('@/views/WorkOrder/OperationMaintenance/index'),
      meta: { title: '运维工单' },
    },
  ],
}
