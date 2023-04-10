import React from "react";
import { Drawer,  Grid, IconButton, List, Link } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";


const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {/* {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}
          <Grid item xs={12}>
            <Link href="/">Home</Link>
          </Grid>
          <Grid item xs={12}>
            <Link
              href="/About"
              underline="none"
              sx={{ textDecoration: "none" }}
            >
              About
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link
              href="/Services"
              underline="none"
              sx={{ textDecoration: "none" }}
            >
              Services
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link
              href="/ContactUs"
              underline="none"
              sx={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </Grid>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "0", color: "secondary.main" }}
        onClick={() => setOpen(true)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
