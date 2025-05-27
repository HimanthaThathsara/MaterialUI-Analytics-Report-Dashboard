import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import { Divider, Grid } from '@mui/material';

function getRealTime() {
    const times = [];
    const now = new Date();
    for (let i = 0; i < 30; i++) {
        const time = new Date(now.getTime() + i * 60000); // Add minutes
        times.push(time);
    }
    return times;
}

export default function RealTimeVolChart() {
  const theme = useTheme();
  const [data, setData] = useState(getRealTime());
  const [acCurrent, setAcCurrent] = useState(Array(30).fill(0).map(() => Math.floor(Math.random() * 10) + 5));
  const [dcCurrent, setDcCurrent] = useState(Array(30).fill(0).map(() => Math.floor(Math.random() * 10) + 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev.slice(1), new Date()]);
      setAcCurrent(prev => [...prev.slice(1), Math.floor(Math.random() * 10) + 5]);
      setDcCurrent(prev => [...prev.slice(1), Math.floor(Math.random() * 10) + 10]);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent>
            <Typography component="h2" variant="subtitle2" gutterBottom>
                Power Consumption In Volts
            </Typography>
            <Stack sx={{ justifyContent: 'space-between', mb: 2, display: 'inline' }}>
                <Stack
                    direction="row"
                    sx={{
                        alignContent: { xs: 'center', sm: 'flex-start' },
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Grid container sx={{ mb: 2 }}>
                        <Grid item sx={{ mr: 2 }}>
                            <Typography variant="h4" component="p">
                                AC Current
                            </Typography>
                            <Typography variant="h6" size="small" sx={{color: 'text.secondary'}}>
                                {acCurrent.slice(-1)[0] + " KWH"}
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item sx={{ ml: 2 }}>
                            <Typography variant="h4" component="p">
                                DC Current
                            </Typography>
                            <Typography variant="h6" size="small"  sx={{color: 'text.secondary'}}>
                                {dcCurrent.slice(-1)[0] + " KWH"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Power consumption in Real time
                </Typography>
            </Stack>
            <LineChart
                colors={colorPalette}
                xAxis={[
                    {
                        scaleType: 'point',
                        data: data.map(time => time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
                        tickInterval: (index, i) => (i + 1) % 5 === 0,
                    },
                ]}
                series={[
                    {
                        id: 'AC Current',
                        label: 'AC Current',
                        showMark: false,
                        curve: 'linear',
                        stack: 'total',
                        area: false,
                        stackOrder: 'ascending',
                        data: acCurrent,
                    },
                    {
                        id: 'DC Current',
                        label: 'DC Current',
                        showMark: false,
                        curve: 'linear',
                        stack: 'total',
                        stackOrder: 'ascending',
                        area: false,
                        data: dcCurrent,
                    },
                ]}
                height={450}
                margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
                grid={{ horizontal: true }}
                sx={{
                    '& .MuiAreaElement-series-ACCurrent': {
                        fill: "url('#ACCurrent')",
                    },
                    '& .MuiAreaElement-series-DCCurrent': {
                        fill: "url('#DCCurrent')",
                    },
                }}
                slotProps={{
                    legend: {
                        hidden: true,
                    },
                    tooltip: {
                        animation: 'turbo',
                    },
                }}
            />
        </CardContent>
    </Card>
  );
}