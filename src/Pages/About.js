import React from "react";
import Heroabout from "../containers/Heroabout";
import Mission from "../containers/Mission";
import { Divider } from "@mui/material";
import Footer from "../containers/Footer"

import Header4 from "../containers/Header4";

const About = () => {
  return (
    <>
      <Header4 />
      <Divider />
      <Heroabout />
      <Divider />
      <Mission />
      <Footer />
    </>
  );
};
export default About;
