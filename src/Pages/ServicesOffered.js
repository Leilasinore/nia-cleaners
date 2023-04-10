import { Divider } from "@mui/material";
import React from "react";

import Services from "../containers/Service";

import Footer from "../containers/Footer";


import Header4 from "../containers/Header4";

const WhatweOffer = () => {
  return (
    <div>
      <Header4 />
      <Divider />

      <Services py={10} />
      <Divider />
      <Footer />
    </div>
  );
};





export default WhatweOffer;
