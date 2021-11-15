import React, {useState} from "react";
import { Link } from "react-router-dom";
import Input from '../Input/Input'

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const [passwordAgainError, setPasswordAgainError] = useState({});
  const errorStyle = { outline: "3px solid darkred" };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(errorStyle);
    } else {
      setEmailError({});
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
  const passwordHandlerAgain = (e) => {
    setPasswordAgain(e.target.value);
    if (e.target.value !== password) {
        setPasswordAgainError(errorStyle);
    } else {
        setPasswordAgainError({});
    }
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        if (e.target.name && email === "") {
          setEmailError(errorStyle);
        }
        break;
      case "password":
        if (e.target.name && password === "") {
          setPasswordError(errorStyle);
        }
        break;
      case "passwordAgain":
        if (e.target.name && passwordAgain === "") {
            setPasswordAgainError(errorStyle);
        }
        break;
      default:
        break;
    }
  };

  return (      
      <form>
          <input
            className="form-control"
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            style={emailError}
            name="email"
            type="text"
            placeholder="Enter your email"
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
          <input
            className="form-control"
            name="passwordAgain"
            type="password"
            value={passwordAgain}
            onBlur={(e) => blurHandler(e)}  
            onChange={(e) => passwordHandlerAgain(e)}  
            style={passwordAgainError}     
            placeholder="Enter your password again"
          />
          <Input
            className="form-control"
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            style={emailError}
            name="email"
            type="text"
            placeholder="Enter your email"
          />
        <button className="btn btn-primary">REGISTER</button>
        <Link to='/'><button className="btn btn-secondary">Member login</button></Link>
      </form>
  );
}
