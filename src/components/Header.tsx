import React from "react";
import HeaderImage from "../assets/header-x2.png";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box>
      <Box
        component="img"
        src={HeaderImage}
        sx={{ backgroundRepeat: "no-repeat", width: "100%" }}
      ></Box>
    </Box>
  );
};

export default Header;
