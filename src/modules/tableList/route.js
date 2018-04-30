const frontEndPaging = r => require.ensure([], () => r(require('./frontEndPaging.vue')), 'tableList')
const backEndPaging = r => require.ensure([], () => r(require('./backEndPaging.vue')), 'tableList')

const routes = [
  {
    path: 'frontEndPaging',
    name: 'frontEndPaging',
    component: frontEndPaging,
    meta: { breadName: '列表操作', title: '前端分页列表操作' }
  },
  {
    path: 'backEndPaging',
    name: 'backEndPaging',
    component: backEndPaging,
    meta: { breadName: '列表操作', title: '后端端分页列表操作' }
  }
]

export default routes
