/**
 * @file 本文件为路由对象实现
 * @author PRD UX R&D Dept.
 */

export default [
  {
    name: 'welcome',
    path: '/',
    component: require('./modules/welcome.vue')
  },
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
