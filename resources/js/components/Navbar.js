import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import SidebarList from "./SidebarList";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <SidebarList anchor="left" toggleDrawer={toggleDrawer} user={user} setUser={setUser} />
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Survey App</Link>
          </Typography>
          {user.name != "" ? (
            <p>{user.name}</p>
          ) : (
            <div>
              <Button color="inherit">
                <Link to="login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="register">Register</Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
