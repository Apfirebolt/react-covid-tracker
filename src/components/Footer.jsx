import React from "react";

import styled from "styled-components";
import Typography from "@mui/material/Typography";

const FooterContainer = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #6cf;
`;

const FooterComponent = () => {
  return (
    <FooterContainer maxWidth="lg">
      <Typography gutterBottom variant="h5" component="div">
        <p>API provided by https://covid19api.com/</p>
      </Typography>
    </FooterContainer>
  );
};

export default FooterComponent;
