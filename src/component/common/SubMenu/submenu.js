import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/nav";
import "./submenu.css";

function Submenu({
  onclick,
  parentPrimary,
  childPrimary,
  className,
  to,
  icon,
  childIcon,
  selected,
  childSelected,
  onClick2,
  open,
  handleClick,
  childDetails,
}) {
  return (
    <div>
      <ListItemButton onClick={handleClick} selected={selected}>
        <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
        <ListItemText primary={parentPrimary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {childPrimary.map((item, index) => {
          return (
            <List component="div" disablePadding key={index}>
              <Nav
                sx={{ pl: 5 }}
                to={childDetails[item].link}
                primary={childDetails[item].text}
                icon={childDetails[item].icon}
                onClick={childDetails[item].onclickaction}
                selected={childDetails[item].selected}
                className={className}
              />
            </List>
          );
        })}
      </Collapse>
    </div>
  );
}

export default Submenu;
