import { LogoURL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, isLogin] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("UseEffect Renderes");
  }, [login]);

  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <img className="w-20 m-4" src={LogoURL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
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
