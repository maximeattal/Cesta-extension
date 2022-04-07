import React, { useState, useContext } from "react";
import Context from "../../../Context";
import "../Header.css";
import "./HeaderPayment.css";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HeaderPayment = ({ goPage }) => {
  return (
    <header className="Header">
      <nav className="top-bar">
        <IconButton
          sx={{
            border: "0.5px solid #D3D3D3",
          }}
          onClick={() => goPage(2)}
        >
          <ArrowBackIcon sx={{}} />
        </IconButton>
        <div className="payment-header">
          <div className="payment-bar">
            <div className="payment-first"></div>
            <div className="payment-second"></div>
            <div className="payment-third"></div>
            <div className="payment-fourth"></div>
          </div>
          <div className="payment-title-container">
            <p className="payment-title">Payment</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPayment;
