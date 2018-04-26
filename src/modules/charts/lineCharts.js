let option = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255,255,255,0.8)',
    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
    textStyle: {
      color: '#666'
    }
  },
  grid: {
    // top: '100',
    // left: '3%',
    // right: '4%',
    // bottom: '50',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['100', '300', '500', '700', '900', '1200', '1200以上'],
    boundaryGap: false, // 坐标轴两边留白
    alignWithLabel: true,
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#D4DFF5']
      }
    },
    axisTick: {
      show: true,
      inside: true
    },
    axisLine: {
      lineStyle: {
        color: '#666'
      }
    }
  } ],
  yAxis: {
    type: 'value',
    boundaryGap: true,
    axisLabel: {
      textStyle: {
        color: '#666',
        fontStyle: 'normal'
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      color: '#dadfea',
      inside: true
    },
    axisLabel: {
      inside: true,
      z: 10
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed'
      },
      zlevel: 9999999
    }
  },
  series: [{
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 16,
    data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300'],
    areaStyle: {
      normal: {

      }
    },
    itemStyle: {
      opacity: 0
    },
    lineStyle: {
      normal: {
        color: 'transparent'
      }
    },
    emphasis: {
      itemStyle: {
        color: '#87d857',
        borderColor: '#fff',
        borderType: 'solid',
        opacity: 1
      }
    }
  }]
}

export default option
