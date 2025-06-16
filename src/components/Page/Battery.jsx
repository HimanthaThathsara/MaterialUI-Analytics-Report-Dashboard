 
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Battery() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>

      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        RealTime Battery Consumption
      </Typography>

      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >

        <Grid size={{ xs: 12}}>
          
        </Grid>

        <Grid size={{ xs: 12}}>
          
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          
        </Grid>

        <Grid
         size={{ xs: 12, md: 6 }}>
          
        </Grid>
        
        <Grid size={{ xs: 12, md: 6}}>
          
        </Grid>


      </Grid>
      
    </Box>
  );
}
