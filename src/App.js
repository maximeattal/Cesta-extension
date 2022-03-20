/* global chrome */

import './App.css';
import Panier from './components/Panier';
import Header from './components/Header';
import Footer from './components/Footer';
import PanierLoading from './components/PanierLoading';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main';
const App = () => {
  const [url, setUrl] = useState('');
  const [exist, setExist] = useState(false)
  const [listMarchands, setListMarchands] = useState([[]])
  const [allList, setAllList] = useState([])
  const [click, setClick] = useState(0)
  const [toggleLoadingPage, setToggleLoadingPage] = useState(true)


  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
    chrome.storage.local.get(["fromContent"], (res) => {
      setAllList(res.fromContent)

    })
    chrome.storage.local.get(["panier"], (res) => {
      if (res.panier !== undefined) {
        setListMarchands(res.panier)
      }
    })
    console.log("test");
    handleLoading()

  }, []);

  const handleLoading = async () => {
    setTimeout(() => {
      setToggleLoadingPage(false)
    }, 300)
  }
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
    if (!listMarchands[0].some(element => element.site === url)) {
      let temp = listMarchands
      temp[0].push(allList[1].find(element => element.site === url))
      setListMarchands(temp)
      setClick(click + 1)
      chrome.storage.local.set({
        "panier": temp,
      })
    }
    else {
      alert("Article déjà ajouté")
    }
  }

  return (
    <div className="App">
      <Header />
      <Main toggleLoadingPage={toggleLoadingPage} listMarchands={listMarchands} 
      handleAddArticle={handleAddArticle} click={click} exist={exist}/>
      
    </div>
  );
}

export default App;
