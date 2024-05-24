import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerContainer">
          <div className="headerLogo">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
              alt=""
            />
          </div>

          <div className="headerList">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>About</li>
              <li>Lates</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>
                <Link to="/basket">Basket</Link>
              </li>
            </ul>
          </div>

          <div className="headerIcns">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
