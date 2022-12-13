import React from "react";
import "../styles/index.scss";

const Banner = () => {
  return (
    <div className="banner">
      <h1>
        Chez vous,
        {<br />} partout et ailleurs
      </h1>
      <img
        src="./images/banner.png"
        alt="Bannière représentant une côte sauvage"
      />
    </div>
  );
};

export default Banner;
