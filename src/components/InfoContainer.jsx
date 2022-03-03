import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const InfoComponent = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Covid 19 data container
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default InfoComponent;
