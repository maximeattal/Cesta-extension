import React, { useState } from 'react'
import './Article.css'
import asosArticle from '../icons/asosarticle.jpeg'
import { ButtonGroup, Button } from '@mui/material'
import { fontFamily, height } from '@mui/system'

const Article = () => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('M')

  return (
    <li className='article'>
      <div className='article-image'>
        <img src={asosArticle} alt="image item" />
      </div>
      <div className='article-description'>
        <div className='article-nom'>
          Nike Sportsware Club
        </div>
        <div className='article-qt-size'>
          <div className='article-qt'>
            <Button variant="contained" disableElevation
              sx={{
                padding: "0px",
                minWidth: "0px",
                width: "17px",
                height: "17px",
                backgroundColor: "#FF7300",
                '&:hover': {
                  backgroundColor: '#ff5500',
                },

              }}
            >
              -
            </Button>
            <input type="text"
              readOnly
              value={quantity}
              
            />
            <Button variant="contained" disableElevation
              sx={{
                padding: "0px",
                minWidth: "0px",
                width: "17px",
                height: "17px",
                backgroundColor: "#FF7300",
                '&:hover': {
                  backgroundColor: '#ff5500',
                }
              }}
            >
              +
            </Button>

          </div>
          <div className="article-size">
            Size
            <span>
              {size}
            </span>
          </div>
        </div>
      </div>
      <div className='article-price'>
        35€
      </div>

    </li>
  )
}
export default Article