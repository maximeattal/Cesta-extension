/* global chrome */

console.log("hello from the content script");

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

const getMeta = (attribute, metaName) => {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute(attribute) === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}

const loadArticles = () => {
  return new Promise(resolve => {
    chrome.storage.local.get(["fromContent"], (res) => {
      console.log("heloo", res)
      resolve(res.articles)
    })
  })
}
const getimg = async () => {

  let articles = await loadArticles()
  if (articles === undefined) {
    articles = [formatDate(new Date()), []]
  }
  else if (articles[0] !== formatDate(new Date())) {
    chrome.storage.local.clear()
    alert(articles[0])
    articles = [formatDate(new Date()), []]
  }
  const site = window.location.href
  const imgToReturn = document.getElementsByClassName("swiper-lazy img_large swiper-lazy-loaded")[0].src
  const nom = getMeta("property", "og:title")
  const prix = parseFloat(document.getElementById("prixU").value)

  const article = {
    site: site,
    img: imgToReturn,
    name: nom,
    prix: prix,
  }
  articles[1].push(article)
  console.log("joujo", articles)
  chrome.storage.local.set({
    "fromContent": articles,
  })
  // console.log(article);
}
window.addEventListener('load', function () {
  getimg();
  //chrome.storage.local.clear()
})
