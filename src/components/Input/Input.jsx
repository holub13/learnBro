import React from "react";

export default function Input({value, name, placeholder, type, onValueChange, clazz}) {
  
  return (
        <input
            className={`form-control ${clazz}`}
            value={value}
            onChange={(e) =>onValueChange(e)}
            name={name}
            type={type}
            placeholder={placeholder}
        />
  );
}