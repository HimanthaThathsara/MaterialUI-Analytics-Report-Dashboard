// https://mui.com/x/react-charts/lines/
// https://mui.com/x/react-charts/line-demo/

// Mostly the Line chart and Area chart Share the same Parameters and APIS.


import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AreaPlot, LineChart } from '@mui/x-charts/LineChart';
import {LinePlot,MarkPlot,lineElementClasses,markElementClasses,} from '@mui/x-charts/LineChart';
import { green, red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import {  areaElementClasses } from '@mui/x-charts/LineChart';
import PropTypes from 'prop-types';


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
const data = [4000, 3000, -1000, 500, -2100, -250, 3490];
const xData = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];


function ColorSwich({ threshold, color1, color2, id }) {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  const scale = useYScale(); // You can provide the axis Id if you have multiple ones
  const y0 = scale(threshold); // The coordinate of of the origine
  const off = y0 !== undefined ? y0 / svgHeight : 0;

  return (
    <defs>
      <linearGradient
        id={id}
        x1="0"
        x2="0"
        y1="0"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
      >
        <stop offset={off} stopColor={color1} stopOpacity={1} />
        <stop offset={off} stopColor={color2} stopOpacity={1} />
      </linearGradient>
    </defs>
  );
}

function ColorPalette({ id }) {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  const scale = useYScale(); // You can provide the axis Id if you have multiple ones

  return (
    <defs>
      <linearGradient
        id={id}
        x1="0"
        x2="0"
        y1="0"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
      >
        <stop
          offset={scale(5000) / svgHeight}
          stopColor={green[400]}
          stopOpacity={1}
        />
        <stop
          offset={scale(4000) / svgHeight}
          stopColor={green[400]}
          stopOpacity={1}
        />
        <stop
          offset={scale(4000) / svgHeight}
          stopColor={green[300]}
          stopOpacity={1}
        />
        <stop
          offset={scale(3000) / svgHeight}
          stopColor={green[300]}
          stopOpacity={1}
        />
        <stop
          offset={scale(3000) / svgHeight}
          stopColor={green[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(2000) / svgHeight}
          stopColor={green[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(2000) / svgHeight}
          stopColor={green[100]}
          stopOpacity={1}
        />
        <stop
          offset={scale(1000) / svgHeight}
          stopColor={green[100]}
          stopOpacity={1}
        />
        <stop
          offset={scale(1000) / svgHeight}
          stopColor={green[50]}
          stopOpacity={1}
        />
        <stop offset={scale(0) / svgHeight} stopColor={green[50]} stopOpacity={1} />
        <stop offset={scale(0) / svgHeight} stopColor={red[100]} stopOpacity={1} />
        <stop
          offset={scale(-1000) / svgHeight}
          stopColor={red[100]}
          stopOpacity={1}
        />
        <stop
          offset={scale(-1000) / svgHeight}
          stopColor={red[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(-2000) / svgHeight}
          stopColor={red[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(-3000) / svgHeight}
          stopColor={red[300]}
          stopOpacity={1}
        />
      </linearGradient>
    </defs>
  );
}

ColorPalette.propTypes = {
  id: PropTypes.string.isRequired,
};
ColorSwich.propTypes = {
  threshold: PropTypes.number.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};



export function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],

          // https://mui.com/x/react-charts/lines/#curve [CURVE DOC]
          curve: "linear" , // curve: "monotoneX" | "monotoneY" | "natural" | "linear" | "step" | "stepBefore" | "stepAfter" | "basis" | "cardinal" | "catmullRom" | "monotone"
        },
      ]}
      width={500}
      height={300}

          // https://mui.com/x/react-charts/stacking/ [STACKING DOC] 
          // stack: 'total', // Stack the series

          // https://mui.com/x/react-charts/lines/#partial-data [PARTIAL DATA DOC]
          //Line series can have fewer data points than the axis. You can handle lines with partial data or data starting at different points by providing null values
          //By default, the tooltip does not show series if they have no value. To override this behavior, use the valueFormatter to return a string if the value is null or undefined.
          // connectNulls: true // Connect null values

          // https://mui.com/x/react-charts/lines/#click-event [CLICK EVENT DOC]

          // https://mui.com/x/api/charts/animated-area/ [ANIMATED AREA DOC]

    />
  );
}


export function TinyLineChart() {
  return (
    <ChartContainer
      width={500}
      height={300}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#8884d8',
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
  );
}


export function DashedLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: '#fff',
        },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: 'none',
        },
      }}
    />
  );
}




export  function BasicArea() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true, // Enable area
          showMark: true, // Enable mark on the line 
          // showMark: ({ index }) => index % 2 === 0, // Show mark on every 2nd data point

          // https://mui.com/x/react-charts/lines/#baseline [BASELINE DOC]
          baseline: 'min', // Baseline for the area 



          // https://mui.com/x/react-charts/stacking/ [STACKING DOC] 
          // stack: 'total', // Stack the series

          // https://mui.com/x/react-charts/lines/#partial-data [PARTIAL DATA DOC]
          //Line series can have fewer data points than the axis. You can handle lines with partial data or data starting at different points by providing null values
          //By default, the tooltip does not show series if they have no value. To override this behavior, use the valueFormatter to return a string if the value is null or undefined.

          // https://mui.com/x/react-charts/lines/#click-event [CLICK EVENT DOC]

          // https://mui.com/x/api/charts/animated-area/ [ANIMATED AREA DOC]

          // https://mui.com/x/api/charts/area-element/ [AREA ELEMENT DOC]

          // https://mui.com/x/api/charts/area-plot/ [AREA PLOT DOC]

            // https://mui.com/x/api/charts/area-series/ [AREA SERIES DOC]
        },
      ]}
      grid={{ vertical: false, horizontal: false }} // Show grid lines

      width={500}
      height={300}
    />
  );
}


export  function TinyAreaChart() {
  return (
    <ChartContainer
      width={500}
      height={300}
      series={[
        {
          data: uData,
          type: 'line',
          label: 'uv',
          area: true,
          stack: 'total',
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    >
      <AreaPlot />
    </ChartContainer>
  );
}


export  function AreaChartFillByValue() {
  return (
    <Stack direction="column" width="100%" spacing={1}>
      <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        yAxis={[{ min: -3000, max: 4000 }]}
        series={[{ data, showMark: false, area: true }]}
        height={200}
        margin={{ top: 20, bottom: 30, left: 75 }}
        sx={{
          [`& .${areaElementClasses.root}`]: {
            fill: 'url(#swich-color-id-1)',
          },
        }}
      >
        <ColorSwich
          color1="#11B678" // green
          color2="#FF3143" // red
          threshold={0}
          id="swich-color-id-1"
        />
        <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-1)" />
      </LineChart>

      <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        yAxis={[{ min: -3000, max: 4000 }]}
        series={[{ data, showMark: false, area: true }]}
        height={200}
        margin={{ top: 20, bottom: 30, left: 75 }}
        sx={{
          [`& .${areaElementClasses.root}`]: {
            fill: 'url(#swich-color-id-2)',
          },
        }}
      >
        <ColorPalette id="swich-color-id-2" />
        <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-2)" />
      </LineChart>
    </Stack>
  );
}

