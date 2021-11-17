export const config = [
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
  
export const configErrors = {
    login: false,
    email: false,
    emailIsFilled: false,
    passwordMinLength: false,
    passwordMaxLength: false,
    passwordRepeat: false
  };