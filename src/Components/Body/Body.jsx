import React, { useState } from "react";
import { useId } from "react-id-generator";
import Table from "./Table/Table";
import BodyHeader from "./BodyHeader/BodyHeader";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./Table/Table.scss";

function Body() {
  const [id] = useId();

  const [tableData, setTableData] = React.useState([
    {
      id: 0,
      title: "Test1",
      owner: <AccountCircleOutlinedIcon />,
      date: new Date(),
      priority: "",
    },
    {
      id: 1,
      title: "Test2",
      owner: <AccountCircleOutlinedIcon />,
      date: new Date(),
      priority: "",
    },
  ]);

  const [tableData2, setTableData2] = useState([
    {
      id: 3,
      title: "Test Done",
      owner: <AccountCircleOutlinedIcon />,
      date: new Date(),
      priority: "",
    },
    {
      id: 4,
      title: "Test Done 2",
      owner: <AccountCircleOutlinedIcon />,
      date: new Date(),
      priority: "",
    },
  ]);

  const handleClickTable1 = (inputRef) => {
    let value = inputRef.current.value;
    let newTableData = {
      id: id,
      name: "thingstodo",
      title: value,
      owner: <AccountCircleOutlinedIcon />,
      status: "",
      date: new Date(),
      priority: "",
    };

    inputRef.current.value !== "" && setTableData([...tableData, newTableData]);

    inputRef.current.value = "";
  };

  const handleClickTable2 = (inputRef) => {
    let value = inputRef.current.value;
    let newTableData = {
      id: id,
      name: "thingsdone",
      title: value,
      owner: <AccountCircleOutlinedIcon />,
      status: "",
      date: new Date(),
      priority: "",
    };

    inputRef.current.value !== "" &&
      setTableData2([...tableData2, newTableData]);

    inputRef.current.value = "";
  };

  const headerContent1 = {
    title: "Things to do",
    color: "#0085ff",
  };

  const headerContent2 = {
    title: "Done",
    color: "#5cb85c",
  };

  return (
    <div className="body">
      <BodyHeader />
      <Table
        tableData={tableData}
        handleClick={handleClickTable1}
        headerContent={headerContent1}
      />

      <Table
        tableData={tableData2}
        handleClick={handleClickTable2}
        headerContent={headerContent2}
      />
    </div>
  );
}

export default Body;
