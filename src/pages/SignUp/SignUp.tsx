import React from 'react'
import { useSelector } from 'react-redux'

import './SignUp.css'

import * as types from '../../components/Form/types'

import Form from '../../components/Form'
import { config } from './SignUpConfig'

const SignUp: React.FC = (): JSX.Element => {
  const user = useSelector<types.Fields>((state) => state.user)

  const onSubmit: any = (param: any) => {
    console.log(param)
    console.log(user)
  }
  return (
    <section className="Reg">
      <h1>Registration</h1>
      <Form
        config={config}
        onSubmit={onSubmit}
        to="/"
        titleLink="Sign In"
        title="Sign Up"
      />
    </section>
  )
}

export default SignUp
