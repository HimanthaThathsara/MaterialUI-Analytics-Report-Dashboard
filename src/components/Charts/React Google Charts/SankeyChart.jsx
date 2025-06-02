// https://www.react-google-charts.com/

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Chart } from "react-google-charts";


const data = [
  ["From", "To", "Weight"],
  ["24KW", "Main", 20],
  ["Main", "Radio", 5],
  ["Main", "Antenna ", 5],
  ["Main", "BTS", 5],
  ["Main", "ASS", 5],
  
];

var colors = ['#2891fc', '#1f78b4', '#8cc5fe'];

var options = {
      height: 400,
      sankey: {
        node: {
          colors: colors , // fillOpacity: 0.8 /  stroke: 'black'/ strokeWidth: 1 /  strokeOpacity: 0.2 
          width: 15,
          interactivity: true, 
          nodePadding: 80,
          labelPadding: 6,     // The padding between the label and the node. 
          label: { 
            fontName: '',
            fontSize: 14,
            color: '#fff', 
          }
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
      }
    };

export default function CustomSankeyChart() {


  return (
        <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>

        <Typography component="h2" variant="subtitle2" gutterBottom>
          Power Distributing to other component
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
                  13,277v
                </Typography>

                <Chip size="small" color="success" label="+35%" />
                
              </Stack>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Power Distributing in real time
              </Typography>

            </Stack>

                <Chart
                  chartType="Sankey"
                  width="100%"
                  height="420px"
                  data={data}
                  options={options}
                />

      </CardContent>
    </Card>
    

  );
}




