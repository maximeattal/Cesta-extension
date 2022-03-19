import React from 'react'
import './PanierLoading.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PanierLoading = () => {
  return (
    <div className='panier-loading'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )
}
 export default PanierLoading