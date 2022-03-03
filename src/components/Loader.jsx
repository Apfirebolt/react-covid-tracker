import React from "react";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderComponent = () => {
  return (
    <Container maxWidth="lg">
      <CircularProgress color="inherit" />
    </Container>
  );
};

export default LoaderComponent;
