
import Hero from "../containers/Hero";
import React from "react";

import { Divider  } from "@mui/material";
import Services from "../containers/Service";
import WhyChooseUs from "../containers/WhyChooseUs.js";
import Footer from "../containers/Footer";

import Header4 from "../containers/Header4";

// const Homey =<a href="/">Home</a>;
// const Aboutus = <Link href="/About">About</Link>;
// const ServicesOff = <a href="/services">Services</a>;
// const ContactusM = <a href="/contactus">Contact Us</a>;
// const linksArray = [Homey, Aboutus, ServicesOff, ContactusM];

const Home = () => {
  return (
    <>
      {/*  links={linksArray} */}
      <Header4 />
      <Divider />
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
