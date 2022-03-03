import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InfoComponent = (props) => {
  console.log(props);

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.country.Country
                ? props.country.Country
                : "No Country Selected"}
            </Typography>
            <p>New Confirmed Cases : {props.country.NewConfirmed}</p>
            <p>New Confirmed Deaths : {props.country.NewDeaths}</p>
            <p>New Recovered Cases : {props.country.NewRecovered}</p>
            <p>Total Confirmed Cases : {props.country.TotalConfirmed}</p>
            <p>Total Confirmed Deaths : {props.country.TotalDeaths}</p>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "auto",
          padding: "1rem",
          margin: "1rem auto",
        }}
      >
        <Card sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Covid 19 Global Data - {props.status.Date}
            </Typography>
            <p>New Confirmed Cases : {props.status.NewConfirmed}</p>
            <p>New Confirmed Deaths : {props.status.NewDeaths}</p>
            <p>New Recovered Cases : {props.status.NewRecovered}</p>
            <p>Total Confirmed Cases : {props.status.TotalConfirmed}</p>
            <p>Total Confirmed Deaths : {props.status.TotalDeaths}</p>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default InfoComponent;
