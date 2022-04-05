import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import "./ForgotPwd.css";
import logo from "../icons/icon128.png";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

const ForgotPwd = () => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState("");
  const [forgotPwd, setForgotPwd] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { forgotPassword } = useContext(Context);
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    try {
      await forgotPassword(email);
      setForgotPwd(true);
      setError(false)
      setValidation("");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError(true);
        setValidation("User not found")
      }
      console.log(err);
    }
  };

  return (
    <div className="login">
      <IconButton
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          border: "0.5px solid #D3D3D3",
        }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon sx={{}} />
      </IconButton>
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="logo-cesta" />
        </div>
        <p className="forgot-password-message">
          Enter your account email, we'll send you a link to reset your password
        </p>
        <form onSubmit={handleForgotPassword}>
          <TextField
            id="email"
            label="Email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
            error={error}
            helperText={validation}
            required
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
            type="submit"
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
            Reset password
          </Button>
        </form>
        {forgotPwd && (
          <span className="email-send-reset">
            An e-mail to reset your password has been sent to you.
          </span>
        )}

        <Divider
          variant="middle"
          sx={{
            width: "100%",
            margin: "15px",
            color: "black",
          }}
        />
      </div>
      <div className="wave"></div>
    </div>
  );
};
export default ForgotPwd;
