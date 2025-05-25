// https://mui.com/x/react-charts/pie/
// https://mui.com/x/react-charts/pie/#api
// https://mui.com/x/api/charts/pie-arc/


import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';


const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
  { label: 'Group E', value: 278 },
  { label: 'Group F', value: 189 },
];
const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];
const data2 = [
  { label: 'A1', value: 100 },
  { label: 'A2', value: 300 },
  { label: 'B1', value: 100 },
  { label: 'B2', value: 80 },
  { label: 'B3', value: 40 },
  { label: 'B4', value: 30 },
  { label: 'B5', value: 50 },
  { label: 'C1', value: 100 },
  { label: 'C2', value: 200 },
  { label: 'D1', value: 150 },
  { label: 'D2', value: 50 },
];


const size = {
  width: 400,
  height: 200,
};
const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}


const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};



export  function BasicPie() {
  return (
    <PieChart
      colors={['red', 'blue', 'green']} // Use palette
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A', color: 'red' }, // Use color property
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],

          // https://mui.com/x/react-charts/pie/#sizing   [SIZING DOC ]
            // innerRadius: 30,  // innerRadius The radius between the center and the beginning of the arc.
            // outerRadius: 100, // outerRadius The radius between the center and the end of the arc.
            // paddingAngle: 5,  // paddingAngle The angle between each sector.
            // cornerRadius: 5,  // cornerRadius The radius of the sector's corner.
            // startAngle: -45,  // startAngle The angle of the first sector
            // endAngle: 225,    // endAngle The angle of the last sector
            // cx: 150,          // cx The x-coordinate of the center of the pie chart.
            // cy: 150,          // cy The y-coordinate of the center of the pie chart.


          // https://mui.com/x/react-charts/pie/#labels     [LABELS DOC ]
            // arcLabel: (item) => `${item.value}%`,        // arcLabel The label of the sector.
            // arcLabelMinAngle: 60,                       // arcLabelMinAngle The minimum angle for showing the label.   
            // arcLabelRadius: '70%',                     // arcLabelRadius The radius of the label.

        
          // https://mui.com/x/react-charts/pie/#highlight  [HIGHLIGHT DOC ]
          // https://mui.com/x/react-charts/highlighting/#highlighting-series   [HIGHLIGHT SERIES DOC ]
            // highlightScope: { fade: 'global', highlight: 'item' }
           // faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }
        },
      ]}
          // https://mui.com/x/react-charts/pie/#animation  [ANIMATION DOC ]
            //   skipAnimation={true}
      width={400}
      height={200}
    />
  );
}


export function TwoLevelPieChart() {
  return (
    <PieChart
      series={[
        {
          innerRadius: 0,
          outerRadius: 80,
          data: data1,
        },
        {
          innerRadius: 100,
          outerRadius: 120,
          data: data2,
        },
      ]}
      width={400}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}


export  function StraightAnglePieChart() {
  return (
    <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          data,
        },
      ]}
      height={300}
    />
  );
}


export function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
        margin=  { {right: 5} }
        width = {200}
        height = {200}
        legend = { {hidden : true} }
    />
  );
}


export function PieChartWithPaddingAngle() {
  return (
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
  );
}


export function PieChartWith90Degree() {
    return (
        <PieChart
            series={[
            {
                startAngle: -90,
                endAngle: 90,
                paddingAngle: 5,
                innerRadius: 60,
                outerRadius: 80,
                data,
            },
            ]}
            margin={{ right: 5 }}
            width={200}
            height={200}
            slotProps={{
            legend: { hidden: true },
            }}
        />
    );
}


export function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
  );
}
PieCenterLabel.propTypes = {
  children: PropTypes.node.isRequired,
};


export function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: data2,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}


export  function BasicPieWithConnerRadius() {
  return (
    <PieChart
      colors={['red', 'blue', 'green']} // Use palette
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A', color: 'red' }, // Use color property
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],

            innerRadius: 30,  
            outerRadius: 100, 
            paddingAngle: 5,  
            cornerRadius: 5,  
            startAngle: -45,  
            endAngle: 225,    
            cx: 150,          
            cy: 150,          

        },
      ]}
      width={400}
      height={200}
    />
  );
}