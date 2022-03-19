/* global chrome */

import React, { useEffect, useState } from 'react'
import './Panier.css';
import Marchand from './Marchand';

const Panier = ({listMarchands, click}) => {
  console.log(listMarchands);
  const [toggleListMarch, setToggleListMarch] = useState(false)
  return (
    <div className='liste-panier'>
      {
        listMarchands[0].length !== 0
        &&
        
        listMarchands.map((element, i) => {
          if (element !== []) {

            return <Marchand key={i} marchArticles={element} click={click}/>
          }

        })
      }
    </div>
  )
}
export default Panier