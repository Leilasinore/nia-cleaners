import React from "react";
import Image from "../components/Image";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/images/hero.svg";
import { Grid, Box, Container } from "@mui/material";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import BasicButton from "../components/BasicButton";
const Hero = () => {
  const navigate = useNavigate();

  const navigateToContactus = () => {
    // 👇️ navigate to /contacts
    navigate("/contactus");
  };
  return (
    <Container maxWidth="xl">
      <Box py={2}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Typography variant="h6" gutterBottom>
              Welcome To Nia Cleaners
            </Typography>
            <Box py={2}>
              <Typography variant="h3" gutterBottom>
                Expert{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Cleaners
                </Box>{" "}
                &{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Professional
                </Box>{" "}
                Services
              </Typography>
            </Box>
            <Box py={1}>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                We provide the best Residential and Commercial Cleaning
                Servives.If you need help in cleaning or maintenance make your
                order now.
              </Typography>
            </Box>
            <Stack sx={{ py: 2 }} direction="row" spacing={3}>
              <FormControl>
                <Select value="Carpet Cleaning" onChange={navigateToContactus}>
                  <MenuItem value="Whole House Cleaning">
                    Whole House Cleaning
                  </MenuItem>
                  <MenuItem value="Carpet Cleaning">Carpet & Laundry</MenuItem>
                </Select>
              </FormControl>
              <BasicButton
                variant="outlined"
                sx={{ padding: 1, width: 200 }}
                onClick={navigateToContactus}
              >
                Book Now
              </BasicButton>
            </Stack>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Image src={HeroImage} width="100%" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Hero;
