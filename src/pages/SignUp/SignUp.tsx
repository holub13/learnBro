import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './SignUp.css'

import Form from '../../components/Form'
import { config } from './SignUpConfig'
import { addToLocalStorage } from '../../store/actions/addToLocalStorage'
import { addToState } from '../../store/actions/addToState'

const SignUp: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const local: any = localStorage.getItem('user')
    dispatch(addToState(JSON.parse(local)))
  }, [])

  const onSubmit: any = (param: any) => {
    dispatch(addToLocalStorage(param))
  }

  return (
    <section className="Reg">
      <h1>Registration</h1>
      <Form
        config={config}
        onSubmit={onSubmit}
        path="/"
        titleLink="Sign In"
        title="Sign Up"
      />
    </section>
  )
}

export default SignUp
