import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import "./SideNav2.scss";

function SideNav2() {
  return (
    <div className="sideNav2">
      <div className="sideNav2__content1">
        <div className="sideNav2__content1__header">
          <h1>Workspaces</h1>
          <ChevronLeftOutlinedIcon className="sideNav2__content1__header__arrowIcon" />
        </div>
        <SearchInput />
        <div className="sideNav2__content1__main">
          <div className="sideNav2__content1__main__content">
            <HomeOutlinedIcon
              color="action"
              className="sideNav2__content1__main__content__homeIcon"
            />
            <p className="sideNav2__content1__main__content__text">Main</p>
          </div>
          <AddCircleOutlineOutlinedIcon
            color="primary"
            className="sideNav2__content1__main__plusIcon"
          />
        </div>
        <p className="sideNav2__content1__text">Web design</p>
      </div>
      <div className="sideNav2__content2">
        <h1 className="sideNav2__content2__text">Dashboards</h1>
        <button className="sideNav2__content2__downloadButton">
          <p>Get the mobile app</p>
          <FontAwesomeIcon
            className="sideNav2__content2__icon"
            icon={faGooglePlay}
          />
          <FontAwesomeIcon
            className="sideNav2__content2__icon"
            icon={faApple}
          />
        </button>
      </div>
    </div>
  );
}

export default SideNav2;
