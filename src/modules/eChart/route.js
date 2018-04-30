const chart1 = r => require.ensure([], () => r(require('./chart1.vue')), 'charts')
// const backEndPaging = r => require.ensure([], () => r(require('./backEndPaging.vue')), 'charts')

const routes = [
  {
    path: 'chart1',
    name: 'chart1',
    component: chart1,
    meta: { breadName: '图表1', title: '图表1' }
  },
  {
    path: 'chart2',
    name: 'chart2',
    component: chart1,
    meta: { breadName: '图表1', title: '图表1' }
  }
]

export default routes
