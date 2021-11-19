import React from 'react'

import './SignIn.css'

import Form from '../../components/Form'
import { config } from './SignInConfig'

const SignIn: React.FC = (): JSX.Element => {
  return (
    <section className="Log">
      <h1>Log in</h1>
      <Form config={config} to="/reg" titleLink="Sign Up" title="Sign In" />
    </section>
  )
}

export default SignIn
