import React from 'react'

import './SignUp.css'

import Form from '../../components/Form'
import { config } from './SignUpConfig'

const SignUp: React.FC = (): JSX.Element => {
  return (
    <section className="Reg">
      <h1>Registration</h1>
      <Form config={config} to="/" titleLink="Sign In" title="Sign Up" />
    </section>
  )
}

export default SignUp
