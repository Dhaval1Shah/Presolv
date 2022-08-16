import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function nav({ onClick, primary, className, to, icon, selected, sx }) {
  return (
    <Link to={to} className={className}>
      <ListItemButton sx={sx} selected={selected} onClick={onClick}>
        <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
        <ListItemText
          primary={primary}
          primaryTypographyProps={{ fontSize: "0.94em" }}
        />
      </ListItemButton>
    </Link>
  );
}

export default nav;
