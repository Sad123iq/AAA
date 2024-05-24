import React from "react";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="watchContainer">
        <div className="watchTop">
          <div className="watchTopLeft">
            <h2>Watch of Choice</h2>
            <p>
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <button>SHOW WATCHES</button>
          </div>
          <div className="watchTopRight">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
              alt=""
            />
          </div>
        </div>
        <div className="watchBottom"></div>
        <div className="watchBottomLeft">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"
            alt=""
          />
        </div>
        <div className="watchBottomRight">
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <button>SHOW WATCHES</button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
