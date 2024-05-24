import React from "react";
import "./Popular.scss";
import Card from "../Card/Card";

const Popular = () => {
  return (
    <div className="popular">
      <div className="populartext">
        <h2>Popular Items</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className="popularItems">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
      </div>
      <div className="popularBtn">
        <button>VIEW MORE PRODUCTS</button>
      </div>
    </div>
  );
};

export default Popular;
