import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Input from "../Input";
import * as types from "./types"

import * as utils from '../../utils';

const Form: React.FC<types.FormProps> = ({config, to, title, titleLink}) => {
  const [formValue, setFormValue] = useState<types.Fields>({});
  const [errors, setErrors] = useState<types.ErrorsFields>({});

  useEffect(() => {
    const values: types.Fields = {};

    config.forEach((field: types.ConfigItem) => {
      const { name } = field;
      values[name] = "";
    });

    setFormValue(values);
  }, [config]);

  useEffect(() => {
    Object.keys(formValue).forEach((item:string) => {
      if (item === "login") {
        const obj = {
          login: utils.isCheckMinLength(formValue.login, 6),
          password: utils.isCheckPassword(formValue.password, 3, 22)
        };
        setErrors((prevState) => ({...prevState, ...obj}));
      }else if (Object.keys(formValue).includes("email")) {
          const obj = {
          userName: utils.isCheckMinLength(formValue.userName, 6),
          email: utils.isCheckEmail(formValue.email),
          password: utils.isCheckPassword(formValue.password, 3, 22),
          passwordRepeat: utils.isCheckPassRep(formValue.password, formValue.passwordRepeat)
        };
        setErrors((prevState) => ({...prevState, ...obj}));
      }
    });
  }, [formValue])

  const onValueChange = (e: any) => {
    const {name, value} = e.target
    setFormValue({...formValue, [name]: value})
  }

  const sendData = (e: any) => {
    e.preventDefault()
    if(Object.values(errors).every(error=> error)) {
      // console.log(errors);
      console.log(formValue);
      // request
    }
  }

  return (      
    <form className="form" onSubmit={(e) =>sendData(e) }>
      {config.map((item: types.ConfigItem) => (
        <Input
          key={item.name}
          name={item.name}
          type={item.type}
          onValueChange={onValueChange}
          placeholder={item.placeholder}
          invalid={errors[item.name]}
        />
      ))}
      <button className="btn btn-primary">{title}</button>
      <Link to={to}><button className="btn btn-secondary">{titleLink}</button></Link>
    </form>
  );
}

export default Form