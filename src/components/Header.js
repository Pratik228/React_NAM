import { LogoURL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, isLogin] = useState(true);

  useEffect(() => {
    console.log("UseEffect Renderes");
  }, [login]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LogoURL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              isLogin(!login);
            }}
          >
            {login ? "login" : "logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
