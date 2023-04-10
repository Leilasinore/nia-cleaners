import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import firebaseDb from "../firebase";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import BasicButton from "../components/BasicButton";
import Phoneimage from "../assets/images/PhoneImage.svg";
import Envelop from "../assets/images/Envelop.svg";
import Twitter from "..//assets/images/Twitter.png";
import Instagram from "../assets/images/Instagram.png";
import Contactinfo from "./Contactinfo";

function Contactus() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please provide value in each input field");
    } else {
      // firebaseDb.child("contacts").push(state);
      // setState({ name: "", email: "", message: "" });
      toast.success("Message sent successfully");
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Contactinfo />
      <Box sx={{ my: 12 }}>
        <Grid
          container
          spacing={4}
          sx={{
            bgcolor: "primary.main",
            padding: 2,
          }}
        >
          <ToastContainer position="top-center" />
          <Grid item lg={4} xs={12} gutterBottom>
            <Card sx={{ paddingBottom: 1 }}>
              <CardContent>
                <Typography variant="h5">Contact Us</Typography>
                <Typography variant="h6" color="textSecondary">
                  send us a message
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    id="outlined-basic"
                    label="name"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="name"
                  />
                  <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="email"
                  />
                  <TextField
                    id="outlined-basic"
                    label="message"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="message"
                  />
                </Box>
                <BasicButton
                  variant="contained"
                  sx={{ color: "white" }}
                  onClick={handleSubmit}
                >
                  Submit
                </BasicButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ bgcolor: "primary.main", borderBlockColor: "white" }}>
              <CardContent>
                <Box
                  component="a"
                  href="/"
                  sx={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Box
                    component="span"
                    sx={{ color: "white", textAlign: "center" }}
                    pr={0.5}
                  >
                    NIA
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "secondary.main", textAlign: "center" }}
                  >
                    CLEANERS
                  </Box>
                </Box>
                <Typography variant="h6" color="white" py={2}>
                  All our pages
                </Typography>

                <Box
                  display="flex"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    underline: "none",
                    textDecoration: "none",
                  }}
                >
                  <Link href="/" underline="none" color="white">
                    Home
                  </Link>
                  <Link href="/About" underline="none" color="white">
                    About Us
                  </Link>
                  <Link href="/Services" underline="none" color="white">
                    Services
                  </Link>
                  <Link href="/ContactUs" underline="none" color="white">
                    Contact Us
                  </Link>
                </Box>
                <Box py={2}>
                  Our Physical location is Nairobi Branch – Kileleshwa, Nairobi,
                  Kenya
                </Box>
                <Box color="white" py={2}>
                  “Happiness: A freshly cleaned house.” – Anonymous
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ bgcolor: "Background.default" }}>
              <CardContent>
                <Box
                  component="a"
                  href="/"
                  sx={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Box
                    component="span"
                    sx={{ color: "primary.main", textAlign: "center" }}
                    pr={0.5}
                  >
                    NIA
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "secondary.main", textAlign: "center" }}
                  >
                    CLEANERS
                  </Box>
                </Box>
                <Grid container>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <img src={Phoneimage} alt="phone" />
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <Typography>0791031532</Typography>
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <img src={Envelop} alt="email" />
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <Typography>Niacleaners01@gmail.com</Typography>
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <img src={Twitter} alt="twitter" />
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <Typography>@Niacleaners01</Typography>
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <img src={Instagram} alt="instagram" />
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 5 }}>
                    <Typography>Nia_cleaners01</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{
            bgcolor: "primary.main",
            boxShadow: 0,
            alignItems: "center",
            textAlign: "center",
            padding: 10,
          }}
        >
          <Grid container spacing={4}>
            <Grid item lg={4} justifyContent={"center"}>
              <Box
                component="span"
                sx={{ color: "background.default" }}
                pr={0.5}
              >
                NIA
              </Box>
              <Box component="span" sx={{ color: "secondary.main" }}>
                CLEANERS
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{ color: "background.default" }}
              justifyContent={"center"}
            >
              {" "}
              We clean up so that you can take a rest and enjoy a freshly
              cleaned home.
            </Grid>
            <Grid
              item
              lg={4}
              sx={{ color: "background.default" }}
              justifyContent={"center"}
            >
              Contact Us Today
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            boxShadow: 20,
            alignItems: "center",
            textAlign: "center",
            paddingTop: 6,
            paddingBottom: 2,
          }}
        >
          &copy; 2023 Nia Cleaners.All rights Reserved
        </Box>
      </Box>
    </>
  );
}

export default Contactus;
