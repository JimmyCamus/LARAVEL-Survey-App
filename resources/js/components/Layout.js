import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Layout = ({ children, user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Box
        sx={{minWidth: "100%"}}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          style={{ minHeight: "50vh", marginTop: "25px", marginBottom: "25px",minWidth: "100%" }}
        >
          {children}
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
