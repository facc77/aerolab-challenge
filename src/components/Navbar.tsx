import React from "react";
import Box from "@mui/material/Box";
import Logo from "../assets/aerolab-logo.svg";
import Coin from "../assets/icons/coin.svg";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box
      sx={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Box component="img" src={Logo} sx={{ width: "39px", height: "36px" }} />
      <Box sx={{ display: "flex" }}>
        <Typography>usuario</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>6000</Typography>
          <Box
            component="img"
            src={Coin}
            sx={{ width: "39px", height: "36px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
