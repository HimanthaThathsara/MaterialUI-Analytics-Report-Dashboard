 
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


// import CustomizedDataGrid from './CustomizedDataGrid';
// import PageViewsBarChart from './PageViewsBarChart';
import DashboardStatCard from '../Charts/Mui Chart/My ChART/DashboardStatCard';
import DashboardPowerDownTime from '../Charts/Mui Chart/My ChART/DashboardPowerDownTime';
import DashboardPowerUseInVol from '../Charts/Mui Chart/My ChART/DashboardPowerUseInVol';
import DashboardBatteryLife from '../Charts/Mui Chart/My ChART/DashboardBatteryLife';
import LiquidChart from '../Charts/React Liquid Gauge/Liquid';


const data = [
  {
    title: 'Battery',
    value: '1028H',
    interval: 'Last 30 days',
    trend: 'up',
    ChipValues: "10%",
    data: [
      20, 24, 22, 26, 24, 38, 10, 24, 20, 20, 30, 30, 30, 30, 30, 30,
      30, 40, 30, 20, 40, 40, 30, 60, 40, 40, 60, 60, 80, 20,
    ],
  },
  {
    title: 'Generator',
    value: '1823H',
    interval: 'Last 30 days',
    trend: 'down',
    ChipValues: "-10%",
    data: [
      140, 125, 70, 113, 100, 90, 72, 108, 90, 45, 20, 20, 40, 60, 20,
      70, 80, 60, 80, 40, 60, 20, 80, 0, 20, 40, 40, 30, 30, 20,
    ],
  },
  {
    title: 'AC / DC',
    value: '15390H',
    interval: 'Last 30 days',
    trend: 'neutral',
    ChipValues: "1%",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>

      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overall Runtime
      </Typography>

      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <DashboardStatCard {...card} />
          </Grid>
        ))}

        <Grid size={{ xs: 12, md: 8 }}>
          <DashboardPowerUseInVol />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <DashboardPowerDownTime />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <LiquidChart />
        </Grid>

        <Grid
         size={{ xs: 12, md: 6 }}>
          <DashboardBatteryLife/>
        </Grid>

      </Grid>
      
      {/* <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <CustomizedDataGrid />
        </Grid>
      </Grid> */}
    </Box>
  );
}
