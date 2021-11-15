import React, {useState} from "react";
import "./SingIn.css";
import {Link} from "react-router-dom";
import singInConfig from './SingInConfig';

export default function SingIn() {
console.log(singInConfig)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const errorStyle = { outline: "3px solid darkred" };

  const userNamelHandler = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 22) {
      setUserNameError(errorStyle);
    } else {
      setUserNameError({});
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError(errorStyle);
    } else {
      setPasswordError({});
    }
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "userName":
        if (e.target.name && userName === "") {
          setUserNameError(errorStyle);
        }
        break;
      case "password":
        if (e.target.name && password === "") {
          setPasswordError(errorStyle);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="Log">
      <h1>Log in</h1>
      <form>
          <input
            className="form-control"
            value={userName}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => userNamelHandler(e)}
            style={userNameError}
            name="userName"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
            style={passwordError}
            placeholder="Enter your password"
          />
        <button className="btn btn-primary">LOGIN</button>
        <Link to="/reg"><button className="btn btn-secondary">Create new account</button></Link>        
      </form>
    </div>
  );
}
