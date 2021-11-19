import * as utils from "../../utils"

export const config = [
    {
      name: "login",
      type: "text",
      placeholder: "Enter your Login",
      validation: {
        // login: utils.isCheckMinLength(formValue.login, 6),
        log: false
      }
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your Password",
      validation: {
        // min: utils.isCheckPassword(formValue.password, 3, 22),
        // max: utils.isCheckPassword(formValue.password, 3, 22)
      }
    },
  ];