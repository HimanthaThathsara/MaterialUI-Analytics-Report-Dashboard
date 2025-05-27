import { Box, Typography, Grid, Divider, Card } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SettingsIcon from '@mui/icons-material/Settings';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const DetailsPanel = () => {
  return (
    <Card variant="outlined" sx={{ width: '100%',
        borderRadius: 2,
        p: 3, }}>
        
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 500, letterSpacing: 1, display: 'flex',  justifyContent: 'center'}}>
        DETAILS
      </Typography>
      
      <Grid container spacing={2}>

            <Grid item xs={6} sx={{borderRight:'1px solid #444', borderRadius:1 ,p:2}}>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                Mode
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'  }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                  MAIN POWER
                </Typography>
                <BoltIcon sx={{ color: '#fff' }} />
              </Box>
            </Grid>
            
            <Grid item xs={6} sx={{borderLeft:'1px solid #444', borderRadius:1 ,p:2}}>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                Time
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'  }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                  3H 15M  
                </Typography>
                <InfoOutlinedIcon sx={{ color: '#fff' }} />
              </Box>
            </Grid>
            
            <Grid item xs={12}>
              <Divider sx={{ borderColor: '#444', mt:-1, borderRadius:1}} />
            </Grid>

            <Grid item xs={6} sx={{borderRight:'1px solid #444', borderRadius:1 ,p:2}}>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                Frequency
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'  }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                   50 HZ                         
                </Typography>
                <AutorenewIcon sx={{ color: '#fff' }} />
              </Box>
            </Grid>
            
            <Grid item xs={6} sx={{borderLeft:'1px solid #444', borderRadius:1 ,p:2}}>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                Temp
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'  }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                  30°C
                </Typography>
                <ThermostatIcon sx={{ color: '#fff' }} />
              </Box>
            </Grid>
            
            <Grid item xs={12}>
              <Divider sx={{ borderColor: '#444', mt:-1, borderRadius:1}} />
            </Grid>

            <Grid item xs={6} sx={{borderRight:'1px solid #444', borderRadius:1 ,p:2}}>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                Ampere
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'  }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                  600A
                </Typography>
                <ElectricBoltIcon sx={{ color: '#fff' }} />
              </Box>
            </Grid>
            
            <Grid item xs={6} sx={{borderLeft:'1px solid #444', borderRadius:1 ,p:2}}>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                Current
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'  }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                  10A
                </Typography>
                <SettingsIcon sx={{ color: '#fff' }} />
              </Box>
            </Grid>

      </Grid>
    </Card>
  );
};

export default DetailsPanel;