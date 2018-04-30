/**
 * @file 本文件为路由对象实现
 * @author PRD UX R&D Dept.
 */

// import dashboard from './modules/dashboard/route'
import tableList from './modules/tableList/route'
import charts from './modules/eChart/route'
console.log('tableList', tableList)
export default [
  {
    name: 'login',
    path: '/',
    component: require('./modules/login/login.vue')
  },
  {
    name: 'dashboard',
    path: '/crm/',
    component: require('./modules/welcome.vue'),
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: require('./modules/dashboard/index.vue')
      },
      ...charts,
      ...tableList
    ]
  },
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
