/* global chrome */

import React, { useEffect, useState } from 'react'
import './Panier.css';

const Panier = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);
  
  return (
    <div>
      {url}
    </div>
  )
}
export default Panier