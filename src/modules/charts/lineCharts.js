let option = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,0.8)',
    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
    textStyle: {
      color: '#f9f9f9'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    show: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    smooth: true,
    data: [70, 90, 41, 80, 50, 30, 62],
    type: 'line',
    areaStyle: {
      color: '#6f43e2'
    }
  }],
  grid: {
    // 设置图表在容器中开始绘制的坐标
    left: 0,
    right: 0,
    bottom: 80
  }

}

export default option
