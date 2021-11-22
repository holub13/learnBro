import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './SignIn.css'

import Form from '../../components/Form'
import { config } from './SignInConfig'
import { addToState } from '../../store/actions/addToState'

const SignIn: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user: any = useSelector((state) => state)

  useEffect(() => {
    const local: any = localStorage.getItem('user')
    dispatch(addToState(JSON.parse(local)))
  }, [])

  const onSubmit: any = (param: any) => {
    if (user.login === param.login && user.password === param.password) {
      navigate('/goods')
    } else if (user.login !== param.login) {
      console.log('Логин не верный')
    } else {
      console.log('Пароль не верный')
    }
  }
  return (
    <section className="Log">
      <h1>Log in</h1>
      <Form
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
