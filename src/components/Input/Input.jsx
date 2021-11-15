import React from "react";

export default function Input({value, blurHandler, emailHandler, emailError}) {
  return (
        <input
            className="form-control"
            value={value}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            style={emailError}
            name="email"
            type="text"
            placeholder="Enter your email"
        />
  );
}