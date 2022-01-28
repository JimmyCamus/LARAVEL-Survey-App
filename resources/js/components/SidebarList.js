import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import useHandleLogout from "../hooks/useHandleLogout";

const SidebarList = ({ anchor, toggleDrawer, user, setUser }) => {
  const handleLogout = useHandleLogout;
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {user.name == "" ? null : (
          <ListItem>
            <Button onClick={async () => await handleLogout(setUser)}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="logout" />
            </Button>
          </ListItem>
        )}
      </List>
      <Divider />
    </Box>
  );
};

export default SidebarList;
