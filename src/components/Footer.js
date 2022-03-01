import React from 'react'
import './Footer.css';
import Button from '@mui/material/Button';


const Footer = () => {
  return (
    <footer className='Footer'>
      <div class="bottom-bar">
        <ul class="bottom-bar-total">
          <li class="bottom-bar-text">Total Amount</li>
          <li class="bottom-bar-sum">$364</li>
        </ul>
        <Button variant="contained" disableElevation
          sx={{
            backgroundColor: '#ff7300',
            borderRadius: '5px',
            fontFamily: "Montserrat-Medium",
            fontSize: '16px',
            width: '187px',
            height: '41px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ff5500',
            }
          }}
        >
          Check out
        </Button>
      </div>
    </footer>
  )
}
export default Footer