import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/ServicesOffered";
import Pricing from "./Pages/Pricing";
import ContactUs from "./Pages/Contact Us";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="about" element={<About />} />,
        <Route path="services" element={<Services />} />,
        <Route path="pricing" element={<Pricing />} />,
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
