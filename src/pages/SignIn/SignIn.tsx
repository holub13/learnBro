import React from "react";

import "./SignIn.css";

import Form from '../../components/Form';
import {config} from "./SignInConfig"

const SignIn: React.FC = (): JSX.Element => {
  return (
    <div className="Log">
      <h1>Log in</h1>
      <Form
        config={config}
        to="/reg"
        titleLink="Sign Up"
        title="Sign In"/>
    </div>
  );
}

export default SignIn