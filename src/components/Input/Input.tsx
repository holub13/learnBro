import React from "react";

import "./Input.css";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({name, type, placeholder, onValueChange, invalid}): JSX.Element => {  
  return (
    <div>
      <input
        className={`form-control ${invalid ? "" : " invalid"}`}
        onChange={(e) =>onValueChange(e)}
        key={name}
        name={name}
        type={type}
        placeholder={placeholder}
    />
    </div>    
  );
}

export default Input