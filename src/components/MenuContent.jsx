import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BatteryStdIcon from "@mui/icons-material/BatteryStd";
import EvStationIcon from "@mui/icons-material/EvStation";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const mainListItems = [
  {text: "Dashboard", icon: <HomeRoundedIcon />, page: "/"},
  {text: "Power", icon: <PowerSettingsNewIcon />, page: "/power"},
  {text: "Battery", icon: <BatteryStdIcon />, page: "/battery"},
  {text: "Generator", icon: <EvStationIcon />, page: "/generator"},
];

const secondaryListItems = [
  {text: "Settings", icon: <SettingsRoundedIcon />, page: "/settings"},
  {text: "About", icon: <InfoRoundedIcon />, page: "/about"},
  {text: "Feedback", icon: <HelpRoundedIcon />, page: "/feedback"},
];

export default function MenuContent() {
  return (
    <Stack sx={{flexGrow: 1, p: 1, justifyContent: "space-between"}}>
      <List dense>
        {mainListItems.map((item, i) => (
          <ListItem key={`nav-${i}`} disablePadding sx={{display: "block"}}>
            <ListItemButton component="a" href={item.page} selected={i === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {(() => {
        if (typeof window === "undefined") return null;

        const updateSelected = () => {
          const anchors = Array.from(document.querySelectorAll("a[href]"));
          anchors.forEach((a) => {
            try {
              const aPath = new URL(a.href, window.location.origin).pathname;
              const isSelected = aPath === window.location.pathname;
              // add/remove MUI selected class on the clickable element (anchor/ListItemButton)
              if (isSelected) a.classList.add("Mui-selected");
              else a.classList.remove("Mui-selected");
            } catch (e) {
              /* ignore malformed hrefs */
            }
          });
        };

        // run once and after navigation/clicks to keep selection in sync
        setTimeout(updateSelected, 0);
        document.addEventListener("click", () => setTimeout(updateSelected, 0));
        window.addEventListener("popstate", updateSelected);

        return null;
      })()}
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{display: "block"}}>
            <ListItemButton component="a" href={item.page} selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
