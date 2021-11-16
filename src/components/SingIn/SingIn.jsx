import React, {useState, useEffect} from "react";
import "./SingIn.css";
import Input from "../Input/Input"
import {Link} from "react-router-dom";
import * as utils from '../../utils'

export default function SingIn() {
  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
    passwordRepeat: ""
  });
const onValueChange = (e) => {
  const {name, value} = e.target
 setFormValue({...formValue, [name]: value})
}

const [errors, setErrors] = useState({
  login: false,
  loginIsFilled: false,
  passwordMinLength: false,
  passwordMaxLength: false
})

useEffect(() => {
const obj ={
  login: utils.isCheckMinLength(formValue.login, 6),
  loginIsFilled: utils.isCheckEmpty(formValue.login),
  passwordMinLength: utils.isCheckMinLength(formValue.password, 3),
  passwordMaxLength: utils.isCheckMaxLength(formValue.password, 22)
};
setErrors(obj);
}, [formValue])


const sendData = (e) => {
e.preventDefault()
console.log(Object.values(errors));
if(Object.values(errors).every(error=> error)) {
  console.log(formValue)
  // request
}
}

  // const [errors, setErrors] = useState({
  //   errorEmail: false,
  //   errorPassword: false
  // }) 

  // // const [userNameError, setUserNameError] = useState({});
  // // const [passwordError, setPasswordError] = useState({});
  // // const errorStyle = { outline: "3px solid darkred" };

  // const userNamelHandler = (e) => {
  //   setUserName(e.target.value);
  //   // if (e.target.value.length < 3 || e.target.value.length > 22) {
  //   //   setUserNameError(errorStyle);
  //   // } else {
  //   //   setUserNameError({});
  //   // }
  // };

  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  //   if (e.target.value.length < 6) {
  //     setPasswordError(errorStyle);
  //   } else {
  //     setPasswordError({});
  //   }
  // };
  // const blurHandler = (e) => {
  //   switch (e.target.name) {
  //     case "userName":
  //       if (e.target.name && userName === "") {
  //         setUserNameError(errorStyle);
  //       }
  //       break;
  //     case "password":
  //       if (e.target.name && password === "") {
  //         setPasswordError(errorStyle);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="Log">
      <h1>Log in</h1>
      <form onSubmit={sendData}>
          <Input
            clazz={errors.login ? "" : "isValid"}
            name='login'
            placeholder="Enter your login"
            value={formValue.login}
            onValueChange={onValueChange}
            type="text"
          />
          <Input
            clazz={errors.passwordMinLength ? "" : "isValid"}
            name='password'
            placeholder="Enter your password"
            value={formValue.password}
            onValueChange={onValueChange}
            type="password"
          />
        <button className="btn btn-primary">LOGIN</button>
        <Link to="/reg"><button className="btn btn-secondary">Create new account</button></Link>        
      </form>
    </div>
  );
}
