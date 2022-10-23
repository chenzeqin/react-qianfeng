import React, { createRef, useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { getLineChartData, getPieChartData } from '../../../api/news';
import { useResize } from '../LineChart/useResize';

export default function PieChart() {
  const chartDiv = createRef<HTMLDivElement>()
  const myChart = useRef<echarts.ECharts>()

  useResize(myChart)

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    getPieChartData().then((data) => {
      myChart.current = echarts.init(chartDiv.current!);
      // 绘制图表
      myChart.current?.setOption({
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            // data: [
            //   { value: 1048, name: 'Search Engine' },
            //   { value: 735, name: 'Direct' },
            //   { value: 580, name: 'Email' },
            //   { value: 484, name: 'Union Ads' },
            //   { value: 300, name: 'Video Ads' }
            // ],
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })

    });
  }, [chartDiv])


  return (
    <div style={{ width: '100%', height: '300px' }} ref={chartDiv}></div>
  )
}
