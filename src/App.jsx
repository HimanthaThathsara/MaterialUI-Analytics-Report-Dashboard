// import { alpha } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import MainGrid from "./components/Page/MainGrid";
import Battery from "./components/Page/Battery";
import Supply from "./components/Page/powerSupply";
import NotFound from "./components/Page/NotFound";
import SideMenu from "./components/SideMenu";

import AppTheme from "./theme/AppTheme";
import {chartsCustomizations, dataGridCustomizations, datePickersCustomizations, treeViewCustomizations} from "./theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const route = pathname.replace(/\/+$/, "");

  let PageComponent = <MainGrid />;
  if (route.includes("/battery")) {
    PageComponent = <Battery />;
  } else if (route.includes("/supply") || route.includes("/power")) {
    PageComponent = <Supply />;
  } else if (route !== "" && route !== "/") {
    PageComponent = <NotFound />;
  }

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{display: "flex"}}>
        <SideMenu />
        <AppNavbar />

        <Box
          component="main"
          sx={() => ({
            flexGrow: 1,
            overflow: "auto",
          })}>
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: {xs: 8, md: 0},
            }}>
            <Header />

            {PageComponent}
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
