import React from "react";

import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const CountrySelector = (props) => {
  return (
    <Container maxWidth="lg">
      <FormControl fullWidth sx={{ margin: '1.5rem auto' }}>
        <InputLabel id="select-country-label">Select Country</InputLabel>
        <Select
          labelId="select-country-label"
          id="select-country-select"
          label="Please Select the Country"
          defaultValue=""
          onChange={(e) => props.selectCountry(e.target.value)}
        >
          {props.countries.map((country) => (
            <MenuItem key={country.Country} value={country.Country}>
              {country.Country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default CountrySelector;
