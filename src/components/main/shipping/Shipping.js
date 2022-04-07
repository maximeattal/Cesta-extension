/* global chrome */

import React, { useEffect, useState, useContext } from "react";
import "./Shipping.css";
import "../Panier.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Context from "../../../Context";

const Shipping = ({ listMarchands }) => {
  const [deliveryList, setDeliveryList] = useState([]);
  const { userInfos } = useContext(Context)
  useEffect(() => {
    let tempList = [];
    Object.keys(listMarchands).map((key) => {
      if (key === "lafiancee") {
        tempList.push({
          marchandName: "La Fiancée",
          deliveryMethods: "Standard Delivery",
        });
      } else if (key === "ikea") {
        tempList.push({
          marchandName: "IKEA",
          deliveryMethods: "Express Delivery",
        });
      } else if (key === "lagranderecre") {
        tempList.push({
          marchandName: "La Grande Récré",
          deliveryMethods: "Standard",
        });
      } else if (key === "tennispro") {
        tempList.push({
          marchandName: "TennisPro",
          deliveryMethods: "No Rush Shipping",
        });
      }
    });
    setDeliveryList(tempList)
  }, []);
  return (
    <div className="shipping-container">
      <header className="bar-marchand">
        <span className="title-delivery-methods">Delivery methods</span>
        <span className="text-sub-tot">Sub-Total</span>
        <span className="value-sub-tot">FREE</span>
      </header>
      {deliveryList.map((el) => {
        return (
          <div className="delivery-container">
            <p className="marchand-name">{el.marchandName}</p>
            <div className="delivery-method">
              <span className="title-delivery">{el.deliveryMethods}</span>
              <span className="value-delivery">FREE</span>
            </div>
          </div>
        );
      })}
      <header className="bar-marchand">
        <span className="title-delivery-address">Delivery address</span>
      </header>
      <div className="address-container">
        <FormControl >
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
export default Shipping;
