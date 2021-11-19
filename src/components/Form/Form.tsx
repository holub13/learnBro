import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import * as types from './types'
import * as utils from '../../utils'

const Form: React.FC<types.FormProps> = ({
  config,
  to,
  title,
  titleLink,
  onSubmit = () => {},
}): JSX.Element => {
  const [formValue, setFormValue] = useState<types.Fields>({})
  const [errors, setErrors] = useState<types.Fields>({})

  const configZeroFields = (values: types.Fields) => {
    config.forEach((field) => {
      const { name } = field
      values[name] = ''
    })
  }

  useEffect(() => {
    const values: types.Fields = {}
    configZeroFields(values)
    setFormValue(values)
    setErrors(values)
  }, [config])

  const validation = () => {
    const newErrors: types.Fields = {}

    configZeroFields(newErrors)

    config.forEach((item) => {
      const { validation } = item

      validation.forEach((error) => {
        const { name, value } = error
        if (name === 'min') {
          newErrors[item.name] += utils.isCheckMinLength(
            formValue[item.name],
            value
          )
            ? ''
            : 'Меньше нужного'
        } else if (name === 'max') {
          newErrors[item.name] += utils.isCheckMaxLength(
            formValue[item.name],
            value
          )
            ? ''
            : 'Больше нужного'
        } else if (name === 'email') {
          newErrors[item.name] += utils.isCheckEmail(formValue[item.name])
            ? ''
            : 'Email введен не верно'
        } else if (name === 'passRepeat') {
          newErrors[item.name] += utils.isCheckPassRep(
            formValue.password,
            formValue[item.name]
          )
            ? ''
            : 'Пароль не совпадает'
        }
      })
    })
    return newErrors
  }

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormValue({ ...formValue, [name]: value })
  }

  const sendData = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const valid = validation()
    setErrors(valid)
    if (Object.values(valid).every((error) => error === '')) {
      onSubmit(formValue)
      // request
    }
  }

  return (
    <form className="form">
      {config.map((item) => (
        <Input
          key={item.name}
          name={item.name}
          type={item.type}
          onValueChange={onValueChange}
          placeholder={item.placeholder}
          value={formValue[item.name] ? formValue[item.name] : ''}
          invalid={errors[item.name]}
        />
      ))}
      <button type="button" className="btn btn-primary" onClick={sendData}>
        {title}
      </button>
      <Link to={to}>
        <button className="btn btn-secondary">{titleLink}</button>
      </Link>
    </form>
  )
}

export default Form
