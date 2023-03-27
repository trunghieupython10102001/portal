import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Logo.png";
import SearchIcon from "../../assets/icons/Shape.png";
import MenuIcon from "../../assets/icons/more.png";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isMenuOn, setIsMenuOn] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div onClick={() => setIsMenuOn(!isMenuOn)} className="menu">
          <img src={MenuIcon} alt="menu" />
          <Sidebar isDisplay={isMenuOn} />
        </div>
        <div className="search">
          <div className="search-icon">
            <img src={SearchIcon} alt="search" />
          </div>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <div className="avatar">RS</div>
      </div>
    </div>
  );
};

export default Header;
