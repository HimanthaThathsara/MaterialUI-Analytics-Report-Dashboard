// import React from 'react';
// import PropTypes from 'prop-types';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


// const data = [
//   { label: 'Battery Power', value: 50000 },
//   { label: 'Generator Power', value: 48000 },
//   { label: 'Without Power', value: 5000 },
// ];

// const StyledText = styled('text', {
//   shouldForwardProp: (prop) => prop !== 'variant',
// })(({ theme }) => ({
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fill: (theme.vars || theme).palette.text.secondary,
//   variants: [
//     {
//       props: {
//         variant: 'primary',
//       },
//       style: {
//         fontSize: theme.typography.h5.fontSize,
//       },
//     },
//     {
//       props: ({ variant }) => variant !== 'primary',
//       style: {
//         fontSize: theme.typography.body2.fontSize,
//       },
//     },
//     {
//       props: {
//         variant: 'primary',
//       },
//       style: {
//         fontWeight: theme.typography.h5.fontWeight,
//       },
//     },
//     {
//       props: ({ variant }) => variant !== 'primary',
//       style: {
//         fontWeight: theme.typography.body2.fontWeight,
//       },
//     },
//   ],
// }));

// function PieCenterLabel({ primaryText, secondaryText }) {
//   const { width, height, left, top } = useDrawingArea();
//   const primaryY = top + height / 2 - 10;
//   const secondaryY = primaryY + 24;

//   return (
//     <React.Fragment>
//       <StyledText variant="primary" x={left + width / 2} y={primaryY}>
//         {primaryText}
//       </StyledText>
//       <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
//         {secondaryText}
//       </StyledText>
//     </React.Fragment>
//   );
// }

// PieCenterLabel.propTypes = {
//   primaryText: PropTypes.string.isRequired,
//   secondaryText: PropTypes.string.isRequired,
// };

// const colors = [
//   'hsl(220, 20%, 65%)',
//   'hsl(220, 20%, 42%)',
//   'hsl(220, 20%, 35%)',
// ];

export default function DashboardPowerDownTime() {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
           {"Power Downtime"}
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
                  {"45H"}
                </Typography>

                <Chip size="small" color={"error"} label={"-35%"} />
                
              </Stack>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {"Power downtime for the last 30 days and usage"}
              </Typography>

            </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel primaryText={"98.5v"} secondaryText={"Total"} />
          </PieChart> */}

          {/* Charts */}

        </Box>

      </CardContent>
    </Card>
  );
}
