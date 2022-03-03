import React from "react";

import styled from "styled-components";
import Typography from "@mui/material/Typography";

const FooterContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  width: 100% !important;
  height: 100px !important ;
  background: #6cf;
`;

const FooterComponent = () => {
  return (
    <FooterContainer maxWidth="lg">
      <Typography gutterBottom variant="h5" component="div">
        API provided by https://covid19api.com/
      </Typography>
    </FooterContainer>
  );
};

export default FooterComponent;
