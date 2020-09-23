import React from "react";
import CustomColumnAdd from "../../CustomColumnAdd/CustomColumnAdd";
import EditableInput from "../../EditableInput";

function RowHead({ headerContent, tableHead, handleColumnAddClick }) {
  return (
    <React.Fragment>
      {tableHead.map((head, i) => (
        <td
          key={i}
          className={"TableHeader__col" + i}
          style={
            (i === 1 && headerContent.title === "Done") ||
            (i === 1 && headerContent.title === "Things to do")
              ? { color: headerContent.color }
              : { color: "#000000" }
          }
        >
          {i === 0 && head}
          {i !== 0 && (
            <EditableInput
              title={head}
              align={i === 1 ? "left" : "center"}
              type={"text"}
            />
          )}
        </td>
      ))}
      <td className="emptyCell">
        <CustomColumnAdd
          color={headerContent.color}
          handleColumnAddClick={handleColumnAddClick}
          className="icons "
        />
      </td>
    </React.Fragment>
  );
}

export default RowHead;
