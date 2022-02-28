import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div class="bottom-bar">
        <ul class="bottom-bar-total">
          <li class="bottom-bar-text">Total Amount</li>
          <li class="bottom-bar-sum">$364</li>
        </ul>
        <a href="#" class="checkout-button">Check out</a>
      </div>
    </footer>
  )
}
export default Footer