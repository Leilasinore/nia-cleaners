import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image";
import ServicesOneImg from "../assets/images/services1.svg";
import ServicesTwoImg from "../assets/images/services2.svg";
import ServicesThreeImg from "../assets/images/services3.svg";
import { Container, Box, Typography, Grid } from "@mui/material";
import BasicButton from "../components/BasicButton";
import AddIcon from "@mui/icons-material/Add";

const Services = () => {
  const navigate = useNavigate();

  const navigateServices = () => {
    // 👇️ navigate to /contacts
    navigate("/services");
  };
  const navigateToContactnow = () => {
    // 👇️ navigate to /contacts
    navigate("/contactus");
  };
  return (
    <Container maxWidth="xl" py={10}>
      <Box py={2}>
        <Typography variant="h4">
          <Box component="span" sx={{ color: "primary.main" }}>
            Our{" "}
          </Box>
          <Box component="span" sx={{ color: "secondary.main" }}>
            Services
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12}>
          <Image src={ServicesOneImg} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Carpet Cleaning
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            Professional carpet cleaning services in Nairobi. We offer deep
            steam cleaning of house and office carpets, We eliminates stains
            dust and allergens from carpets through vacuuming, hot water
            extraction and dry cleaning with excellent results and at affordable
            price. We will provide you with the complete Carpet Cleaning that
            you expect from truly professional carpet cleaners in Nairobi,
            Kenya.
          </Typography>
          <BasicButton
            variant="contained"
            endIcon={<AddIcon />}
            onClick={navigateServices}
          >
            Learn More{" "}
          </BasicButton>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Image src={ServicesTwoImg} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Office Cleaning
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            Nia Cleaners Provides Professional office cleaning services in Kenya
            with our tailor-made package that offers convenience quality, and
            consistency. Recognized as one of the best office cleaning companies
            in Kenya, Nia Cleaners offers options for all of your commercial
            cleaning needs. Outsourcing Office cleaning services in Nairobi
            tends to be much overlooked by firms as they strive to keep profits
            rolling in and the industry ticking over
          </Typography>
          <BasicButton
            variant="contained"
            endIcon={<AddIcon />}
            onClick={navigateServices}
          >
            Learn More{" "}
          </BasicButton>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Image src={ServicesThreeImg} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Residential Cleaning
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            You are happier and healthier when your living space is clean.
            However, it can be difficult to find the time and effort for proper
            house cleaning. That is why we are here: so you can focus on what
            matters to you. At Nia Cleaners we provide one-off as well as
            regular home cleaning services and are happy to cater for all your
            domestic cleaning needs, with services including ironing, dusting,
            polishing and vacuuming.
          </Typography>
          <BasicButton
            variant="contained"
            endIcon={<AddIcon />}
            onClick={navigateServices}
          >
            Learn More{" "}
          </BasicButton>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 3 }} gutterBottom py={7}>
        <BasicButton variant="outlined" onClick={navigateToContactnow}>
          Book Now
        </BasicButton>
      </Box>
    </Container>
  );
};
export default Services;
