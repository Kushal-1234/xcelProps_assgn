import React from "react";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MoveToInboxIcon from "@material-ui/icons/MoveToInboxOutlined";
import EventAvailableIcon from "@material-ui/icons/EventAvailableOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import HelpIcon from "@material-ui/icons/HelpOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import "./SideNav.scss";

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav__content1">
        <img
          className="content"
          alt="logo"
          src="https://cdn7.monday.com/images/logos/monday_logo_icon.png"
        ></img>
        <NotificationsIcon className="content" color="action" />
        <MoveToInboxIcon className="content" color="action" />
      </div>
      <div className="sideNav__content2">
        <EventAvailableIcon className="content" color="action" />
        <PersonAddIcon className="content" color="action" />
        <SearchIcon className="content" color="action" />
        <HelpIcon className="content" color="action" />
        <AccountCircleIcon
          className="content content__profile"
          color="action"
        />
      </div>
    </div>
  );
}

export default SideNav;
