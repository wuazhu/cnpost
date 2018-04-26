/**
 * @file 本文件为路由对象实现
 * @author PRD UX R&D Dept.
 */

import dashboard from './modules/dashboard/route'

export default [
  {
    name: 'login',
    path: '/',
    component: require('./modules/login.vue')
  },
  {
    name: 'crm.portal',
    path: '/crm/',
    component: require('./modules/dashboard/index.vue'),
    children: []
  },
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
