import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import People from './pages/People'
import Starships from './pages/Starships'

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/reg" element={<SignUp />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/people" element={<People />} />
      <Route path="/products/starships" element={<Starships />} />
    </Routes>
  )
}
export default Router
