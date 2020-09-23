import React from "react";
import "./App.scss";
import Body from "./Components/Body/Body";
import SideNav from "./Components/SideNav/SideNav";
import SideNav2 from "./Components/SideNav2/SideNav2";

// Divided the given design into 3 equal halfs
// 1. SideNav
// 2. SideNav2
// 3. Body

// Components flow          Helper Components         Functionalities Implemented
// 1. SideNav               1. SearchInput            1. Implemented UI/UX design as given in the requirement document
// 2. SideNav2              2. EditableInput          2. Add/Edit "Row" data
// 3. BodyHeader            3. OnClickMenu            3. Add "Column" data with different data types
// 4. Body                  4. CustomColumnAdd        4. Edit Table header
// 5. Table                                           5. Added buttons with drop down menu for "Status" & "Priority" columns
// 6. RowHead
// 7. RowAdd

function App() {
  return (
    <div className="app">
      <SideNav />
      <SideNav2 />
      <Body />
    </div>
  );
}

export default App;
