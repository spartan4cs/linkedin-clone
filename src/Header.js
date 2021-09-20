import React from "react";
import "./Header.css";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";
import HeaderOption from "./HeaderOption";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notification" Icon={Notifications} />
        <HeaderOption
          title="Me"
          avatar="https://pbs.twimg.com/profile_images/1393954096776761344/XXUnwfUF_400x400.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
