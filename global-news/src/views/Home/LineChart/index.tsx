import React, { createRef, useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { getLineChartData } from '../../../api/news';
import { useResize } from './useResize';

export default function LineChart() {
  const chartDiv = createRef<HTMLDivElement>()
  const myChart = useRef<echarts.ECharts>()

  useResize(myChart)

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    getLineChartData().then(({ xAxis, yAxis }) => {
      myChart.current = echarts.init(chartDiv.current!);
      // 绘制图表
      myChart.current?.setOption({
        title: {
          text: '新闻分类统计'
        },
        tooltip: {},
        xAxis: {
          // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          data: xAxis,
        },
        yAxis: {},
        series: [{
          name: '数量',
          type: 'bar',
          // data: [5, 20, 36, 10, 10, 20]
          data: yAxis
        }]
      })

    });
  }, [chartDiv])


  return (
    <div id="line-chart" style={{ width: '100%', height: '300px' }} ref={chartDiv}></div>
  )
}
