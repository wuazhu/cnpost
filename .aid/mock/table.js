let _ = require('lodash')

module.exports = [
  {
    url: '/mock/getTabListByRd',
    method: 'post',
    type: 'func',
    response: req => {
      let allData = [
        {
          name: '吴彦祖',
          partyId: '110101199410118888',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '亚信',
          partyId: 25,
          address: '北京市海淀区西二旗软件园西区'
        },
        {
          name: '饿了么',
          partyId: 'MA5ARKHX5',
          address: '上海市浦东新区世纪大道XXX'
        },
        {
          name: '腾讯',
          partyId: '91440300MA5F291H0Y',
          address: '深圳市XXXXXXXXXXXXXXXX'
        },
        {
          name: '吴彦祖',
          partyId: '110101199410118888',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '亚信',
          partyId: 25,
          address: '北京市海淀区西二旗软件园西区'
        },
        {
          name: '饿了么',
          partyId: 'MA5ARKHX5',
          address: '上海市浦东新区世纪大道XXX'
        },
        {
          name: '腾讯',
          partyId: '91440300MA5F291H0Y',
          address: '深圳市XXXXXXXXXXXXXXXX'
        },
        {
          name: '吴彦祖',
          partyId: '110101199410118888',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '亚信',
          partyId: 25,
          address: '北京市海淀区西二旗软件园西区'
        },
        {
          name: '饿了么',
          partyId: 'MA5ARKHX5',
          address: '上海市浦东新区世纪大道XXX'
        },
        {
          name: '腾讯',
          partyId: '91440300MA5F291H0Y',
          address: '深圳市XXXXXXXXXXXXXXXX'
        },
        {
          name: '吴彦祖',
          partyId: '110101199410118888',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '亚信',
          partyId: 25,
          address: '北京市海淀区西二旗软件园西区'
        },
        {
          name: '饿了么',
          partyId: 'MA5ARKHX5',
          address: '上海市浦东新区世纪大道XXX'
        },
        {
          name: '腾讯',
          partyId: '91440300MA5F291H0Y',
          address: '深圳市XXXXXXXXXXXXXXXX'
        },
        {
          name: '吴彦祖',
          partyId: '110101199410118888',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '亚信',
          partyId: 25,
          address: '北京市海淀区西二旗软件园西区'
        },
        {
          name: '饿了么',
          partyId: 'MA5ARKHX5',
          address: '上海市浦东新区世纪大道XXX'
        },
        {
          name: '腾讯',
          partyId: '91440300MA5F291H0Y',
          address: '深圳市XXXXXXXXXXXXXXXX'
        },
        {
          name: '吴彦祖',
          partyId: '110101199410118888',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '亚信',
          partyId: 25,
          address: '北京市海淀区西二旗软件园西区'
        },
        {
          name: '饿了么',
          partyId: 'MA5ARKHX5',
          address: '上海市浦东新区世纪大道XXX'
        },
        {
          name: '腾讯',
          partyId: '91440300MA5F291H0Y',
          address: '深圳市XXXXXXXXXXXXXXXX'
        },
        {
          name: '阿里爸爸',
          partyId: '91440300MA5F291H0Y',
          address: '杭州市XXXXXXXXXXXXXXXX'
        }
      ]
      let sliceList = []
      if (req.body && req.body.currentPage) {
        sliceList = _.chunk(allData, req.body.pageSize)[req.body.currentPage - 1]
      }
      let ret = {
        count: allData.length,
        list: sliceList
      }
      return ret
    }
  }
]
