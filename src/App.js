/* global chrome */

import './App.css';
import Panier from './components/Panier';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const App = () => {
  const [url, setUrl] = useState('');
  const [exist, setExist] = useState(false)
  const [listMarchands, setListMarchands] = useState([[]])
  const [allList, setAllList] = useState([])
  const [click, setClick] = useState(0)


  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
    chrome.storage.local.get(["articles"], (res) => {
      setAllList(res.articles)
    })
    window.onbeforeunload = event => {
      const e = event || window.event

      e.preventDefault()
      alert("helloooo")
    }

  }, []);

  useEffect(() => {
    if (allList !== undefined) {
      let toggleExist = false
      allList.forEach((element, i) => {
        if (i !== 0) {
          toggleExist = element.some(el => el.site === url)
          if (toggleExist === true) {
            setExist(true)
          }
        }
      })
    }
  }, [allList])



  const handleAddArticle = () => {
    let temp = listMarchands
    temp[0].push(allList[1].find(element => element.site === url))
    console.log(allList[1].find(element => element.site === url))
    setListMarchands(temp)
    setClick(click + 1)
  }

  return (
    <div className="App">
      <Header />
      <Panier listMarchands={listMarchands} handleAddArticle={handleAddArticle} click={click}/>
      <Footer toggleExist={exist} handleAddArticle={handleAddArticle} />
    </div>
  );
}

export default App;
