import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import EditableInput from "../../EditableInput";

function Row({ title, rowData }) {
  return (
    <tr className="table__body__content">
      <td></td>
      <td className="thingstodo">
        <div className="thingstodo1">
          <div className="colorAdd"></div>
          <EditableInput type={"text"} title={title} align={"left"} />
        </div>
        <FontAwesomeIcon className="message" icon={faComment} />
      </td>
      {rowData.map((row, i) => (
        <td key={i + 3}>{row}</td>
      ))}
    </tr>
  );
}

export default Row;
