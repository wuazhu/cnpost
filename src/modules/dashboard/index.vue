<template lang="html">
  <div class="cp-container">
    <div class="">
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
            <span slot="head">运营活动效果</span>
            <span>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
            <a slot="foot" href="#" class="btn btn-primary btn-sm"><span>Go somewhere</span></a>
          </t-card>
        </div>
      </div>
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
      pieChart
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
.card {
  .card-header {
    background: #fff;
  }
  .card-block {
    padding: 0 1.25rem;
  }
}
</style>
