/* global chrome */

console.log("hello from the content script");

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

const getMeta = (attribute, metaName) => {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute(attribute) === metaName) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
};

const loadArticles = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(["fromContent"], (res) => {
      console.log("heloo", res.fromContent);
      resolve(res.fromContent);
    });
  });
};

/*-----------------------------------La Fiancée----------------------------------*/
const getLafiancee = async () => {
  document.getElementById("site_head_wrap").innerHTML =
    '<div style="color: white; font-size: 15px; background-color: #ff7300; width:100%; height: 34px; display:flex; flex-direction: row; align-items: center; justify-content: center;"><img style="max-height: 24px; max-width: 24px" src="https://i.ibb.co/z6H7mKc/logo-icon-blanc.png" alt="logo-icon-blanc"> <b>&nbsp;Compatible: &nbsp;</b> Ajoutez vos articles directement à votre panier Cesta!</div>' +
    document.getElementById("site_head_wrap").innerHTML;

  let articles = await loadArticles();
  if (articles === undefined) {
    articles = [formatDate(new Date()), {}];
  } else if (articles[0] !== formatDate(new Date())) {
    chrome.storage.local.clear();
    articles = [formatDate(new Date()), {}];
  }
  const site = window.location.href;
  const imgToReturn = document.getElementsByClassName(
    "swiper-lazy img_large swiper-lazy-loaded"
  )[0];
  const nom = getMeta("property", "og:title");
  const prix = document.getElementById("prixU");
  if (articles[1].lafiancee === undefined) {
    articles[1].lafiancee = [];
  }
  
  const sizeList = document.querySelectorAll(".input_check.size.prodSize");

  if (
    site !== undefined &&
    imgToReturn !== undefined &&
    nom !== undefined &&
    prix !== undefined &&
    sizeList !== undefined
  ) {
    let sizes = []
    for(let i = 0; i<sizeList.length; i++) {
      if (sizeList[i].className === "input_check size prodSize") {
        sizes.push(sizeList[i].getAttribute("data-nom"));
      }
    }
    console.log("hello", sizes);
    const article = {
      site: site,
      img: imgToReturn.src,
      name: nom,
      prix: parseFloat(prix.value),
      quantity: 1,
      sizes: sizes,
    };
    console.log("bonjour", article);

    if (
      !articles[1].lafiancee.some((element) => element.site === article.site)
    ) {
      console.log("joujo", articles);
      articles[1].lafiancee.push(article);
      chrome.storage.local.set({
        fromContent: articles,
      });
    }
  }
};

/*-----------------------------------IKEA----------------------------------*/

const getIkea = async () => {
    document.getElementById("value-proposition-message").innerHTML =
      '<div style="color: white; font-size: 15px; background-color: #ff7300; width:100%; height: 34px; display:flex; flex-direction: row; align-items: center; justify-content: center;"><img style="max-height: 24px; max-width: 24px" src="https://i.ibb.co/z6H7mKc/logo-icon-blanc.png" alt="logo-icon-blanc"> <b>&nbsp;Compatible: &nbsp;</b> Ajoutez vos articles directement à votre panier Cesta!</div>' +
      document.getElementById("value-proposition-message").innerHTML;
  let articles = await loadArticles();

  if (articles === undefined) {
    articles = [formatDate(new Date()), {}];
  } else if (articles[0] !== formatDate(new Date())) {
    chrome.storage.local.clear();
    articles = [formatDate(new Date()), {}];
  }
  console.log("ikea");
  const site = window.location.href;

  const imgToReturn = document.getElementsByClassName(
    "pip-aspect-ratio-image__image"
  )[0];

  const nom =
    document.getElementsByClassName(
      "pip-header-section__title--big notranslate"
    )[0].textContent +
    " | " +
    document.getElementsByClassName("pip-header-section__description-text")[0]
      .textContent;
  console.log(nom);

  const prix = parseFloat(
    document
      .getElementsByClassName(
        "pip-product__subgrid product-pip js-product-pip"
      )[0]
      .getAttribute("data-product-price")
  );
  console.log("hel", typeof prix);

  if (articles[1].ikea === undefined) {
    articles[1].ikea = [];
  }
  if (
    site !== undefined &&
    imgToReturn !== undefined &&
    nom !== undefined &&
    prix !== undefined
  ) {
    const article = {
      site: site,
      img: imgToReturn.src,
      name: nom,
      prix: prix,
      quantity: 1,
    };
    console.log(article);
    console.log("bonjour", articles);

    if (!articles[1].ikea.some((element) => element.site === article.site)) {
      console.log("joujo", articles);
      articles[1].ikea.push(article);
      chrome.storage.local.set({
        fromContent: articles,
      });
    }
  }
};

