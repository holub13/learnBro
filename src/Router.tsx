import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/reg" element={<SignUp />} />
    </Routes>
  )
}
export default Router
