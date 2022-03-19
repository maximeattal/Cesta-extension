/* global chrome */

import React, { useEffect, useState } from 'react'
import './Panier.css';
import Marchand from './Marchand';

const Panier = ({listMarchands, click}) => {
  return (
    <div className='liste-panier'>
      {
        listMarchands.map((element, i) => {
          if (listMarchands !== undefined) {

            return <Marchand key={i} marchArticles={element} click={click}/>
          }

        })
      }
    </div>
  )
}
export default Panier