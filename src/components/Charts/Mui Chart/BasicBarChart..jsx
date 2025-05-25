// https://mui.com/x/react-charts/bars/
// https://mui.com/x/react-charts/bar-demo/
// https://mui.com/x/api/charts/bar-plot/
// https://mui.com/x/api/charts/bar-plot/#props

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

 const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

 function valueFormatter(value) {
  return `${value}mm`;
}

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];



export function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ 
        scaleType: 'band', 
        dataKey: 'month',
        // categoryGapRatio: 0.6,                               // The categoryGapRatio defines the gap between two categories
        // barGapRatio: 0.4,                                    // The barGapRatio defines the gap between two bars of the same category.
        // tickPlacement:middle                                 //  tickPlacement property is used to set the placement of the ticks on the axis.
        // tickLabelPlacement: tick                             // The tickLabelPlacement property is used to set the placement of the tick labels on the axis.
        // tickCount: 5,                                        // The tickCount property is used to set the number of ticks on the axis.
        // tickSize: 10,                                        // The tickSize property is used to set the size of the ticks on the axis.
        // tickFormatter: (value) => value.toUpperCase(),       // The tickFormatter property is used to format the tick values.

     }]}

     // https://mui.com/x/api/charts/bar-plot/#props   [ API DOCUMENTATION ] 

     slotProps={{ legend: { hidden: false} }}                   //  The slotProps property is used to customize the appearance of the legend.
     grid={{ vertical: true , horizontal:false }}               // The grid property is used to display the grid lines on the chart.

     borderRadius={10}                                          // The borderRadius property is used to set the border radius of the bars.
     barSize={20}                                               // The barSize property is used to set the size of the bars.
     barLabel="value"                                           // The barLabel property is used to display the value of the bars.

     skipAnimation={true}                              // The skipAnimation property is used to skip the animation of the chart.





      series={[
        { dataKey: 'london', label: 'London', valueFormatter },
        { dataKey: 'paris', label: 'Paris', valueFormatter },
        { dataKey: 'newYork', label: 'New York', valueFormatter },
        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}


export function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"   // The layout property is used to change the orientation of the chart.
      {...chartSetting}
    />
  );
}


export function StackedBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}


export  function PositiveAndNegativeBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        {
          data: pData,
          label: 'pv',
        },
        {
          data: uData,
          label: 'uv',
        },
      ]}
      xAxis={[
        {
          data: xLabels,
          scaleType: 'band',
        },
      ]}
      yAxis={[{ max: 10000 }]}
    />
  );
}