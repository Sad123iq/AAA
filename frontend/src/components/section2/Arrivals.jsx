import React, { useContext, useEffect } from "react";
import "./Arrvals.scss";
import MainContext from "../../context/context";
import Card from "../Card/Card";

const Arrivals = () => {
  const { data } = useContext(MainContext);
  useEffect(() => {});
  return (
    <div>
      <div className="arrivalsContainer">
        <h2>New Arrivals</h2>
        <div className="arrivals">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
