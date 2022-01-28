import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Layout = ({ children, user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Box>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "50vh" }}
        >
          {children}
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
