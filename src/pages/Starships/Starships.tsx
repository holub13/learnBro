import React, { useEffect, useState } from 'react'
import ProductBlock from '../../components/ProductBlock'
import ProductList from '../../components/ProductList'

import { images } from './images'

import './Starships.css'

const Starships: React.FC = (): JSX.Element => {
  const [view, setView] = useState(true)
  const local: any = localStorage.getItem('starships')
  const starships = JSON.parse(local)

  console.log(JSON.parse(localStorage.view))
  // useEffect(())
  const onChangeView = (param: boolean) => {
    setView(param)
  }
  console.log(starships)

  return (
    <main className="starships">
      <header className="headerProducts">
        <h1>Starships</h1>
        <div className="viewButtons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onChangeView(true)}
          >
            <i className="fa fa-align-justify rotate" title="Align Right"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onChangeView(false)}
          >
            <i className="fa fa-align-justify" title="Align Right"></i>
          </button>
        </div>
      </header>
      {view ? (
        <ProductBlock config={starships.results} images={images} />
      ) : (
        <ProductList config={starships.results} images={images} />
      )}
    </main>
  )
}

export default Starships
