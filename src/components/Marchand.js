import React from 'react'
import './Marchand.css';
import Article from './Article';
const list = ["element1", "element2"]

const Marchand = () => {

  return (
    <div className='sous-panier-marchand'>
      <header className='bar-marchand'>
        <span className='marchand-name'>asos.com</span>
        <span className='text-sub-tot'>Sub-Total</span>
        <span className='value-sub-tot'>$125</span>
      </header>
      <ul className='liste-articles'>
        <Article />
        {/* {
          list.map((element, i) => {
            return (
              <li>
                {element}
              </li>
            )
          })
        } */}
      </ul>
    </div>
  )
}
export default Marchand