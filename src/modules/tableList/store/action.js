// import * as constants from './constant'
import services from '../../../conf/services'
import http from '../../../http'

// 执行登陆操作
export async function getTabListByRd({ commit }, data) {
  let res = await http.$crm.post(services.getTabListByRd, data)
  console.log('tablist11111111', res)
}
