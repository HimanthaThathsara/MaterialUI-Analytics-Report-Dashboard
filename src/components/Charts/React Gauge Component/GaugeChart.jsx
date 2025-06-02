import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';


export default function GaugeChart() {

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>

        <Typography component="h2" variant="subtitle2" gutterBottom>
         {" Page views and downloads"}
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

        {/* Gauge from GaugeComponent */}

      </CardContent>                
    </Card>

    
  );
}






