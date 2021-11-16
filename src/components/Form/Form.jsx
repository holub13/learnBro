import React, {useState} from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input"

export default function Form() {

  const [formValue, setFormValue] = useState({
    login: "",
    email: "",
    password: "",
    passwordRepeat: ""
  });

 const onValueChange = (e) => {
   const value = e.target.value;
   const name = e.target.name;

  setFormValue({...formValue, [name]: value})
 }

  return (      
      <form>
          <Input
            name='login'
            placeholder="Enter your login"
            value={formValue.login}
            onValueChange={onValueChange}
            type="text"
          />
        <button className="btn btn-primary">REGISTER</button>
        <Link to='/'><button className="btn btn-secondary">Member login</button></Link>
      </form>
  );
}
