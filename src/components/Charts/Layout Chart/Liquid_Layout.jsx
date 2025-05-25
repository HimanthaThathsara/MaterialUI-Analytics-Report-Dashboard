import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


export default function LiquidChart() {

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
            <Chip size="small" color={"error"} label={"-8%"} />
          </Stack>

          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {"Full capacity and performance for last 24 hours."}
          </Typography>
        </Stack>

            {/* Liquid Chart */}
        
              <Grid container justifyContent="space-between" sx={{ marginTop:2 , px: 8 , marginLeft: 1}}>
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        {"Total Cap"}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#b1bfdc", fontWeight: "bold" }}
                    >
                        {100 + "L"}
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        {"Up Time"}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#4CAF50", fontWeight: "bold" }}
                    >
                        {100 + "H"}
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        {"Run Time"}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#d32a2d", fontWeight: "bold" }}
                    >
                        {100 + "H"}
                    </Typography>
                </Grid>
              </Grid>

      </CardContent>                
    </Card>

    
  );
}






