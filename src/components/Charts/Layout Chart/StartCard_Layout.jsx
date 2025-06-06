 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
// import { areaElementClasses } from '@mui/x-charts/LineChart';

// function getLast30Days(day, month, year ) {
//   const date = new Date(year, month - 1, day);
//   const days = [];
//   for (let i = 0; i < 30; i++) {
//     const newDate = new Date(date);
//     newDate.setDate(date.getDate() - i);
//     const monthName = newDate.toLocaleDateString('en-US', { month: 'short' });
//     days.push(`${monthName} ${newDate.getDate()}`);
//   }
//   return days.reverse();
// }

// function AreaGradient({ color, id }) {
//   return (
//     <defs>
//       <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
//         <stop offset="0%" stopColor={color} stopOpacity={0.3} />
//         <stop offset="100%" stopColor={color} stopOpacity={0} />
//       </linearGradient>
//     </defs>
//   );
// }

// AreaGradient.propTypes = {
//   color: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

function DashboardStatCard() {
//   const theme = useTheme();
//   const today = new Date();
//   const daysInWeek = getLast30Days(today.getDate(), today.getMonth() + 1, today.getFullYear()); 

//   const trendColors = {
//     up:
//       theme.palette.mode === 'light'
//         ? theme.palette.success.main
//         : theme.palette.success.dark,
//     down:
//       theme.palette.mode === 'light'
//         ? theme.palette.error.main
//         : theme.palette.error.dark,
//     neutral:
//       theme.palette.mode === 'light'
//         ? theme.palette.grey[400]
//         : theme.palette.grey[700],
//   };

//   const labelColors = {
//     up: 'success',
//     down: 'error',
//     neutral: 'default',
//   };

//   const color = labelColors[trend];
//   const chartColor = trendColors[trend];

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {"title"}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography variant="h4" component="p">
                {"value"}
              </Typography>
              <Chip size="small" color={"color"} label={"ChipValues"} />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {"interval"}
            </Typography>
          </Stack>
          <Box sx={{ width: '100%', height: 50 }}>

            {/* <SparkLineChart
              colors={[chartColor]}
              data={data}
              area
              showHighlight
              showTooltip
              xAxis={{
                scaleType: 'band',
                data: daysInWeek, 
              }}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fill: `url(#area-gradient-${value})`,
                },
              }}
            >
              <AreaGradient color={chartColor} id={`area-gradient-${value}`} />
            </SparkLineChart> */}

            {/* Charts */}

          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}


export default DashboardStatCard;
