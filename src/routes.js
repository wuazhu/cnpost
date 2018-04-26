/**
 * @file 本文件为路由对象实现
 * @author PRD UX R&D Dept.
 */

import dashboard from './modules/dashboard/route'

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
      ...dashboard
    ]
  },
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
