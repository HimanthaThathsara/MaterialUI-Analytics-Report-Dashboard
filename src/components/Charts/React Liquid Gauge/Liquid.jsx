// https://www.npmjs.com/package/react-liquid-gauge
// https://github.com/trendmicro-frontend/react-liquid-gauge

import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import LiquidFillGauge from 'react-liquid-gauge'; 


import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


export default function LiquidChart() {
  const present = 10;
  const radius =90;
  const interpolate = interpolateRgb('#6495ed');
  const fillColor = interpolate(present / 100);
    const gradientStops = [
        {
            key: '0%',
            stopColor: color(fillColor).darker(0.5).toString(),
            stopOpacity: 1,
            offset: '0%'
        },
        {
            key: '50%',
            stopColor: fillColor,
            stopOpacity: 0.75,
            offset: '50%'
        },
        {
            key: '100%',
            stopColor: color(fillColor).brighter(0.5).toString(),
            stopOpacity: 0.5,
            offset: '100%'
        }
    ];
 

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>

        <Typography component="h2" variant="subtitle2" gutterBottom>
         {"Flue capacity and performance"}
        </Typography>

        <Stack sx={{ justifyContent: 'space-between', mb: 2 }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {"10L"}
            </Typography>
            <Chip size="small" color="error" label={"-8%"} />
          </Stack>

          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {"Full capacity and performance for last 24 hours."}
          </Typography>
        </Stack>

        <LiquidFillGauge
                 style={{ margin: '0 auto' }}
                 width={radius * 2}
                 height={radius * 2}
                 value={present}
                 percent="%"
                 textSize={1}
                 textOffsetX={8}
                 textOffsetY={11}
                 riseAnimation
                 waveAnimation
                 waveFrequency={2}
                 waveAmplitude={1}
                 gradient
                 gradientStops={gradientStops}
                 circleStyle={{
                     fill: fillColor
                 }}
                 waveStyle={{
                     fill: fillColor
                 }}
                 textStyle={{
                     fill: color('#444').toString(),
                     fontFamily: 'Arial'
                 }}
                 waveTextStyle={{
                     fill: color('#fff').toString(),
                     fontFamily: 'Arial'
                 }}
        />
              <Grid container justifyContent="space-between" sx={{ marginTop:2 , px: 8 , marginLeft: 1}}>
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        Total Cap
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#b1bfdc", fontWeight: "bold" }}
                    >
                        {100}L
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        Up Time
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#4CAF50", fontWeight: "bold" }}
                    >
                        {100}h
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        Run Time
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#d32a2d", fontWeight: "bold" }}
                    >
                        {100}h
                    </Typography>
                </Grid>
              </Grid>

      </CardContent>                
    </Card>

    
  );
}






