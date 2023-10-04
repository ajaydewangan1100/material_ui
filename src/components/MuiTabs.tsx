import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handlechange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "400px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handlechange}
            textColor="secondary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            centered
          >
            <Tab label="" value="1" icon={<FavoriteIcon />} />
            <Tab label="Tab 2" value="2" icon={<FavoriteIcon />} disabled />
            <Tab
              label="Tab 3"
              value="3"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab label="Tab 4" value="4" />
            <Tab label="Tab 5" value="5" />
            <Tab label="Tab 6" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
        <TabPanel value="4">Panel four</TabPanel>
        <TabPanel value="5">Panel five</TabPanel>
        <TabPanel value="6">Panel six</TabPanel>
      </TabContext>
    </Box>
  );
};
