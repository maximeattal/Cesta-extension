import React from 'react'
import './Footer.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
const Footer = ({ toggleExist, handleAddArticle}) => {

  const navigate = useNavigate()

  return (
    <footer className='Footer'>
      <div class="bottom-bar">
        <ul class="bottom-bar-total">
          <li class="bottom-bar-text">Total Amount</li>
          <li class="bottom-bar-sum">$364</li>
        </ul>

        <Button variant='contained' onClick={handleAddArticle} disabled={!toggleExist}>
          <AddIcon />
        </Button>
        <Button 
          variant="contained" 
          disableElevation
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: '#ff7300',
            borderRadius: '5px',
            fontFamily: "Montserrat-Medium",
            fontSize: '16px',
            width: '150px',
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