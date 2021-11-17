import React from "react";
import "./SignUp.css";
import Form from '../../components/Form/Form';
// import * as utils from "../../utils";

export default function SignUp() {
  // const [formValue, setFormValue] = useState({
  //   email: "",
  //   password: "",
  //   passwordRepeat: ""
  // });

  // const [errors, setErrors] = useState({
  //   email: false,
  //   isFilled: false,
  //   passwordMinLength: false,
  //   passwordMaxLength: false,
  //   passwordRepeat: false
  // })

  const config = [
    {
      name: "login",
      type: "text",
      placeholder: "Enter your User Name"
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email"
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your Password",
    },
    {
      name: "passwordRepeat",
      type: "password",
      placeholder: "Enter your Password Again",
    },
  ];
  const configErrors = {
    login: false,
    email: false,
    emailIsFilled: false,
    passwordMinLength: false,
    passwordMaxLength: false,
    passwordRepeat: false
  };

//   const onValueChange = (e) => {
//     const {name, value} = e.target
//    setFormValue({...formValue, [name]: value})
//   }


// useEffect(() => {
//   const obj ={
//     email: utils.isCheckEmail(formValue.email),
//     emailIsFilled: utils.isCheckEmpty(formValue.email),
//     passwordMinLength: utils.isCheckMinLength(formValue.password, 3),
//     passwordMaxLength: utils.isCheckMaxLength(formValue.password, 22),
//     passwordRepeat: utils.isCheckPassRep(formValue.password, formValue.passwordRepeat)
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
    <section className="Reg">
      <h1>Registration</h1>
      <Form
        config={config}
        configErrors={configErrors}
        // onCustomSubmit={sendData}
        // onValueChange={onValueChange}
        // errors={errors}
        to="/"
        titleLink="Sign In"
        title="Sign Up"/>
    </section>
  );
}