/*-----------------------------------La Grande Récré----------------------------------*/

const getLaGrandeRecre = async () => {
  document.getElementById("header").innerHTML =
    '<div style="color: white; font-size: 15px; background-color: #ff7300; width:100%; height: 34px; display:flex; flex-direction: row; align-items: center; justify-content: center;"><img style="max-height: 24px; max-width: 284px" src="https://i.ibb.co/z6H7mKc/logo-icon-blanc.png" alt="logo-icon-blanc"> <b>&nbsp;Compatible: &nbsp;</b> Ajoutez vos articles directement à votre panier Cesta!</div>' +
    document.getElementById("header").innerHTML;
  let articles = await loadArticles();

  if (articles === undefined) {
    articles = [formatDate(new Date()), {}];
  } else if (articles[0] !== formatDate(new Date())) {
    chrome.storage.local.clear();
    articles = [formatDate(new Date()), {}];
  }
  console.log("la grande récré");
  const site = window.location.href;

  const imgToReturn = document.getElementsByClassName(
    "media-visuals-main-img"
  )[0];

  const nom = getMeta("property", "og:title").substring(
    1,
    getMeta("property", "og:title").length
  );
  console.log(nom);

  const prix = parseFloat(
    document
      .getElementsByClassName("price-value")[1]
      .textContent.replace(/ /g, "")
      .replace("€", "")
      .replace(",", ".")
  );
  console.log(prix);

  if (articles[1].lagranderecre === undefined) {
    articles[1].lagranderecre = [];
  }
  if (
    site !== undefined &&
    imgToReturn !== undefined &&
    nom !== undefined &&
    prix !== undefined
  ) {
    const article = {
      site: site,
      img: imgToReturn.src,
      name: nom,
      prix: prix,
      quantity: 1,
    };
    console.log(article);
    console.log("bonjour", articles);

    if (
      !articles[1].lagranderecre.some(
        (element) => element.site === article.site
      )
    ) {
      console.log("joujo", articles);
      articles[1].lagranderecre.push(article);
      chrome.storage.local.set({
        fromContent: articles,
      });
    }
  }
};

/*-----------------------------------TennisPro----------------------------------*/

const getTennisPro = async () => {
  document.getElementById("ezzoom-gdpr_cookiealert").innerHTML =
    '<div style="color: white; font-size: 15px; background-color: #ff7300; width:100%; height: 34px; display:flex; flex-direction: row; align-items: center; justify-content: center;"><img style="max-height: 24px; max-width: 24px" src="https://i.ibb.co/z6H7mKc/logo-icon-blanc.png" alt="logo-icon-blanc"> <b>&nbsp;Compatible: &nbsp;</b> Ajoutez vos articles directement à votre panier Cesta!</div>' +
    document.getElementById("ezzoom-gdpr_cookiealert").innerHTML;
  let articles = await loadArticles();

  if (articles === undefined) {
    articles = [formatDate(new Date()), {}];
  } else if (articles[0] !== formatDate(new Date())) {
    chrome.storage.local.clear();
    articles = [formatDate(new Date()), {}];
  }
  console.log("TennisPro");
  const site = window.location.href;

  const imgToReturn = document.getElementsByClassName("bbox")[0];

  const nom = document.getElementsByClassName("infos__title")[0].textContent;
  console.log(nom);

  const prix = parseFloat(
    document
      .getElementsByClassName("price")[0]
      .textContent.replace(/ /g, "")
      .replace("€", "")
      .replace(",", ".")
  );
  console.log(prix);

  if (articles[1].tennispro === undefined) {
    articles[1].tennispro = [];
  }
  if (
    site !== undefined &&
    imgToReturn !== undefined &&
    nom !== undefined &&
    prix !== undefined
  ) {
    const article = {
      site: site,
      img: imgToReturn.src,
      name: nom,
      prix: prix,
      quantity: 1,
    };
    console.log(article);
    console.log("bonjour", articles);

    if (
      !articles[1].tennispro.some((element) => element.site === article.site)
    ) {
      console.log("joujo", articles);
      articles[1].tennispro.push(article);
      chrome.storage.local.set({
        fromContent: articles,
      });
    }
  }
};

/*-----------------------------------Load Page----------------------------------*/

window.addEventListener("load", function () {
  // chrome.storage.local.clear()
  if (window.location.href.includes("lafiancee")) {
    getLafiancee();
  } else if (window.location.href.includes("ikea")) {
    getIkea();
  } else if (window.location.href.includes("lagranderecre")) {
    getLaGrandeRecre();
  } else if (window.location.href.includes("tennispro")) {
    getTennisPro();
  }
});
