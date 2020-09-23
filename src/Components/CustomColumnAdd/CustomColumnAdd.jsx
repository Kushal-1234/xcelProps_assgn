import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import TextFieldsSharpIcon from "@material-ui/icons/TextFieldsSharp";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomColumnAdd({ handleColumnAddClick, color }) {
  const colName = [
    {
      icon: <MenuIcon />,
      title: "Status",
    },
    {
      icon: <TextFieldsSharpIcon />,
      title: "Text",
    },
    {
      icon: <PeopleOutlineIcon />,
      title: "People",
    },
    {
      icon: <TimelineOutlinedIcon />,
      title: "Timeline",
    },
    {
      icon: <EventOutlinedIcon />,
      title: "Date",
    },
    {
      icon: <FontAwesomeIcon icon={faHashtag} />,
      title: "Tags",
    },
    {
      icon: <FontAwesomeIcon icon={faCalculator} />,
      title: "Numbers",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AddCircleIcon
        className="icons"
        style={{ backgroundColor: "transparent", border: "none", fill: color }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {colName.map((val) => (
          <MenuItem variant={"contained"} key={val.title} onClick={handleClose}>
            <div
              onClick={() => handleColumnAddClick(val.title)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "35px",
                width: "150px",
                backgroundColor: val.color,
                color: "#000000",
                cursor: "pointer",
              }}
            >
              <div style={{ marginRight: "15px" }}>{val.icon} </div>
              <div>{val.title}</div>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CustomColumnAdd;
