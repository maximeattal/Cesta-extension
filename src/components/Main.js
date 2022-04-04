/* global chrome */

import React, { useState, useEffect } from "react";
import Panier from "./Panier";
import PanierLoading from "./PanierLoading";
import Footer from "./Footer";
import Header from "./Header";
import "./Main.css";

const Main = () => {
  const [url, setUrl] = useState("");
  const [exist, setExist] = useState(false);
  const [listMarchands, setListMarchands] = useState({});
  const [allList, setAllList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0)
  const [click, setClick] = useState(0);
  const [toggleLoadingPage, setToggleLoadingPage] = useState(true);

  const loadArticles = () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(["fromContent"], (res) => {
        resolve(res.fromContent);
      });
    });
  };
  useEffect(async () => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });

    const temp = await loadArticles();
    setAllList(temp);

    chrome.storage.local.get(["panier"], (res) => {
      if (res.panier !== undefined) {
        setListMarchands(res.panier);
      }
    });
    handleLoading();
  }, []);
  const clickAction = () => {
    setClick(click + 1)
  }

  useEffect(() => {
    siteSupported();
  }, [allList]);

  const siteSupported = () => {
    if (allList !== undefined && allList.length !== 0) {
      let toggleExist = false;

      Object.keys(allList[1]).forEach((key) => {
        toggleExist = allList[1][key].some((el) => el.site === url);
        if (toggleExist === true) {
          setExist(true);
        }
      });
    }
  };
  const handleLoading = async () => {
    setTimeout(() => {
      setToggleLoadingPage(false);
    }, 300);
  };

  const handleRemoveArticle = (marchandId, articleId) => {
    let temp = listMarchands;
    temp[marchandId].splice(articleId, 1)
    if (temp[marchandId].length === 0) {
      delete temp[marchandId]
    }
    setListMarchands(temp);
    setClick(click + 1);
    chrome.storage.local.set({
      panier: temp,
    });
    console.log("tttt", temp);
  }
  const addArticle = (website) => {
    if (listMarchands[website] === undefined) {
      listMarchands[website] = [];
    }
    if (!listMarchands[website].some((element) => element.site === url)) {
      let temp = listMarchands;
      temp[website].push(
        allList[1][website].find((element) => element.site === url)
      );

      setListMarchands(temp);
      setClick(click + 1);
      chrome.storage.local.set({
        panier: temp,
      });
    } else {
      alert("Article déjà ajouté");
    }
  }
  const handleAddArticle = () => {

    if (url.includes("lafiancee")) {
      addArticle("lafiancee")
    } 
    else if (url.includes("ikea")) {
      addArticle("ikea")
    } 
    else if (url.includes("lagranderecre")) {
      addArticle("lagranderecre")
    } 
    else if (url.includes("tennispro")) {
      addArticle("tennispro")
    }
  };
  return (
    <div className="main-panier">
      <Header />
      {toggleLoadingPage ? (
        <PanierLoading />
      ) : (
        <Panier
          listMarchands={listMarchands}
          handleRemoveArticle={handleRemoveArticle}
          click={click}
        />
      )}
      <Footer
        clickAction={clickAction}
        listMarchands={listMarchands}
        toggleExist={exist}
        handleAddArticle={handleAddArticle}
        click={click}
      />
    </div>
  );
};
export default Main;
