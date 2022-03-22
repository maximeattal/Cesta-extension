import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../icons/icon128.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="logo-cesta" />
        </div>
        Login
        <form action="">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              margin: "10px 0",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              margin: "10px 0",
            }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#ff7300",
              borderRadius: "5px",
              fontFamily: "Montserrat-Medium",
              fontSize: "14px",
              width: "100%",
              height: "40px",
              margin: "10px 0",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ff5500",
              },
            }}
          >
            Sign in
          </Button>
        </form>
        <a href="">Forgot your password</a>
        <Divider
          variant="middle" 
          sx={{
            width: "100%",
            margin: "15px",
            color: "black"

          }}
        />
        <span>Don't have Cesta account ?</span>
        <a href="">Create one now</a>
      </div>
      <div className="wave"></div>
    </div>
  );
};
export default Login;
