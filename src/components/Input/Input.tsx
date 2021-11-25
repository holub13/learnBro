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
    <p>
      <span style={{ color: 'darkred' }}>{invalid}</span>
      <input
        className={`form-control ${invalid && 'invalid'}`}
        value={value}
        onChange={(e) => onValueChange(e)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </p>
  )
}

export default Input
