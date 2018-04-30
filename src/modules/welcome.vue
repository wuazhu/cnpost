<template>
  <div class="container ">
    <div class="layout layout--one-screen bg-gray-lightest-5">
      <div :class="['menu-backdrop', {'show': isOpen===true}]" @click="closeSidebar"></div>
      <div :class="['layout-sidebar bg-gray-darker show',{'layout-sidebar--folded': isOpen===false}]">
        <a href="#" class="layout-logo-left">
          <img src="/static/images/aid-logo.png" alt="" class="layout-logo-img">
          <span class="text-xxl text-white align-middle ml-1 layout-logo-text">&nbsp;&nbsp;ChinaPost</span>
        </a>
        <t-menu :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]" type="dark" accordion>
          <t-submenu name="1">
            <template slot="title">
              <t-icon type="home"></t-icon>
              <span>Dashboard</span>
            </template>
            <t-menu-item name="1-1">
              <router-link to="/crm/">Dashboard</router-link>
            </t-menu-item>
            <t-menu-item name="1-2">评论管理</t-menu-item>
            <t-menu-item name="1-3">举报管理</t-menu-item>
          </t-submenu>
          <t-submenu name="2">
            <template slot="title">
              <t-icon type="account-multiple"></t-icon>
              <span>ECharts图表</span>
            </template>
            <t-menu-item name="2-1">
              <router-link to="/crm/chart1">图标1</router-link>
            </t-menu-item>
            <t-menu-item name="2-2">
              <router-link to="/crm/chart2">图标2</router-link>
            </t-menu-item>
          </t-submenu>
          <t-submenu name="3">
            <template slot="title">
              <t-icon type="account-multiple"></t-icon>
              <span>tableList</span>
            </template>
            <t-menu-item name="3-1">
              <router-link to="/crm/frontEndPaging">frontEndPaging</router-link>
            </t-menu-item>
            <t-menu-item name="3-2">
              <router-link to="/crm/backEndPaging">backEndPaging</router-link>
            </t-menu-item>
          </t-submenu>
          <t-submenu name="4">
            <template slot="title">
              <t-icon type="chart-bar"></t-icon>
              <span>统计分析</span>
            </template>
            <t-menu-group title="使用">
              <t-menu-item name="4-1">新增和启动</t-menu-item>
              <t-menu-item name="4-2">活跃分析</t-menu-item>
              <t-menu-item name="4-3">时段分析</t-menu-item>
            </t-menu-group>
            <t-menu-group title="留存">
              <t-menu-item name="4-4">用户留存</t-menu-item>
              <t-menu-item name="4-5">流失用户</t-menu-item>
            </t-menu-group>
          </t-submenu>
        </t-menu>
      </div>
      <div class="layout-content">
        <nav class="navbar  navbar-expand-lg bg-white layout-nav--top px-4">
          <a href="javascript:;"><i class="aid aid-menu text-xxl text-gray" @click="switchedSidebarState"></i></a>

          <div class="d-inline ml-auto">
            <t-input icon="magnify" size="sm" placeholder="搜索..."></t-input>
          </div>
          <!-- <div class="d-inline ml-3">
            <t-select v-model="language" :placeholder="$t('language')" size="sm" style="width:96px;" @on-change="$_onSelectChange">
              <t-option v-for="item in languageList" :value="item.value" :key="item.value">{{ item.label }}</t-option>
            </t-select>
          </div> -->
          <t-dropdown trigger="click" placement="bottom-end">
            <t-badge class="ml-4">
              <t-avatar dot-state="danger" text="WU" size="sm"></t-avatar>
              <t-icon type="arrow-down-drop" size="20"></t-icon>
            </t-badge>
            <t-dropdown-menu slot="list">
              <t-dropdown-item>个人中心</t-dropdown-item>
              <t-dropdown-item>账号设置</t-dropdown-item>
              <t-dropdown-item>意见反馈</t-dropdown-item>
              <t-dropdown-item>退出</t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
        </nav>
        <t-breadcrumb class="px-4">
          <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
          <transition name="move-right">
            <t-breadcrumb-item href="#">二级</t-breadcrumb-item>
          </transition>
          <transition name="move-right">
            <t-breadcrumb-item href="#">三级</t-breadcrumb-item>
          </transition>
          <t-breadcrumb-item>当前页</t-breadcrumb-item>
        </t-breadcrumb>
        <div class="layout-main px-4" style="top: 105px; bottom: 50px;">
          <router-view></router-view>
          <!-- <div class="bg-white p-3" style="height: 500px;">内容区域</div> -->
        </div>
        <footer class="p-3 text-center text-gray-light text-sm">
          2011-2016 © AI design
        </footer>
      </div>
    </div>
    <!-- <div class="row text-center d-flex align-items-center justify-content-center" style="height: 600px">
      <div class="col">
        <div>
          <img src="/static/images/aid-logo.png"/>
          <h2 class="mt-2"><span>A</span><span>I</span> <span>D</span><span>E</span><span>S</span><span>I</span><span>G</span><span>N</span></h2>
          <p class="mt-2 mb-4">{{ $t('slogan') }}</p>
          <t-button type="primary" icon="plane" @click="$_onButtonClick" >{{ $t('started') }}</t-button>
          <div class="mt-5">
            <t-select v-model="language" :placeholder="$t('language')" size="sm" style="width:96px;" @on-change="$_onSelectChange">
              <t-option v-for="item in languageList" :value="item.value" :key="item.value">{{ item.label }}</t-option>
            </t-select>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
/**
 * @file 本文件为简单欢迎视图实现
 * @author PRD UX R&D Dept.
 */

// 导入国际化管理对象
import i18nManager from '../i18n'

export default {
  data() {
    return {
      languageList: [{ value: 'zh-CN', label: '简体中文' }, { value: 'en-US', label: 'en-US' }],
      language: i18nManager.language,
      reisezeTimer: null,
      manual: false, // 是否点击切换按钮
      isOpen: this.initSidebarState(),
      openPosition: this.initMenuPosition()
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (!this.manual) {
        if (this.reisezeTimer !== null) {
          clearTimeout(this.reisezeTimer)
        }
        this.reisezeTimer = setTimeout(this.onWindowResize, 400)
      } else {
        return
      }
    })
  },
  methods: {
    switchedSidebarState() {
      this.isOpen = !this.isOpen
      this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
      this.manual = true
    },
    closeSidebar() {
      this.isOpen = false
      this.openPosition = this.openPosition === 'right'
    },
    initSidebarState() {
      if (document.body.clientWidth > 992) {
        return true
      } else {
        return false
      }
    },
    initMenuPosition() {
      if (document.body.clientWidth > 992) {
        return 'down'
      } else {
        return 'right'
      }
    },
    onWindowResize() {
      if (document.body.clientWidth > 992) {
        this.isOpen = true
        this.openPosition = 'down'
      } else {
        this.isOpen = false
        this.openPosition = 'right'
      }
    },
    $_onButtonClick() {
      window.open('http://10.1.241.36:8888/')
    },
    $_onSelectChange(newLanguage) {
      // 改变语言
      i18nManager.changeLanguage(newLanguage)
    }
  }
}
</script>

<style lang="less" scoped>
.menu {
  .menu__item {
    a {
        flex: 1;
        display: block;
    }
  }
}
</style>
