import { Tab, Tabs } from "@mui/material";
import React from "react";
import "./tabbar.css";
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
function Tabbar({ value, onChange, lable }) {
  return (
    <div>
      <Tabs
        value={value}
        onChange={onChange}
        style={{ color: "black" }}
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {lable.map((e, i) => {
          return (
            <Tab
              label={e}
              {...a11yProps(i)}
              className="Dashboard__Tab"
              key={i}
            />
          );
        })}
      </Tabs>
    </div>
  );
}

export default Tabbar;
