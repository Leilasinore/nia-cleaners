import {
  Typography,
  Box,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import Image from "../components/Image";
import Trust from "../assets/images/trust.png";
import Support from "../assets/images/Support.png";
import Pricing from "../assets/images/Pricing.png";

const WhyChooseUs = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h4">
          Why{" "}
          <Box sx={{ color: "secondary.main" }} component="span">
            Choose
          </Box>{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Us
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid sx={{ textAlign: "center" }} item lg={4} xs={12}>
          <Card
            sx={{ boxShadow: 2, bgcolor: "background.default" }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Image src={Trust} gutterBottom />
              <Typography variant="h6" color="secondary.main" gutterBottom>
                Trust
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                Our Company recognises the fundamental importance of security
                and therefore, rigorously upholds security policies stipulated
                by clients, these policies form part of each employees induction
                training.Your premises will be in safe hands with Nia Cleaners
                as we understand your requirements and concerns, particularly
                with regards to security.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ textAlign: "center" }} item lg={4} xs={12}>
          <Card
            sx={{ bgcolor: "background.default", boxShadow: 2 }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Image src={Support} gutterBottom />
              <Typography variant="h6" color="primary.main" gutterBottom>
                Available 24-Hours
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                Nia cleaners uses a modern scheduling system to ensure the
                successful completion of all services we deliver. Comprehensive
                checklist inspections are used to make sure that all the
                individual cleaning tasks are done and live up to our high
                standards.With a priority given to customer loyalty and staff
                retention, Nia Cleaners is proud to have a large number of long
                term clients and employees
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          sx={{ textAlign: "center" }}
          py={4}
          md={4}
          item
          lg={4}
          xs={12}
          sm={12}
        >
          <Card
            sx={{ bgcolor: "background.default", boxShadow: 2 }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Image src={Pricing} />
              <Typography variant="h6" color="primary.main" gutterBottom>
                Cost-Friendly
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                Nia cleaners uses a modern scheduling system to ensure the
                successful completion of all services we deliver. Comprehensive
                checklist inspections are used to make sure that all the
                individual cleaning tasks are done and live up to our high
                standards.With a priority given to customer loyalty and staff
                retention, Nia Cleaners is proud to have a large number of long
                term clients and employees
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default WhyChooseUs;
