import React from "react";
import dayjs from "dayjs";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const InfoComponent = (props) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#133E20", height: "auto", padding: "1rem" }}>
        <Card sx={{ maxWidth: "100%" }}>
          {props.country.Country ? (
            <CardContent>
              <Typography
                sx={{ textAlign: "center" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {props.country.Country} -{" "}
                {dayjs(props.country.Date).format("DD/MM/YYYY")}
              </Typography>
              <p>
                New Confirmed Cases {" "}
                <Chip label={props.country.NewConfirmed} variant="outlined" />
              </p>
              <p>
                New Confirmed Deaths {" "}
                <Chip label={props.country.NewDeaths} variant="outlined" />
              </p>
              <p>
                New Recovered Cases {" "}
                <Chip label={props.country.NewRecovered} variant="outlined" />
              </p>
              <p>
                Total Confirmed Cases {" "}
                <Chip label={props.country.TotalConfirmed} variant="outlined" />
              </p>
              <p>
                Total Confirmed Deaths {" "}
                <Chip label={props.country.TotalDeaths} variant="outlined" />
              </p>
            </CardContent>
          ) : (
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                No Country Selected
              </Typography>
            </CardContent>
          )}
        </Card>
      </Box>
      <Box
        sx={{
          bgcolor: "#133E20",
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
              Covid 19 Global Data -{" "}
              {dayjs(props.status.Date).format("DD/MM/YYYY")}
            </Typography>
            <p>
                New Confirmed Cases {" "}
                <Chip label={props.status.NewConfirmed} variant="outlined" />
              </p>
              <p>
                New Confirmed Deaths {" "}
                <Chip label={props.status.NewDeaths} variant="outlined" />
              </p>
              <p>
                New Recovered Cases {" "}
                <Chip label={props.status.NewRecovered} variant="outlined" />
              </p>
              <p>
                Total Confirmed Cases {" "}
                <Chip label={props.status.TotalConfirmed} variant="outlined" />
              </p>
              <p>
                Total Confirmed Deaths {" "}
                <Chip label={props.status.TotalDeaths} variant="outlined" />
              </p>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default InfoComponent;
