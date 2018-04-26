<template lang="html">
  <div class="cp-container">
    <div class="">
      <div class="row">
        <div class="col-3">
          <t-card>
            <div slot="head" class="d-flex index-card-header justify-content-between"><span>总销售额</span> <i class="aid aid-question-mark-circle"></i></div>
            <div class="index-card">
              <h2 class="money-data">¥ 126,560</h2>
              <div class="data-box border-bottom">
                <t-chart :options="lineChart" ref="lineSimple" auto-resize></t-chart>
              </div>
            </div>
          </t-card>
        </div>
        <div class="col-3">
          <t-card>
            <span slot="head">访问量</span>
            <span>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
            <a slot="foot" href="#" class="btn btn-primary btn-sm"><span>Go somewhere</span></a>
          </t-card>
        </div>
        <div class="col-3">
          <t-card>
            <span slot="head">支付笔数</span>
            <span>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
            <a slot="foot" href="#" class="btn btn-primary btn-sm"><span>Go somewhere</span></a>
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

export default {
  data() {
    return {
      lineChart,
    }
  }
}
</script>

<style lang="less">
.index-card-header {
  width: 100%;
}
.index-card {
  .data-box {
    height: 80px;
  }
}
</style>
