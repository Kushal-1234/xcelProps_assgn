import React from "react";
import { Menu, MenuItem } from "@material-ui/core";

function OnClickMenu({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [currentStatus, setCurrentStatus] = React.useState([
    {
      title: "Working on it",
      color: "",
    },
  ]);

  const handleStatusChange = (e) => {
    const title = e.target.innerText;
    const currentStatus = data.find((val) => val.title === title);
    setCurrentStatus({ ...currentStatus });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          width: "100%",
          height: "30px",
          color: "#ffffff",
          backgroundColor: currentStatus.color,
        }}
        size="large"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {currentStatus.title}
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((val) => (
          <MenuItem variant={"contained"} key={val.color} onClick={handleClose}>
            <button
              onClick={handleStatusChange}
              style={{
                height: "35px",
                width: "150px",
                backgroundColor: val.color,
                color: "white",
                cursor: "pointer",
              }}
            >
              {val.title}
            </button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default OnClickMenu;
