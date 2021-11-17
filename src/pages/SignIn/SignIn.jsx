import React from "react";
import "./SignIn.css";
// import * as utils from '../../utils';
import Form from '../../components/Form/Form';

export default function SignIn() {
  // const [formValue, setFormValue] = useState({
  //   login: "",
  //   password: ""
  // });

  // const [errors, setErrors] = useState({
  //   login: false,
  //   loginIsFilled: false,
  //   passwordMinLength: false,
  //   passwordMaxLength: false
  // })

  const config = [
    {
      name: "login",
      type: "text",
      placeholder: "Enter your Login",
      valid: ''
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your Password",
    },
  ];
  const configErrors = {
    login: false,
    loginIsFilled: false,
    passwordMinLength: false,
    passwordMaxLength: false
  };

  // const onValueChange = (e) => {
  //   const {name, value} = e.target
  // setFormValue({...formValue, [name]: value})
  // }

  // useEffect(() => {
  //   const obj ={
  //     login: utils.isCheckMinLength(formValue.login, 6),
  //     loginIsFilled: utils.isCheckEmpty(formValue.login),
  //     passwordMinLength: utils.isCheckMinLength(formValue.password, 3),
  //     passwordMaxLength: utils.isCheckMaxLength(formValue.password, 22)
  //   };
  //   setErrors(obj);
  // }, [formValue])

  // const sendData = (e) => {
  //   e.preventDefault()
  //   console.log(Object.values(errors));
  //   if(Object.values(errors).every(error=> error)) {
  //     console.log(formValue)
  //     // request
  //   }
  // }

  return (
    <div className="Log">
      <h1>Log in</h1>
      <Form
        config={config}
        configErrors={configErrors}
        // onCustomSubmit={sendData}
        // onValueChange={onValueChange}
        to="/reg"
        titleLink="Sign Up"
        title="Sign In"/>
    </div>
  );
}
