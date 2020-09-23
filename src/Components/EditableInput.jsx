import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Input } from "@material-ui/core";

function EditaleInput({ type, title, align }) {
  const [value, setValue] = React.useState(title);
  const handleEditClickValue = (e) => {
    let val = e.target.value;
    setValue(val);
  };

  const [editable, setEditable] = React.useState(false);

  const handleEditClick = () => {
    setEditable(() => !editable);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {editable ? (
        <Input value={value} type={type} onChange={handleEditClickValue} />
      ) : (
        <span
          style={{
            textAlign: align,
            width: "220px",
            overflow: "hidden",
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            justifyContent: "center",
            marginLeft: "7px",
          }}
        >
          {value}
        </span>
      )}
      {editable ? (
        <CheckCircleIcon
          fontSize="small"
          className="editButton"
          onClick={handleEditClick}
        />
      ) : (
        <EditIcon
          fontSize="small"
          className="editButton"
          onClick={handleEditClick}
        />
      )}
    </div>
  );
}

export default EditaleInput;
