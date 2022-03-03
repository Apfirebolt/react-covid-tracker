import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HeaderComponent = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#793A2D", textAlign: "center", height: "auto", padding: "1rem" }}>
        <Typography gutterBottom variant="h5" color="white" component="div">
          Covid 19 Latest Data
        </Typography>
      </Box>
    </Container>
  );
};

export default HeaderComponent;
