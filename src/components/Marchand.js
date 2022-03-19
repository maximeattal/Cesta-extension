import React, { useState, useEffect } from 'react'
import './Marchand.css';
import Article from './Article';

const Marchand = ({ marchArticles, click }) => {

  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    let total = 0
    marchArticles.forEach(el => {
      total += el.prix
    })
    setSubTotal(total)
  }, [click])

  return (
    <div className='sous-panier-marchand'>
      <header className='bar-marchand'>
        <span className='marchand-name'>La Fiancé</span>
        <span className='text-sub-tot'>Sub-Total</span>
        <span className='value-sub-tot'>{subTotal.toFixed(2)}€</span>
      </header>
      <ul className='liste-articles'>
        {
          marchArticles.map((element, i) => {
            return (
              <Article key={i} article={element} />
            )
          })
        }
      </ul>
    </div>
  )
}
export default Marchand