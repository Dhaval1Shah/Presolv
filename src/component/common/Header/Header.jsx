import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DraftsIcon from "@mui/icons-material/Drafts";
import "./header.css";
import {
  Button,
  Collapse,
  IconButton,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import Nav from "../Navbar/nav";
import { AccountCircle, StarBorder } from "@mui/icons-material";

import Submenu from "../SubMenu/submenu";
import { useHistory } from "react-router-dom";
import { logout } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

function Header(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexChild, setSelectedIndexChild] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
    handleListItemClickChild();
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleListItemClickChild = (event, index) => {
    setSelectedIndexChild(index);
    setSelectedIndex(0);
  };

  const logout1 = () => {
    logout(dispatch);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        className="AppBar"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button variant="contained" onClick={logout1}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#343434",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img
          style={{
            height: "1.9em",
            paddingRight: "30px",
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
          src="https://presolv360.com/public/images/logo-2-white.png"
          alt="ds"
        />
        <Toolbar />

        <Divider />
        <List className="NavList">
          <Nav
            onClick={(event) => handleListItemClick(event, 1)}
            to="/dashboard"
            primary="Dashboard"
            icon={<InboxIcon />}
            selected={selectedIndex === 1}
            className="TextLink"
          />
          <Nav
            onClick={(event) => handleListItemClick(event, 2)}
            to="/notification"
            primary="Arbitration Notification"
            icon={<DraftsIcon />}
            selected={selectedIndex === 2}
            className="TextLink"
          />
          <Nav
            onClick={(event) => handleListItemClick(event, 3)}
            to="/sharedfile"
            primary="Shared Files"
            icon={<InboxIcon />}
            selected={selectedIndex === 3}
            className="TextLink"
          />
          <Submenu
            parentPrimary="Secure"
            icon={<InboxIcon />}
            handleClick={handleClick}
            open={open}
            // selected={selectedIndex === 4}
            childPrimary={["newrequest", "plans"]}
            childDetails={{
              newrequest: {
                icon: <StarBorder />,
                text: "New Request",
                link: `/newrequest`,
                onclickaction: (event) => handleListItemClickChild(event, 1),
                selected: selectedIndexChild === 1,
              },

              plans: {
                icon: <StarBorder />,
                text: "Plans",
                link: `/plans`,
                onclickaction: (event) => handleListItemClickChild(event, 2),
                selected: selectedIndexChild === 2,
              },
            }}
            className="TextLink"
          />
        </List>
      </Drawer>
    </>
  );
}

export default Header;
