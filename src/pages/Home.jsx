import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import LoaderComponent from "../components/Loader";
import CountrySelector from "../components/CountrySelector";
import InfoContainer from "../components/InfoContainer";
import covidService from "../services/covidService";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [dataDate, setDataDate] = useState("");
  const [status, setStatus] = useState({});
  const [countryData, setCountryData] = useState({});

  const selectCountry = (countryName) => {
    const selectedCountry = countries.find((item) => item.Country === countryName)
    setCountryData(selectedCountry)
  };

  useEffect(() => {
    async function getCovidData() {
      const response = await covidService();
      setCountries(response.Countries);
      setDataDate(response.Date);
      setStatus(response.Global);
    }
    getCovidData();
  }, []);

  return (
    <Container maxWidth="lg">
      {countries.length ? <Box sx={{ bgcolor: "#cfe8fc", height: "auto" }}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Get Global and Country specific latest Covid stats
            </Typography>
            <CountrySelector countries={countries} selectCountry={selectCountry} />
            <InfoContainer country={countryData} status={status} />
          </CardContent>
        </Card>
      </Box>
      : <LoaderComponent />
      }
    </Container>
  );
};

export default HomePage;
