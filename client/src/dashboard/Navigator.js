import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import Auth from "../utils/auth";

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  const { setCurrentClassIndex, currentClassIndex } = props
  const { classInfo } = React.useContext(AppContext);
  const categories = [
    {
      id: "Links",
      children: [
        {
          id: <NavLink to="/activities/:itemId">Activities</NavLink>,
          icon: <DirectionsRunIcon />,
        },
        {
          id: <NavLink to="/addClassroom">Add Class</NavLink>,
          icon: <MenuBookIcon />,
        },
        {
          id: <NavLink to="/addStudent">Add Student</NavLink>,
          icon: <PersonAddIcon />,
        },
      ],
    },
    {
      id: "Classes",
      children: classInfo.map((i, index) => ({
        id: i.className,
        icon: <SchoolIcon />,
        active: currentClassIndex === index && true
      })),
    },
  ];

  console.log(classInfo, "info");

  return (
    <React.Fragment>
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Blossom Babies
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }, index) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item} onClick={() => setCurrentClassIndex(index)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
    </React.Fragment>
  );
}
