import  { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid, Stack, Chip } from "@mui/material";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import "react-circular-progressbar/dist/styles.css";

const HzChart = () => {
    const [input, setInput] = useState(0);
    const [power, setPower] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setInput(`${Math.floor(Math.random() * 100)}`);
            setPower(`${Math.floor(Math.random() * 100)}`);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {"power frequency in Hz"}
                </Typography>
                
                <Stack sx={{ justifyContent: 'space-between', marginBottom: 2 }}>
                    <Stack
                        direction="row"
                        sx={{
                            alignContent: { xs: 'center', sm: 'flex-start' },
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Typography variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
                            {input + 'v'}
                        </Typography>
                        <Chip size="small" color={"error"} label={"-8%"} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {"Realtime performance in Hertz."}
                    </Typography>
                </Stack>
                <Box
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", margin: "20px 0",}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Gauge
                            width={300} height={170}
                            value={power}
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
                                ({ value }) => `${value}Hz`
                            }
                        />
                    </Box>
                </Box>

                <Grid container justifyContent="space-between" sx={{ marginTop: 2, px: 2 , marginLeft: 1}}>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14, display: "flex", alignItems: "center" }}>
                            Input <span style={{ fontWeight: 'bold', color: 'white', marginLeft: 4 }}>{ input + 'KWH'}</span>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary" sx={{fontSize: 14, display: "flex", alignItems: "center"}}>
                            Power <span style={{ fontWeight: 'bold', color: 'white', marginLeft: 4 }}>{ power + 'Hz' }</span>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default HzChart;
