import React from "react";

function Input(props) {
  return (
    <div>
        <label>{props.placeholder + ': '}</label>
        <input type="text" placeholder={props.placeholder}></input>
    </div>
  );
}

export default Input;