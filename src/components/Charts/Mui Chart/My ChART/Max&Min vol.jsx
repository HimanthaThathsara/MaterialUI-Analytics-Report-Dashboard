import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';


function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
        days.push(formattedDate);
    }
    return days;
}


export const dataset = Array.from({ length: 7 }, (_, i) => ({
    'Max-Vol': Math.floor(Math.random() * 10),
    'Min-Vol': Math.floor(Math.random() * 10),
    'Avg-Vol': Math.floor(Math.random() * 10),
    month: getLast7Days()[i],
}));

export function valueFormatter(value) {
  return `${value}v`;
}


export default function MaxaAndMin() {
  const theme = useTheme();
  const data = getLast7Days(); 

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>

        <Typography component="h2" variant="subtitle2" gutterBottom>
          Average Voltage Consumption per day
        </Typography>

            <Stack sx={{ justifyContent: 'space-between' }}>

              <Stack
                direction="row"
                sx={{
                  alignContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography variant="h4" component="p">
                  {'13,277v'}
                </Typography>

                <Chip size="small" color={"success"} label={"+35%"} />
                
              </Stack>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Average Power consumption per day for the last 7 days
              </Typography>

            </Stack>

            <BarChart
              colors={colorPalette}
              dataset={dataset}
                xAxis={[{ scaleType: 'band', data ,}]}
                series={[
                    { dataKey: 'Max-Vol', label: 'Max', valueFormatter },
                    { dataKey: 'Min-Vol', label: 'Min', valueFormatter },
                    { dataKey: 'Avg-Vol', label: 'Avg', valueFormatter },
                ]}
                height={400}
            >
            </BarChart>

      </CardContent>
    </Card>
  );
}
