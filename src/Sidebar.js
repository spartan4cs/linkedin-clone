import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQGVVeIOr7nvxg/profile-displaybackgroundimage-shrink_350_1400/0/1621162631821?e=1637798400&v=beta&t=a6TsV3ypLhcpDlR6Qi2h51V1mvy1sExgTD4f5o4QXTA"
          alt=""
        />

        <Avatar className="sidebar__avatar" />
        <h2>Akash Kumbhare</h2>
        <h4>aakashkumbhare@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,544</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4051</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("softwareengineering")}
        {recentItem("dsa")}
        {recentItem("algorithms")}
        {recentItem("design")}
        {recentItem("developers")}
      </div>
    </div>
  );
};

export default Sidebar;
