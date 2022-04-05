import React, { useState, useEffect } from "react";
import "./Footer.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const Footer = ({
  toggleExist,
  handleAddArticle,
  listMarchands,
  click,
  clickAction,
}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let totalAmount = 0;
    Object.keys(listMarchands).forEach((key) => {
      listMarchands[key].forEach((element) => {
        totalAmount += element.prix;
      });
    });
    setTotalAmount(totalAmount);
  }, [click]);
  const handleLoading = async () => {
    setTimeout(() => {
      clickAction();
    }, 50);
  };
  useEffect(() => {
    handleLoading()
  }, [])
  return (
    <footer className="Footer">
      <div class="bottom-bar">
        <ul class="bottom-bar-total">
          <li class="bottom-bar-text">Total Amount</li>
          <li class="bottom-bar-sum">{totalAmount.toFixed(2)} €</li>
        </ul>

        <Button
          variant="contained"
          onClick={handleAddArticle}
          disabled={!toggleExist}
        >
          <AddIcon />
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#ff7300",
            borderRadius: "5px",
            fontFamily: "Montserrat-Medium",
            fontSize: "16px",
            width: "150px",
            height: "41px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#ff5500",
            },
          }}
        >
          Check out
        </Button>
      </div>
    </footer>
  );
};
export default Footer;
