import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './SignUp.css'

import Form from '../../components/Form'
import { config } from './SignUpConfig'

const SignUp: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const user: any = useSelector((state) => state)

  const onSubmit: any = (param: any) => {
    dispatch({
      type: 'AUTH_REGISTRATION_REQUEST',
      ...param,
    })
  }
  localStorage.setItem(user.login, JSON.stringify(user))

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
