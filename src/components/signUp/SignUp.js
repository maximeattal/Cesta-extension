import React, { useState, useEffect, useContext } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Context from "../../Context";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Navigation } from "@mui/icons-material";
import { auth, db } from "../../firebase-config";
import { sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [gender, setGender] = useState("female");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [validation, setValidation] = useState("");
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { signUp, signOut, setUserInfos } = useContext(Context);
  const handleChangeFirstname = (e) => {
    e.preventDefault();
    setFirstname(e.target.value);
  };
  const handleChangeLastname = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };
  const handleChangeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const handleChangeCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleChangeZipcode = (e) => {
    e.preventDefault();
    setZipcode(e.target.value);
  };
  const handleChangeCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleChangeConfirm = (e) => {
    e.preventDefault();
    setConfirm(e.target.value);
  };

  const clearFields = () => {
    setFirstname("");
    setLastname("");
    setAddress("");
    setCity("");
    setZipcode("");
    setCountry("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setValidation("");
    setError(false);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if ((password.length || confirm.length) < 6) {
      setValidation("6 characters min");
      setError(true);
      return;
    } else if (password !== confirm) {
      setValidation("Passwords do not match");
      setError(true);
      return;
    }

    try {
      const cred = await signUp(email, password);
      const userInfo = {
        id: cred.user.uid,
        email: cred.user.email,
        firstname: firstname,
        lastname: lastname,
        address: address,
        city: city,
        zipcode: zipcode,
        country: country,
      };
      await setDoc(doc(db, "users", cred.user.uid), userInfo);
      await sendEmailVerification(auth.currentUser);

      setSend(true);
      clearFields();
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Invalid Email");
      }
      if (error.code === "auth/email-already-in-use") {
        setValidation("Email already used");
      }
    }
  };

  return (
    <div className="signup">
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
      <div className="signup-container">
        <h2 className="create-account-title">Create an account</h2>
        <span className="already-account">
          Already have an account ?&nbsp;
          <a onClick={() => navigate("/")} className="sign-in-link">
            Sign in here
          </a>
        </span>
        {
          send && 
          <span className="verification-email">A verification email has been sent to you !</span>}
        <form className="signup-form" onSubmit={handleForm}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="firstname"
            label="Firstname"
            onChange={handleChangeFirstname}
            value={firstname}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "48%",
              margin: "6px 0",
            }}
          />
          <TextField
            id="lastname"
            label="Lastname"
            onChange={handleChangeLastname}
            value={lastname}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "48%",
              margin: "6px 0",
              position: "absolute",
              right: 0,
            }}
          />
          <TextField
            id="address"
            label="Address"
            onChange={handleChangeAddress}
            value={address}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              margin: "6px 0",
            }}
          />
          <TextField
            id="city"
            label="City"
            onChange={handleChangeCity}
            value={city}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "48%",
              margin: "6px 0",
            }}
          />
          <TextField
            id="zipCode"
            label="Zip Code"
            onChange={handleChangeZipcode}
            value={zipcode}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "48%",
              margin: "6px 0",
              position: "absolute",
              right: 0,
            }}
          />

          <TextField
            id="country"
            label="Country"
            onChange={handleChangeCountry}
            value={country}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              margin: "6px 0",
            }}
          />
          <Divider
            variant="middle"
            sx={{
              width: "100%",
              margin: "10px 0",
              color: "black",
            }}
          />
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
              margin: "6px 0",
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={handleChangePassword}
            value={password}
            error={error}
            required
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              margin: "6px 0",
            }}
          />
          <TextField
            id="confirm"
            label="Confirm"
            type="password"
            onChange={handleChangeConfirm}
            value={confirm}
            helperText={validation}
            variant="outlined"
            required
            size="small"
            sx={{
              width: "100%",
              margin: "6px 0",
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
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
