export const config = [
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

export const configErrors = {
    login: false,
    loginIsFilled: false,
    passwordMinLength: false,
    passwordMaxLength: false
  };