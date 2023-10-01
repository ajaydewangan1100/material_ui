import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        width: "75%",
        height: "100px",
        position: "relative",
        m: "100px",
        color: "primary",
      }}
      component="h3"
    >
      {value === 0 && <Box sx={{ color: "crimson" }}>Home</Box>}
      {value === 1 && <Box sx={{ color: "blueviolet" }}>Favorite</Box>}
      {value === 2 && <Box sx={{ color: "limegreen" }}>Profile</Box>}
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};
