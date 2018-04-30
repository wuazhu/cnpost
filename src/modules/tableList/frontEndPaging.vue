<template>
  <div class="front-end-paging">
    <!--列表操作-->
    <div class="operatearea clearfix">
      <!--查询-->
      <div class="searcharea">
        <div class="autosearch">
          <t-form ref="searchForm" style="float:left;">
            <t-form-item prop="queryCustomer">
              <t-input
                v-model="queryCustomer"
                size="sm"
                placeholder="请输入查询信息"
                @on-enter="searchCusList"
              ></t-input>
            </t-form-item>
          </t-form>
          <t-button
            size="sm"
            class="ml-2"
            type="outline-primary"
            @click.native="searchCusList"
          >查询</t-button>
        </div>
      </div>
    </div>
    <t-table :columns="columns" :data="data">
    </t-table>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'FrontendPaging',
  data() {
    return {
      queryCustomer: '',
      columns: [
        {
          title: '客户名称',
          key: 'name'
        },
        {
          title: '主码',
          key: 'partyId'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作',
          width: 80,
          render: (h, params) => {
            return h('div', {}, [
              h(
                'span',
                {
                  style: {
                    color: '#108eea',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  },
                  on: {
                    click() {
                      alert('去修改')
                    }
                  }
                },
                ['修改']
              )
            ])
          }
        }
      ],
      data: [
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
        }
      ]
    }
  },
  created() {
    this.getTabList({
      currentPage: 1,
      pageSize: 10
    })
  },
  methods: {
    ...mapActions('tableList', {
      getTabList: 'getTabList'
    }),
    searchCusList() { // 查询列表后端分页
      /* this.searchBtnDisabled = true
      try {
        let data = {
          current: 1,
          size: this.pageSize,
          customerID: this.$store.state.login.staffId,
          statusSign: "2"
        }
        this.queryList = []
        this.showEmptyBg = false
        this._tableLoading = true
        let res = await this.loadCustomerList(data)
        this.searchBtnDisabled = false
        if (res && res.resCode === '0') {
          if (res.resList.length > 0) {
            this.result = res.resList
            this._changePageWithServer = true // 后台分页
            setTimeout(() => {
              this._tableLoading = false
              this.totalLen = res.resLen
              this.queryList = this.result
            }, 200)
          } else {
            this.showEmptyBg = true
            this._tableLoading = false
          }
        } else {
          this._tableLoading = false
          this.showEmptyBg = true
          let errMsg = res && res.resMsg ? res.resMsg : '客户列表请求错误！'
          this.$Notice.danger({
            title: '请求错误',
            duration: 10,
            desc: `<div style="width: 250px;word-wrap:break-word;max-height: 40px;">${errMsg}</div>`
          })
          console.error(errMsg)
        }
      } catch (error) {
        this._tableLoading = false
        this.showEmptyBg = true
        this.$Notice.danger({
          title: '列表请求错误',
          duration: 10,
          desc: `<div style="width: 250px;word-wrap:break-word;max-height: 40px;">${error}</div>`
        })
        console.error(error)
        this.searchBtnDisabled = false
      }
      this._clearSessiondata() */
    }
  }
}
</script>

<style scoped lang="less">
.front-end-paging {
  .operatearea {
    padding: 15px 0;
    .searcharea {
      float: right;
      input {
        border: 0;
      }
      .autosearch {
        float: right;
        position: relative;
      }
    }
  }
}
</style>
