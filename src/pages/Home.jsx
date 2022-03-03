import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import LoaderComponent from "../components/Loader";
import covidService from "../services/covidService";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [dataDate, setDataDate] = useState("");
  const [status, setStatus] = useState({});

  const selectCountry = (countryName) => {
    console.log("Country name ", countryName);
  };

  useEffect(() => {
    async function getCovidData() {
      setLoading(true);
      const response = await covidService();
      setCountries(response.Countries);
      setDataDate(response.Date);
      setStatus(response.Global);
      setLoading(false);
    }
    getCovidData();
  }, []);

  return (
    <Container maxWidth="lg">
      {countries.length ? <Box sx={{ bgcolor: "#cfe8fc", height: "auto" }}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Covid 19 API
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue=""
                onChange={(e) => selectCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.Country} value={country.Country}>
                    {country.Country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Box>
      : <LoaderComponent />
      }
    </Container>
  );
};

export default HomePage;
