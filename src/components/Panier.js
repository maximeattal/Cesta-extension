import React from 'react'
import './Panier.css'; 
import account from '../icons/account.png'
import accountHover from '../icons/account_hover.png'
const Panier = ()  => {
  return (
    <div>
      <header>
        <nav class="top-bar">
          <a href="#" class="top-bar-logo">Mi cesta</a>
          <ul class="top-bar-list">
            <li class="top-bar-username"><a href="#">User Name</a></li>
            <li class="top-bar-username-icon"><a href="#">
              <img src={account} alt="account1" class="account" />
              <img src={accountHover} alt="account2" class="account-hover" />
            </a></li>
          </ul>
        </nav>
      </header>



      <footer>
        <div class="bottom-bar">
          <ul class="bottom-bar-total">
            <li class="bottom-bar-text">Total Amount</li>
            <li class="bottom-bar-sum">$364</li>
          </ul>
          <a href="#" class="checkout-button">Check out</a>
        </div>
      </footer>
    </div>
  )
}
 export default Panier