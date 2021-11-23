import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './SignIn.css'

import FormBuilder from '../../components/FormBuilder'
import { config } from './SignInConfig'
import { addToState } from '../../store/actions/addToState'

const SignIn: React.FC = (): JSX.Element => {
  const [errorAuth, setErrorAuth] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user: any = useSelector((state) => state)

  useEffect(() => {
    const local: any = localStorage.getItem('user')
    dispatch(addToState(JSON.parse(local)))
  }, [])

  const onSubmit: any = (param: any) => {
    if (
      user.auth.login === param.login &&
      user.auth.password === param.password
    ) {
      navigate('/products')
    } else if (user.auth.login !== param.login) {
      setErrorAuth('Вы ввели не верный логин')
      console.log('Логин не верный')
    } else {
      setErrorAuth('Вы ввели не верный пароль')
      console.log('Пароль не верный')
    }
  }

  return (
    <section className="Log">
      <h1>Log in</h1>
      <span>{errorAuth}</span>
      <FormBuilder
        config={config}
        onSubmit={onSubmit}
        path="/reg"
        titleLink="Sign Up"
        title="Sign In"
      />
    </section>
  )
}

export default SignIn
