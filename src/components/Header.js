import React from 'react'
import './Header.css';
import account from '../icons/account.png'
import accountHover from '../icons/account_hover.png'

const Header = () => {
  return (
    <header className='Header'>
      <nav className="top-bar">
        <a href="#" class="top-bar-logo">Mi cesta</a>
        <ul className="top-bar-list">
          <li className="top-bar-username"><a href="#">User Name</a></li>
          <li className="top-bar-username-icon"><a href="#">
            <img src={account} alt="account1" className="account" />
            <img src={accountHover} alt="account2" className="account-hover" />
          </a></li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header
