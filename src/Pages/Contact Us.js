import React from "react";

import Contactus from "../containers/Contactus";
import { Divider, Box } from "@mui/material";
import Header4 from "../containers/Header4";

const ContactUs = () => {
  return (
    <Box sx={{ height: "100vh", color: "primay.main" }} color="primary.main">
      <Header4 />
      <Divider />
      <Contactus />
    </Box>
  );
};

export default ContactUs;
