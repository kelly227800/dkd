import Layout from '@/layout'
export default {
  path: '/user',
  component: Layout,
//   redirect: '/user/index',
  name: 'PeopleManagement',
  meta: { title: '人员管理', icon: 'renyuan' },
  children: [
    {
      path: 'index',
      name: 'PeopleList',
      component: () => import('@/views/PeopleManagement/PeopleList/index'),
      meta: { title: '人员列表' },
    },
    {
      path: 'user-task-stats',
      name: 'PeopleStatistical',
      component: () => import('@/views/PeopleManagement/PeopleStatistical/index'),
      meta: { title: '人效统计' },
    },
    {
      path: 'user-work',
      name: 'PeopleStatistical',
      component: () => import('@/views/PeopleManagement/PeopleStatistical/index'),
      meta: { title: '工作量列表' },
    },
  ],
}
