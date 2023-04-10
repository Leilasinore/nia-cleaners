import React from "react";
import { useNavigate } from "react-router-dom";
import BasicButton from "../components/BasicButton";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./Drawer";

const Header4 = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/contactus");
  };
  return (
    <AppBar
      sx={{ backgroundColor: "background.default" }}
      position="fixed"
      elevation={0}
    >
      <Toolbar>
        <Box component="a" href="/" sx={{ textDecoration: "none" }}>
          <Box component="span" sx={{ color: "primary.main" }} pr={0.5}>
            NIA
          </Box>
          <Box component="span" sx={{ color: "secondary.main" }}>
            CLEANERS
          </Box>
        </Box>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            {/* <Tabs textColor="primary.main">
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs> */}
            <Box flexGrow={1}>
              <Box
                display="flex"
                sx={{
                  marginX: 8,
                  display: "flex",
                  color: "primary.main",
                  justifyContent: "space-around",
                  underline: "none",
                }}
              >
                <Link href="/" sx={{ paddingX: 4, textDecoration: "none" }}>
                  Home
                </Link>
                <Link href="/About" underline="none" sx={{ paddingX: 4 }}>
                  About
                </Link>
                <Link href="/Services" underline="none" sx={{ paddingX: 4 }}>
                  Services
                </Link>

                <Link href="/ContactUs" underline="none" sx={{ paddingX: 4 }}>
                  Contact Us
                </Link>
              </Box>
            </Box>
            <BasicButton
              variant="contained"
              sx={{ color: "white", marginLeft: "auto" }}
              onClick={navigateToContacts}
            >
              Book Now!
            </BasicButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header4;
