import React, { useEffect } from 'react';
import * as echarts from 'echarts';

export const useResize = (chart: React.MutableRefObject<echarts.ECharts | undefined>) => {
  useEffect(() => {
    const handler = () => {
      console.info('resize')
      chart.current?.resize();
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [chart]);
};
