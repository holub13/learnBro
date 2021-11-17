import React from "react";
import "./SignUp.css";
import Form from '../../components/Form/Form';
import {config, configErrors} from "./SignUpConfig"

export default function SignUp() {
  return (
    <section className="Reg">
      <h1>Registration</h1>
      <Form
        config={config}
        configErrors={configErrors}
        to="/"
        titleLink="Sign In"
        title="Sign Up"/>
    </section>
  );
}
