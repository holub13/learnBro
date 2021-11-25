import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './SignUp.css'

import FormBuilder from '../../components/FormBuilder'
import { config } from './SignUpConfig'
import { addToLocalStorage } from '../../store/actions/addToLocalStorage'
import { addToState } from '../../store/actions/addToState'

const SignUp: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const local: any = localStorage.getItem('user')
    dispatch(addToState(JSON.parse(local), 'AUTH_ADD_TO_STATE'))
  }, [dispatch])

  const onSubmit: any = (param: any) => {
    dispatch(addToLocalStorage(param, 'AUTH_ADD_TO_LOCALSTORAGE'))
  }

  return (
    <section className="Reg">
      <h1>Registration</h1>
      <FormBuilder
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
