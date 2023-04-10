import React from "react";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Box,
} from "@mui/material";


export default function Mission() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h3" gutterBottom>
          Our{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            Mission
          </Box>{" "}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12}>
          <Box>
            <Card
              sx={{ bgcolor: "white" }}
              maxHeight={500}
              height={400}
              elevation={0}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Our {""}
                  </Box>
                  <Box component="span" sx={{ color: "secondary.main" }}>
                    Mission
                  </Box>
                </Typography>
                <Typography gutterBottom color="textSecondary">
                  "By mirroring our clients vision and by understanding the way
                  they operate, Nia Cleaners expects to add significant value to
                  their business. This means that, over and above providing the
                  highest quality cleaning solutions and most competitive
                  pricing,a key target at Nia Cleaners is to create a continued
                  working partnership."{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12} py={2} my={1}>
          <Card
            sx={{ bgcolor: "white" }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <Box component="span" sx={{ color: "primary.main" }}>
                  Environmental {""}
                  <Box sx={{ color: "secondary.main" }} component="span">
                    Policy
                  </Box>
                </Box>
              </Typography>
              <Typography gutterBottom color="textSecondary">
                "Environmental awareness and preservation are becoming
                increasingly important elements of the working environment. For
                many years workplaces have let their waste management and
                environmental responsibilities take a back seat however, Nia
                Cleaners Ltd has prided itself on not being one of the many."{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12} py={2} my={1}>
          <Card
            sx={{ bgcolor: "white" }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <Box component="span" sx={{ color: "primary.main" }}>
                  Social {""}
                </Box>
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Corpoarte Responsibility
                </Box>
              </Typography>
              <Typography gutterBottom color="textSecondary">
                "The environment pillar appreciates the role that Mother Nature
                plays in providing us with this treasure called environment. We
                appreciate the impact our business makes in the course of our
                day to day operations and we have made a commitment to
                participate in the conservation of the environment for today and
                future generations."{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
