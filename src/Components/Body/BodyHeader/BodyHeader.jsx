import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faVideo, faStar } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PowerOutlinedIcon from "@material-ui/icons/PowerOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import "./BodyHeader.scss";

function BodyHeader() {
  return (
    <div className="bodyHeader">
      <div className="bodyHeader__content1">
        <div className="bodyHeader__content1__header__1">
          <div>
            <div className="bodyHeader__content1__header__1__1">
              <h1>Web Design</h1>
              <FontAwesomeIcon icon={faStar} size="2x" color="#e5e5e5" />
            </div>
            <p>Add board description</p>
          </div>
        </div>
        <div className="bodyHeader__content1__header__2">
          <div className="bodyHeader__content1__header__2__title">
            <AccountCircleIcon fontSize="large" />
          </div>
          <div className="bodyHeader__content1__header__2__content">
            <PowerOutlinedIcon fontSize="small" color="action" />
            <span> / 0 </span>
          </div>
          <div className="bodyHeader__content1__header__2__content ">
            <FontAwesomeIcon icon={faRobot} size="xs" color="gray" />
            <span> / 0 </span>
          </div>
          <div className="bodyHeader__content1__header__2__content">
            <FontAwesomeIcon
              icon={faVideo}
              size="2x"
              color="white"
              className="videoIcon"
            />
            <p> Start Zoom call</p>
          </div>
          <div className="bodyHeader__content1__header__2__content bodyHeader__content1__header__2__content__1">
            <PeopleOutlineIcon color="action" />
            <span> / 1 </span>
            <p>
              <span> | </span> Activities <span> / 0 </span>
            </p>
          </div>
          <MoreHorizIcon className="menu" />
        </div>
      </div>
      <div className="bodyHeader__content2">
        <div className="bodyHeader__content2__header1">
          <TableChartOutlinedIcon color="action" />
          <p>Main Table</p>
          <ExpandMoreOutlinedIcon color="action" />
        </div>
        <div className="bodyHeader__content2__header2">
          <button className="bodyHeader__content2__header2__content bodyHeader__content2__header2__newItemButton">
            <p>New Item</p> <ExpandMoreOutlinedIcon />
          </button>
          <div className="bodyHeader__content2__header2__content">
            <input type="text" placeholder="Search / Filter Board" />
          </div>
          <AccountCircleOutlinedIcon
            className="bodyHeader__content2__header2__icons"
            color="action"
          />
          <VisibilityOffIcon
            className="bodyHeader__content2__header2__icons"
            fontSize="small"
          />
          <FilterListOutlinedIcon
            className="bodyHeader__content2__header2__icons"
            fontSize="small"
          />
        </div>
      </div>
    </div>
  );
}

export default BodyHeader;
