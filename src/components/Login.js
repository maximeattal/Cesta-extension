import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import logo from "../icons/icon128.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context";
import { QueuePlayNext } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const [forgotPwd, setForgotPwd] = useState(false)

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { signIn, setUser } = useContext(Context);
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const cred = await signIn(email, password);
      setValidation("");
      if(cred.user.emailVerified) {
        setUser(cred.user)
        navigate("/private/main");
      }
      else {
        setValidation("Please verify your email")
        setError(true)
      }
    } catch (error) {
      setValidation("Wopsy, email and/or password incorrect")
      setError(true)
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="logo-cesta" />
        </div>
        <form onSubmit={handleForm}>
          <TextField
            id="email"
            label="Email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              margin: "10px 0",
            }}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            onChange={handleChangePassword}
            value={password}
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
            Sign in
          </Button>
        </form>
        <p className="forgot-link" onClick={() => navigate("/forgotpwd")}>
          Forgot your password?
        </p>
        <span></span>
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            margin: "15px",
            color: "black",
          }}
        />
        <span>Don't have Cesta account ?</span>
        <p className="create-account-link" onClick={() => navigate("/signup")}>
          Create one now.
        </p>
      </div>
      <div className="wave"></div>
    </div>
  );
};
export default Login;
