import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import useHandleLogout from "../hooks/useHandleLogout";
import AddIcon from "@mui/icons-material/Add";
import PollIcon from "@mui/icons-material/Poll";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SidebarList = ({ anchor, toggleDrawer, user, setUser }) => {
  const handleLogout = useHandleLogout;
  const navigate = useNavigate();

  const onLogoutClick = async () => {
    await handleLogout(setUser);
    navigate("/login");
  };

  return (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {user.name == "" ? null : (
          <div>
            <ListItem>
              <Link to={"createSurvey"}>
                <Button style={{ width: "100%" }}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Survey" />
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"mySurveys"}>
                <Button style={{ width: "100%" }}>
                  <ListItemIcon>
                    <PollIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Surveys" />
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button onClick={onLogoutClick} style={{ width: "100%" }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="logout" />
              </Button>
            </ListItem>
          </div>
        )}
      </List>
      <Divider />
    </Box>
  );
};

export default SidebarList;
