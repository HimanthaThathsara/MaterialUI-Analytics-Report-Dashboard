import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Box sx={{width: "100%", maxWidth: {sm: "100%", md: "1700px"}}}>
      <Typography component="h1" variant="h1" sx={{mb: 2}} align="center">
        Page Under Maintenance
      </Typography>
    </Box>
  );
}
