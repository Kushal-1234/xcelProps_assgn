import React from "react";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { status, priority } from "../../../utils";
import OnClickMenu from "../../OnClickMenu/OnClickMenu";
import RowAdd from "../../RowAdd.jsx/RowAdd";
import RowHead from "./RowHead";
import EditableInput from "../../EditableInput";
import Row from "./Row";
import "./Table.scss";

function Table({ tableData, handleClick, headerContent }) {
  const [tableHead, setTableHead] = React.useState([
    <ArrowDropDownCircleIcon
      style={{ fill: headerContent.color }}
      className="icons"
    />,
    headerContent.title,
    "Owner",
    "Status",
    "Due Date",
    "Priority",
  ]);

  const handleColumnAddClick = (title) => {
    let newTableHead = [...tableHead];
    newTableHead.push(title);
    setTableHead(newTableHead);
    handleRowAddClick(title);
  };

  const date1 = new Date();
  const dataTypes = {
    owner: {
      headerName: "Status",
      data: <AccountCircleOutlinedIcon />,
    },
    status: {
      headerName: "Status",
      data: <OnClickMenu data={status} />,
    },
    date: {
      headerName: "Date",
      data: (
        <React.Fragment>
          {date1.toLocaleString("default", { month: "short" })}
          <span> {date1.getDate()}</span>
        </React.Fragment>
      ),
    },
    priority: {
      headerName: "Priority",
      data: <OnClickMenu data={priority} />,
    },
    people: {
      headerName: "People",
      data: <AccountCircleOutlinedIcon />,
    },
    text: {
      headerName: "Text",
      data: <EditableInput title={""} type={"text"} align="left" />,
    },
    numbers: {
      headerName: "Numbers",
      data: <EditableInput title={""} type={"number"} align="left" />,
    },
    timeline: {
      headerName: "Timeline",
      data: <EditableInput title={""} type={"number"} align="left" />,
    },
    tags: {
      headerName: "Tags",
      data: <EditableInput title={""} type={"number"} align="left" />,
    },
  };

  const [rowData, setRowData] = React.useState([
    <AccountCircleOutlinedIcon />,
    <OnClickMenu data={status} />,
    <React.Fragment>
      {date1.toLocaleString("default", { month: "short" })}
      <span> {date1.getDate()}</span>
    </React.Fragment>,
    <OnClickMenu data={priority} />,
  ]);

  const handleRowAddClick = (title) => {
    let newRowData = [...rowData];
    let newTitle = title.toLowerCase();
    let dataType = dataTypes[newTitle].data;
    newRowData.push(dataType);
    setRowData(newRowData);
  };

  return (
    <div className="TableHeader">
      <table>
        <thead>
          <tr>
            <RowHead
              headerContent={headerContent}
              tableHead={tableHead}
              handleColumnAddClick={handleColumnAddClick}
            />
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <Row key={row.id} id={row.id} rowData={rowData} title={row.title} />
          ))}
        </tbody>
      </table>
      <RowAdd handleClick={handleClick} />
    </div>
  );
}

export default Table;
