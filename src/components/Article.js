import React, { useState, useEffect } from "react";
import "./Article.css";
import asosArticle from "../icons/asosarticle.jpeg";
import { ButtonGroup, Button, IconButton } from "@mui/material";
import { fontFamily, height } from "@mui/system";

const Article = ({
  marchandId,
  articleId,
  article,
  handleRemoveArticle,
  handleMinusArticle,
  handlePlusArticle,
  handleSetSize,
}) => {
  const [quantity, setQuantity] = useState(article.quantity);
  const [size, setSize] = useState("");
  const handleAddQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
      handlePlusArticle(marchandId, articleId);
    } else {
      alert("5 articles max");
    }
  };
  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleMinusArticle(marchandId, articleId);
    }
  };
  useEffect(() => {
    if (article.size !== undefined) {
      setSize(article.size);
    }
  }, []);
  const handleChangeSize = (e) => {
    setSize(e.target.value);
    handleSetSize(marchandId, articleId, e.target.value);
  };
  return (
    <li className="article">
      <Button
        variant="contained"
        disableElevation
        onClick={() => handleRemoveArticle(marchandId, articleId)}
        sx={{
          position: "absolute",
          padding: "0px",
          minWidth: "0px",
          width: "17px",
          height: "17px",
          top: "0px",
          right: "0px",
          backgroundColor: "#f2f2f2",
          "&:hover": {
            backgroundColor: "#DC143C",
          },
        }}
      >
        x
      </Button>
      <div className="article-image">
        <a href={article.site} target="_blank">
          <img
            src={article.img}
            alt="image item"
            href={article.site}
            target="_blank"
          />
        </a>
      </div>
      <div className="article-description">
        <div className="article-nom">
          <a href={article.site} target="_blank">
            {article.name}
          </a>
        </div>
        <div className="article-qt-size">
          <div className="article-qt">
            <Button
              variant="contained"
              disableElevation
              onClick={handleMinusQuantity}
              sx={{
                padding: "0px",
                minWidth: "0px",
                width: "17px",
                height: "17px",
                backgroundColor: "#FF7300",
                "&:hover": {
                  backgroundColor: "#ff5500",
                },
              }}
            >
              -
            </Button>
            <input type="text" readOnly value={quantity} />
            <Button
              variant="contained"
              disableElevation
              onClick={handleAddQuantity}
              sx={{
                padding: "0px",
                minWidth: "0px",
                width: "17px",
                height: "17px",
                backgroundColor: "#FF7300",
                "&:hover": {
                  backgroundColor: "#ff5500",
                },
              }}
            >
              +
            </Button>
          </div>
          {article.sizes !== undefined && (
            <div className="article-size">
              Size:
              <select
                name="size"
                className="size-select"
                value={article.size}
                onChange={handleChangeSize}
              >
                {article.sizes.map((el) => {
                  return <option value={el}>{el}</option>;
                })}
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="article-price">
        {(article.prix * article.quantity).toFixed(2)}€
      </div>
    </li>
  );
};
export default Article;
