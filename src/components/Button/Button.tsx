import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Button.css'

interface ButtonsProps {
  title: string
  count: any
  path: string
  load: boolean
}

const Button: React.FC<ButtonsProps> = ({
  title,
  count,
  path,
  load,
}): JSX.Element => {
  const navigate = useNavigate()

  return (
    <li className="button">
      <h2>{title}</h2>
      <button className="totalCountButton" onClick={() => navigate(path)}>
        {load ? count : 'Wait...'}
      </button>
    </li>
  )
}

export default Button
