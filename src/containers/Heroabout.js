import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import Image from "../components/Image";
import HeroImage from "../assets/images/hero.svg";
import BasicButton from "../components/BasicButton";
import { useNavigate } from "react-router-dom";

export default function Heroabout() {
  const navigate = useNavigate();

  const contactusRedirect = () => {
    // 👇️ navigate to /contacts
    navigate("/contactus");
  };
  return (
    <Container maxWidth="xl" >
      <Box py={2}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Typography variant="h3" gutterBottom>
              About{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                NIA
              </Box>{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Cleaners
              </Box>
            </Typography>
            <Box>
              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                gutterBottom
              >
                We are a company based in Nairobi Kenya, registered and licensed
                to offer cleaning services.We specialize in residential, office
                and laundry cleaning.We offer professional cleaning services at
                competitive rates.Contact Us for quality service delivery.{" "}
              </Typography>
            </Box>
            <BasicButton
              variant="contained"
              sx={{ color: "white", padding: 1, my: 10, mx: 25, width: 180 }}
              onClick={contactusRedirect}
            >
              Contact Us
            </BasicButton>
          </Grid>
          <Grid item>
            <Image src={HeroImage} width="100%" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
