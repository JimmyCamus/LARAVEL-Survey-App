import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="primary.main"
        color="text.secondary"
        sx={{ height: 100, marginTop: "250px" }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
