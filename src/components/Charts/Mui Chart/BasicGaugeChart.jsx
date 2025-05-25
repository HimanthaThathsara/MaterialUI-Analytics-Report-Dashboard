// https://mui.com/x/react-charts/gauge/
// https://mui.com/x/api/charts/gauge-container/

import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export  function BasicGauges() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
        {/* https://mui.com/x/react-charts/gauge/#arcs-configuration */}
        {/* startAngle={...}  /  endAngle={...} / innerRadius="...%" / outerRadius="..." */}
      <Gauge width={100} height={100} value={60} />
    </Stack>
  );
}


export  function BasicGauges90Degree() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
    </Stack>
  );
}


export function GaugeValueRangeNoSnap() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={50} />
    </Stack>
  );
}


export function GaugeWithText() {
    <Gauge
    value={75}
    startAngle={-110}
    endAngle={110}
    sx={{
        [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
        transform: 'translate(0px, 0px)',
        },
    }}
    text={
        ({ value, valueMax }) => `${value} / ${valueMax}`
    }
    />
}

