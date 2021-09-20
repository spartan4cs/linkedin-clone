import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Search } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;