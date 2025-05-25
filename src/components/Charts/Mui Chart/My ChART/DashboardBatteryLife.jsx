import { Box, Typography, Card, CardContent, Grid, Stack, Chip, Divider } from "@mui/material";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const DashboardBatteryLife = () => {
  const percentage = 75.55;
  const dailyEarnings = 3287; 
  const target = 20000;
  const revenue = 20000;

return (
    <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent>
            <Typography component="h2" variant="subtitle2" gutterBottom>
                {"Battery life and performance"}
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
                    <Typography variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
                        {"18000v"}
                    </Typography>
                    <Chip size="small" color={"error"} label={"-8%"} />
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {"Battery life and performance are at optimal levels for the last 24 hours."}
                </Typography>
            </Stack>
            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", margin: "20px 0",}}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Gauge
                        width={300} height={170}
                        value={percentage}
                        startAngle={-110}
                        endAngle={110}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                color: "#94a0b8",
                                fontSize: 22,
                                transform: 'translate(0px, 0px)',
                                fontWeight: 'bold',
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#1c87f2',
                            },
                        }}
                        text={
                            ({ value }) => `${value.toFixed(2)}%`
                        }
                    />
                </Box>
            </Box>

            <Grid container justifyContent="space-between" sx={{ marginTop: 2, px: 8 , marginLeft: 1}}>
                <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        Total Vol
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#b1bfdc", fontWeight: "bold" }}
                    >
                        {target}v
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
                        {revenue}h
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
                        {dailyEarnings}h
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);
};

export default DashboardBatteryLife;
