import React from "react";
import { Button } from "@mui/material";
const BasicButton = ({ children, ...rest }) => {
  return (
    <Button
      disableElevation
      sx={{ borderRadius: 4, padding: 1.5, width: 180 }}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default BasicButton;
