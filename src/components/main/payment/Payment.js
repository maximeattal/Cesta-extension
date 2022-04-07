/* global chrome */

import React, { useEffect, useState, useContext } from "react";
import "./Payment.css";
import "../Panier.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TextField from "@mui/material/TextField";
import Context from "../../../Context";

const Payment = ({ listMarchands }) => {
  const [deliveryList, setDeliveryList] = useState([]);
  const { userInfos } = useContext(Context);
  useEffect(() => {
    let tempList = [];
    Object.keys(listMarchands).map((key) => {
      if (key === "lafiancee") {
        tempList.push({
          marchandName: "La Fiancée",
          deliveryMethods: "expresslafianc",
        });
      } else if (key === "ikea") {
        tempList.push({
          marchandName: "IKEA",
          deliveryMethods: "expressikea",
        });
      } else if (key === "lagranderecre") {
        tempList.push({
          marchandName: "La Grande Récré",
          deliveryMethods: "expresslagrad",
        });
      } else if (key === "tennispro") {
        tempList.push({
          marchandName: "TennisPro",
          deliveryMethods: "expressten",
        });
      }
    });
    setDeliveryList(tempList);
  }, []);
  return (
    <div className="payment-container">
      <header className="bar-marchand">
        <span className="title-delivery-methods">Add Credit Card</span>
      </header>
      <div className="credit-card-container">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Card Number"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            margin: "10px 0",
            width: "100%",
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Name"
          size="small"
          sx={{
            margin: "10px 0",
            width: "56%",
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Exp date"
          size="small"
          sx={{
            margin: "10px 0",
            width: "27%",
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="CVC"
          size="small"
          sx={{
            margin: "10px 0",
            width: "17%",
          }}
        />
      </div>
      <header className="bar-marchand">
        <span className="title-delivery-address">Billing address</span>
      </header>
      <div className="address-container">
        <FormControl>
          <RadioGroup value="address">
            <FormControlLabel
              value="address"
              control={<Radio />}
              label={
                <>
                  <div>
                    <b>
                      {userInfos.firstname} {userInfos.lastname}
                    </b>
                  </div>
                  <div>{userInfos.address},</div>
                  <div>
                    {userInfos.zipcode}, {userInfos.city}
                  </div>
                  <div>{userInfos.country}</div>
                </>
              }
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
export default Payment;
