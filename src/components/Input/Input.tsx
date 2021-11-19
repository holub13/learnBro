import React from 'react'
import { InputProps } from './types'
import './Input.css'

const Input: React.FC<InputProps> = ({
  value,
  name,
  placeholder,
  type,
  onValueChange,
  invalid,
}): JSX.Element => {
  return (
    <div>
      <input
        className={`form-control ${invalid === '' ? '' : 'invalid'}`}
        value={value}
        onChange={(e) => onValueChange(e)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
