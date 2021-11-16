import React, {useEffect, useState} from "react";
import "./SingUp.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import * as utils from "../../utils"

export default function SingUp() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    passwordRepeat: ""
  });
  const onValueChange = (e) => {
    const {name, value} = e.target
   setFormValue({...formValue, [name]: value})
  }

  const [errors, setErrors] = useState({
    email: false,
    isFilled: false,
    passwordMinLength: false,
    passwordMaxLength: false,
    passwordRepeat: false
  })

useEffect(() => {
  const obj ={
    email: utils.isCheckEmail(formValue.email),
    emailIsFilled: utils.isCheckEmpty(formValue.email),
    passwordMinLength: utils.isCheckMinLength(formValue.password, 3),
    passwordMaxLength: utils.isCheckMaxLength(formValue.password, 22),
    passwordRepeat: utils.isCheckPassRep(formValue.password, formValue.passwordRepeat)
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

  // const isCheckEmail = (e) => {
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         if (e.target.value) {
  //           return true
  //         }
  //         else if (!re.test(String(e.target.value).toLowerCase())) {
  //           setErrors({...errors, email: true});
  //           console.log(errors.email)
  //         } else {
  //           setErrors({...errors, email: false});
  //         };
  //   return true
  // }

  // const isValid= () => {
  //   const newErroEEr = {...errors} 

  //   newErroEEr.email = isCheckEmail() && isCheckMinLength(7, ) && 
  //   password

  //   setErrors(newErroEEr)
  // }
  

  // const validationForm = (stateName) => {
  //     switch (stateName) {
  //       case "email":
  //         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         if (!formValue.email) {
  //           setErrors((prevProp) => {
  //             return {...prevProp, email: true}
  //           });
  //         }
  //         else if (!re.test(String(formValue.email).toLowerCase())) {
  //           setErrors((prevProp) => {
  //             return {...prevProp, email: true}
  //           });
  //         } else {
  //           setErrors((prevProp) => {
  //             return {...prevProp, email: false}
  //           })
  //         };
  //         break;
  //       case "password":
  //         if(!formValue.password){
  //           setErrors((prevProp) => {
  //             return {...prevProp, password: true}
  //           });
  //         }else if (formValue.password.length < 3 || formValue.password.length > 22) {
  //           setErrors((prevProp) => {
  //             return {...prevProp, password: true}
  //           })
  //         }else {
  //           setErrors((prevProp) => {
  //             return {...prevProp, password: false}
  //           })
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  // }

  // const isValid = (e, errors) => {
  //   e.preventDefault()
  //   Object.keys(errors).forEach((item) => validationForm(item))
  // }

  return (
    <section className="Reg">
      <h1>Registration</h1>
      <form onSubmit={sendData}>
          <Input
            clazz={errors.email ? "" : "isValid"}
            name='email'
            placeholder="Enter your email"
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
          <Input
            clazz={errors.passwordRepeat ? "" : "isValid"}
            name='passwordRepeat'
            placeholder="Enter your password again"
            value={formValue.passwordRepeat}
            onValueChange={onValueChange}
            type="password"
          />
        <button type='submit' className="btn btn-primary">LOGIN</button>
        <Link to="/"><button className="btn btn-secondary">Member login</button></Link>        
      </form>
    </section>
  );
}
