import React, { useState, useEffect } from 'react'
import './Article.css'
import asosArticle from '../icons/asosarticle.jpeg'
import { ButtonGroup, Button } from '@mui/material'
import { fontFamily, height } from '@mui/system'

const Article = ({ article }) => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('M')
  return (
    <li className="article">
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
          <div className="article-size">
            Size
            <span>{size}</span>
          </div>
        </div>
      </div>
      <div className="article-price">{article.prix.toFixed(2)}€</div>
    </li>
  );
}
export default Article