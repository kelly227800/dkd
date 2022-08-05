import Layout from '@/layout'
export default {
  path: '/sku',
  component: Layout,
//   redirect: '/sku/sku-class',
  name: 'MerchandiseManagement',
  meta: { title: '商品管理', icon: 'shangpin' },
  children: [
    {
      path: 'sku-class',
      name: 'CommodityManage',
      component: () => import('@/views/MerchandiseManagement/CommodityManage/index'),
      meta: { title: '商品类型' },
    },
    {
      path: 'sku',
      name: 'CommodityType',
      component: () => import('@/views/MerchandiseManagement/CommodityType/index'),
      meta: { title: '商品管理' },
    },
  ],
}
