import React from 'react'
import Panier from './Panier'
import PanierLoading from './PanierLoading'
import Footer from './Footer'
import './Main.css'

const Main = ({ toggleLoadingPage, listMarchands, handleAddArticle, click, exist }) => {
  return (
    <div className='main-panier'>
      {
        toggleLoadingPage
          ?
          <PanierLoading />
          :
          <Panier listMarchands={listMarchands} handleAddArticle={handleAddArticle} click={click} />
      }
      <Footer toggleExist={exist} handleAddArticle={handleAddArticle} />
    </div>
  )
}
export default Main
