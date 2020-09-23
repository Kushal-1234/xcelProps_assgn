import React, { useRef } from "react";

function RowAdd({ handleClick }) {
  const inputRef = useRef(null);

  return (
    <div>
      <div className="inputField">
        <div className="colorAdd"></div>
        <input
          ref={inputRef}
          className="inputField__1"
          placeholder=" + Add"
        ></input>
        <button onClick={() => handleClick(inputRef)}>Add</button>
      </div>
    </div>
  );
}

export default RowAdd;
