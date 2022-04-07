import React, { useState, useContext } from "react";
import Context from "../../../Context";
import "../Header.css";
import "./HeaderShipping.css";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HeaderShipping = ({ goPage }) => {

  return (
    <header className="Header">
      <nav className="top-bar">
        <IconButton
          sx={{
            border: "0.5px solid #D3D3D3",
          }}
          onClick={() => goPage(1)}
        >
          <ArrowBackIcon sx={{}} />
        </IconButton>
        <div className="shipping-header">
          <div className="shipping-bar">
            <div className="shipping-first"></div>
            <div className="shipping-second"></div>
            <div className="shipping-third"></div>
          </div>
          Shipping
        </div>
      </nav>
    </header>
  );
};

export default HeaderShipping;
