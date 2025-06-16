 
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MaxaAndMin from '../Charts/Mui Chart/My ChART/Max&Min vol';
import SankeyChart from '../Charts/React Google Charts/SankeyChart';
import DetailsPanel from '../Charts/Mui Chart/My ChART/Details';
import HzChart from '../Charts/React Circular Progressbar/Hz';
import RealChart from '../Charts/Mui Chart/My ChART/Untitled';


export default function Supply() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>

      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        RealTime Power Consumption
      </Typography>

      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >

        <Grid size={{ xs: 12}}>
          <RealChart />
        </Grid>

        <Grid size={{ xs: 12}}>
          <MaxaAndMin />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <HzChart/>
        </Grid>

        <Grid
         size={{ xs: 12, md: 6 }}>
          <DetailsPanel/>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6}}>
          <SankeyChart/>
        </Grid>


      </Grid>
      
    </Box>
  );
}
