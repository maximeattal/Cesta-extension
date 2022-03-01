import React from 'react'
import './Header.css';
import account from '../icons/account.png'
import accountHover from '../icons/account_hover.png'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <header className='Header'>
      <nav className="top-bar">
        <span href="#" class="top-bar-logo">Mi cesta</span>
        <ul className="top-bar-list">
          <li className="top-bar-username"><a href="#">User Name</a></li>
          <li className="top-bar-username-icon">
            <IconButton sx={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              padding: 0
            }}>
              <AccountCircleIcon sx={{
                height: '100%',
                width: '100%',
                color: '#1E2634',
                '&:hover': {
                  color: '#FF7300',
                }
              }}/>
            </IconButton>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header
