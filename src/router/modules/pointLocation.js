import Layout from '@/layout'
export default {
  path: '/node',
  component: Layout,
//   redirect: '/node/region',
  name: 'PointLocation',
  meta: { title: '点位管理', icon: 'dianwei' },
  children: [
    {
      path: 'region',
      name: 'AreaManage',
      component: () => import('@/views/PointLocation/AreaManage/index'),
      meta: { title: '区域管理' },
    },
    {
      path: 'node',
      name: 'PointLocManage',
      component: () => import('@/views/PointLocation/PointLocManage/index'),
      meta: { title: '点位管理' },
    },
    {
      path: 'partner',
      name: 'OfficialPartner',
      component: () => import('@/views/PointLocation/OfficialPartner/index'),
      meta: { title: '合作商管理' },
    },
  ],
}
