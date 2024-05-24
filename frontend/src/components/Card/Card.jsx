import React, { useEffect, useState } from "react";
import "./Card.scss";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div>
      {data
        ? data.map((elem) => (
            <div className="card">
              <div className="cardImg">
                <img
                  src={elem.image}
                  alt=""
                />
              </div>
              <div className="cardBody">
                <h4> {elem.title} </h4>
                <p> {elem.price} </p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Card;
