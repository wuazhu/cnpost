<template lang="html">
  <div class="cp-container">
    <div class="index-charts">
      <div class="row">
        <div class="col-3">
          <t-card>
            <div slot="head" class="d-flex text-sm text-muted index-card-header justify-content-between"><span>总销售额</span> <i class="aid aid-question-mark-circle"></i></div>
            <div class="index-card">
              <h2 class="money-data">¥ 126,560</h2>
              <div class="data-box">
                <t-chart ref="lineSimple" :options="lineChart" auto-resize chart-width="100%" chart-height="60px"></t-chart>
              </div>
            </div>
            <div slot="foot" class="card-foot">
              <span class="text-muted text-sm">日均销售额</span> <span class="text-gray">￥12,423</span>
            </div>
          </t-card>
        </div>
        <div class="col-3">
          <t-card>
            <div slot="head" class="d-flex text-sm text-muted index-card-header justify-content-between"><span>总销售额</span> <i class="aid aid-question-mark-circle"></i></div>
            <div class="index-card">
              <h2 class="money-data">¥ 126,560</h2>
              <div class="data-box">
                <t-chart ref="lineSimple" :options="pieChart" auto-resize chart-width="100%" chart-height="60px"></t-chart>
              </div>
            </div>
            <div slot="foot" class="card-foot">
              <span class="text-muted text-sm">日均销售额</span> <span class="text-gray">￥12,423</span>
            </div>
          </t-card>
        </div>
        <div class="col-3">
          <t-card>
            <div slot="head" class="d-flex text-sm text-muted index-card-header justify-content-between"><span>总销售额</span> <i class="aid aid-question-mark-circle"></i></div>
            <div class="index-card">
              <h2 class="money-data">¥ 126,560</h2>
              <div class="data-box">
                <t-chart ref="lineSimple" :options="lineChart" auto-resize chart-width="100%" chart-height="80px"></t-chart>
              </div>
            </div>
            <div slot="foot" class="card-foot">
              <span class="text-muted text-sm">日均销售额</span> <span class="text-gray">￥12,423</span>
            </div>
          </t-card>
        </div>
        <div class="col-3">
          <t-card>
            <div slot="head" class="d-flex text-sm text-muted index-card-header justify-content-between"><span>总销售额</span> <i class="aid aid-question-mark-circle"></i></div>
            <div class="index-card">
              <h2 class="money-data">¥ 126,560</h2>
              <div class="data-box">
                <t-chart ref="lineSimple" :options="pieChart" auto-resize chart-width="100%" chart-height="60px"></t-chart>
              </div>
            </div>
            <div slot="foot" class="card-foot">
              <span class="text-muted text-sm">日均销售额</span> <span class="text-gray">￥12,423</span>
            </div>
          </t-card>
        </div>
      </div>
    </div>
    <div class="index-tabs">
      <t-tabs>

        <transition name="move-right">
          <t-tab-panel label="客户渠道" name="tab-1">
            <div class="row">
              <div class="col-8">
                <div class="data-box">
                  <t-chart ref="lineSimple" :options="pieChart" auto-resize chart-width="100%" chart-height="280px"></t-chart>
                </div>
              </div>
              <div class="col-4">
                <p class="text-gray font-weight-bold">客户消费能力排行</p>
                <ol>
                  <li v-for="(item, index) in custShopping" :key="item.name" class="font-weight-light">
                    <span>
                      <i :class="['icon-circle', {'bg-gray-darker text-white': index < 3}]">{{ index + 1 }}</i>
                      <span class="cust-name font-weight-light">{{ item.name }}</span>
                    </span>
                    <span>{{ item.value }}</span>
                  </li>
                </ol>
              </div>
            </div>
          </t-tab-panel>
        </transition>
        <t-tab-panel label="客户渠道" name="tab-2">
          <div class="row">
            <div class="col-8">
              <div class="data-box">
                <t-chart ref="lineSimple" :options="pieChart" auto-resize chart-width="100%" chart-height="280px"></t-chart>
              </div>
            </div>
            <div class="col-4">
              <p class="text-gray font-weight-bold">客户消费能力排行</p>
              <ol>
                <li v-for="(item, index) in custShopping" :key="item.name" class="font-weight-light">
                  <span>
                    <i :class="['icon-circle', {'bg-gray-darker text-white': index < 3}]">{{ index + 1 }}</i>
                    <span class="cust-name font-weight-light">{{ item.name }}</span>
                  </span>
                  <span>{{ item.value }}</span>
                </li>
              </ol>
            </div>
          </div>
        </t-tab-panel>
      </t-tabs>
    </div>
  </div>
</template>

<script>
import lineChart from '../charts/lineCharts'
import pieChart from '../charts/pieCharts'

export default {
  data() {
    return {
      lineChart,
      pieChart,
      custShopping: [
        {
          name: '金融储蓄1',
          value: 234890
        },
        {
          name: '金融储蓄2',
          value: 234890
        },
        {
          name: '金融储蓄3',
          value: 234890
        },
        {
          name: '金融储蓄4',
          value: 234890
        },
        {
          name: '金融储蓄5',
          value: 234890
        },
        {
          name: '金融储蓄6',
          value: 234890
        },
        {
          name: '金融储蓄7',
          value: 234890
        }
      ]
    }
  },
  mounted() {
    this.lineChart = lineChart
  }
}
</script>

<style lang="less">
.index-card-header {
  width: 100%;
}
.index-card {
  .data-box {
    padding: 10px 0;
    height: 80px;
    /* box-sizing: content-box; */
  }

}
.index-charts {
  padding-top: 20px;
  .card {
    border: none;
    border-radius: 0;
    .card-header {
      background: #fff;
    }
    .card-block {
      padding: 0 1.25rem;
    }
  }
}
.index-tabs {
  background: #fff;
  margin-top: 20px;
  .row {
    > div {
      padding-top: 20px;
    }
    ol {
      padding-right: 30px;
      padding-bottom: 20px;
      li {
        text-align: center;
        line-height: 20px;
        display: flex;
        flex: 1;
        margin-top: 18px;
        justify-content: space-between;
        .icon-circle {
          color: rgba(0,0,0,.65);
          display: inline-block;
          background: #f5f5f5;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 20px;
          font-style: normal;
        }
      }
    }
  }
  .nav-tabs {
    padding: 0 10px;
  }
}
</style>
