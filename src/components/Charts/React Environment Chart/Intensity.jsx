// This is INTENSITY Chart component from the react-environment-chart library.
// Export as INTENSITY CHART and you can access calling this function.
// Intensity is the Import Tag name
// Update the height value as you want and rotation value for the chart arrow.

// A Github link
// https://github.com/xuqiang1227/react-environment-chart?tab=readme-ov-file#pm25 

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import {Intensity} from 'react-environment-chart';


export default function IntensityChart() {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
           {"Power Downtime"}
        </Typography>

            <Stack sx={{ justifyContent: 'space-between', mb:4 }}>

              <Stack
                direction="row"
                sx={{
                  alignContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography variant="h4" component="p">
                  {"45H"}
                </Typography>

                <Chip size="small" color={"error"} label={"-35%"} />
                
              </Stack>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {"Power downtime for the last 30 days and usage"}
              </Typography>

            </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Intensity height={250} rotate={50} />  
        </Box>
      </CardContent>
    </Card>
  );
}
