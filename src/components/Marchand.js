import React, { useState, useEffect } from "react";
import "./Marchand.css";
import Article from "./Article";

const Marchand = ({
  id,
  marchArticles,
  click,
  handleRemoveArticle,
  handleMinusArticle,
  handlePlusArticle,
  handleSetSize,
}) => {
  const [subTotal, setSubTotal] = useState(0);
  const [marchandName, setMarchandName] = useState("");
  useEffect(() => {
    console.log(id);
    if (id === "lafiancee") {
      setMarchandName("La Fiancéee");
    } else if (id === "ikea") {
      setMarchandName("IKEA");
    } else if (id === "lagranderecre") {
      setMarchandName("La Grande Récré");
    } else if (id === "tennispro") {
      setMarchandName("TennisPro");
    }
  }, []);
  useEffect(() => {
    let total = 0;
    marchArticles.forEach((el) => {
      total += el.prix * el.quantity;
    });
    setSubTotal(total);
  }, [click]);

  return (
    <div className="sous-panier-marchand">
      <header className="bar-marchand">
        <span className="marchand-name">{marchandName}</span>
        <span className="text-sub-tot">Sub-Total</span>
        <span className="value-sub-tot">{subTotal.toFixed(2)}€</span>
      </header>
      <ul className="liste-articles">
        {marchArticles.map((element, i) => {
          return (
            <Article
              key={i}
              marchandId={id}
              articleId={i}
              article={element}
              handleRemoveArticle={handleRemoveArticle}
              handleMinusArticle={handleMinusArticle}
              handlePlusArticle={handlePlusArticle}
              handleSetSize={handleSetSize}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Marchand;
