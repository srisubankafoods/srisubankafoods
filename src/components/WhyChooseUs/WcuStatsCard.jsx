import "./WcuStatsCard.css";
import React, { useState } from "react";
import ecoFoods from "./../../assets/eco-foods.jpg";
import globalHealth from "./../../assets/global-health.jpg";
import hygeneFoods from "./../../assets/hygene-foods.jpg";
import safePackage from "./../../assets/safe-package.jpg";

function wcuStatsCard({ image, desc }) {
  return (
    <div className="stat-card-wrapper">
      {image === "ecoFoods" && <img className="stat-card-img" src={ecoFoods} />}

      {image === "hygeneFoods" && (
        <img className="stat-card-img" src={hygeneFoods} />
      )}
      {image === "safePackage" && (
        <img className="stat-card-img" src={safePackage} />
      )}
      {image === "globalHealth" && (
        <img className="stat-card-img" src={globalHealth} />
      )}

      <h3 className="stat-card-desc">{desc}</h3>
    </div>
  );
}

export default wcuStatsCard;
