import React from "react";
import "./Homepage.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../assests/US-gs-horizontal-logo-09-1.png";
import { width } from "@mui/system";

function Homepage() {
  return (
    <div className="backgroundimg">
      <div className="contect">
        <div className="dp">
          <div>
            <img src={logo} alt="logo" style={{ width: "40%" }} />
          </div>
          <div style={{ width: "100%" }} className="buton">
            <Box style={{ padding: "10px" }}>
              <Button variant="contained" size="medium" fullWidth>
                Job Seeker
              </Button>
            </Box>
            <Box style={{ padding: "10px" }}>
              <Button variant="contained" size="medium" fullWidth>
                Job Provider
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
