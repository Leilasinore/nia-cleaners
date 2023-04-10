import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Tab,
  Tabs,
  Container,
} from "@mui/material";
import BasicButton from "../components/BasicButton";
const Header = () => {
  return (
    <Box>
      <AppBar
        sx={{ backgroundColor: "background.default" }}
        position="fixed"
        elevation={0}
      >
        <Container maxWidth={"xl"}>
          <Toolbar>
            <Box component="a" href="#" sx={{ textDecoration: "none" }}>
              <Box component="span" sx={{ color: "primary.main" }} pr={0.5}>
                NIA
              </Box>
              <Box component="span" sx={{ color: "secondary.main" }}>
                CLEANERS
              </Box>
            </Box>

            <Box flexGrow={1}>
              <Tabs sx={{ marginX: 8 }}>
                <Tab label="Home" sx={{ paddingX: 4 }} />
                <Tab label="About" sx={{ paddingX: 4 }} />
                <Tab label="Services" sx={{ paddingX: 4 }} />
                <Tab label="Pricing" sx={{ paddingX: 4 }} />
                <Tab label="Contact Us" sx={{ paddingX: 4 }} />
              </Tabs>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <BasicButton variant="contained" sx={{ color: "white" }}>
                Book Now!
              </BasicButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
export default Header;
