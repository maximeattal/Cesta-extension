/* global chrome */

import React, { useEffect, useState } from "react";
import "./Panier.css";
import Marchand from "./Marchand";

const Panier = ({
  handleRemoveArticle,
  listMarchands,
  click,
  handleMinusArticle,
  handlePlusArticle,
  handleSetSize,
}) => {
  return (
    <div className="liste-panier">
      {Object.keys(listMarchands).length !== 0 ? (
        Object.keys(listMarchands).map((key) => {
          if (listMarchands[key] !== []) {
            return (
              <Marchand
                key={key}
                id={key}
                marchArticles={listMarchands[key]}
                handleRemoveArticle={handleRemoveArticle}
                handleMinusArticle={handleMinusArticle}
                handlePlusArticle={handlePlusArticle}
                handleSetSize={handleSetSize}
                click={click}
              />
            );
          }
        })
      ) : (
        <span className="panier-vide">Votre Panier est Vide</span>
      )}
    </div>
  );
};
export default Panier;
