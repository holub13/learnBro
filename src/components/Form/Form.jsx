import React, {useState, useEffect,useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import * as utils from '../../utils';


const Form = ({config, configErrors, to, title, titleLink, /* onValueChange, onCustomSubmit*/}) => {
  
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});  

  useLayoutEffect(() => {
    const values = {};
    config.forEach((field) => {
      const { name } = field;
      values[name] = "";
      // console.log(field);
    });
    setFormValue(values);
  }, [config]);

  
  useEffect(() => {
    const newErrors = {...configErrors};
    // console.log(newErrors)
    setErrors(newErrors);
  }, [configErrors]);

  
  useEffect(() => {
    Object.keys(formValue).forEach(() => {
      if (!Object.keys(formValue).includes("email")) {
        const obj = {
          login: utils.isCheckMinLength(formValue.login, 6),
          loginIsFilled: utils.isCheckEmpty(formValue.login),
          passwordMinLength: utils.isCheckMinLength(formValue.password, 3),
          passwordMaxLength: utils.isCheckMaxLength(formValue.password, 22)
        };
        setErrors((prevState) => ({...prevState, ...obj}));
      }else if (Object.keys(formValue).includes("email")) {
          const obj = {
          login: utils.isCheckMinLength(formValue.login, 6),
          email: utils.isCheckEmail(formValue.email),
          emailIsFilled: utils.isCheckEmpty(formValue.email),
          passwordMinLength: utils.isCheckMinLength(formValue.password, 3),
          passwordMaxLength: utils.isCheckMaxLength(formValue.password, 22),
          passwordRepeat: utils.isCheckPassRep(formValue.password, formValue.passwordRepeat)
        };
        setErrors((prevState) => ({...prevState, ...obj}));
      }
    });
  }, [formValue])

  const onValueChange = (e) => {
    const {name, value} = e.target
    setFormValue({...formValue, [name]: value})
  }

  const sendData = (e) => {
    e.preventDefault()
    if(Object.values(errors).every(error=> error)) {
      console.log(errors);
      console.log(formValue)
      // request
    }
  }

  return (      
    <form className="form" /*onSubmit={sendData}*/>
      {config.map((item) => (
        <Input
          key={item.name}
          name={item.name}
          type={item.type}
          onValueChange={onValueChange}
          placeholder={item.placeholder}
        />
      ))}
      {/* <button onClick={onCustomSubmit} type="button" className="btn btn-primary">{title}</button> */}
      <button onClick={sendData} type="button" className="btn btn-primary">{title}</button>
      <Link to={to}><button className="btn btn-secondary">{titleLink}</button></Link>
    </form>
  );
}

export default Form