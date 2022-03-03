import React from "react";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderComponent = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", margin: "1rem auto" }}>
      <CircularProgress />
    </Container>
  );
};

export default LoaderComponent;
