import Layout from '@/layout'
export default {
  path: '/vm',
  component: Layout,
//   redirect: '/vm/index',
  name: 'DeviceManagement',
  meta: { title: '设备管理', icon: 'shebei' },
  children: [
    {
      path: 'index',
      name: 'DeviceManage',
      component: () => import('@/views/DeviceManagement/DeviceManage/index'),
      meta: { title: '设备管理' },
    },
    {
      path: 'status',
      name: 'DeviceStatus',
      component: () => import('@/views/DeviceManagement/DeviceStatus/index'),
      meta: { title: '设备状态' },
    },
    {
      path: 'type',
      name: 'DeviceType',
      component: () => import('@/views/DeviceManagement/DeviceType/index'),
      meta: { title: '设备类型管理' },
    },
  ],
}
