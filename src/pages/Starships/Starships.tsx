import React, { useLayoutEffect, useState } from 'react'
import ProductBlock from '../../components/ProductBlock'
import ProductList from '../../components/ProductList'

import { images } from './images'

import './Starships.css'

const Starships: React.FC = (): JSX.Element => {
  const [view, setView] = useState(true)
  const local: any = localStorage.getItem('starships')
  const starships = JSON.parse(local)

  useLayoutEffect(() => {
    localStorage.viewStarships
      ? setView(JSON.parse(localStorage.viewStarships))
      : localStorage.setItem('viewStarships', 'true')
  }, [])

  const onChangeView = (param: boolean) => {
    localStorage.setItem('viewStarships', JSON.stringify(param))
    setView(param)
  }

  return (
    <div className="starships">
      <div className="header-products">
        <h1>Starships</h1>
        <p className="view-buttons">
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
        </p>
      </div>
      {view ? (
        <ProductBlock config={starships.results} images={images} />
      ) : (
        <ProductList config={starships.results} images={images} />
      )}
    </div>
  )
}

export default Starships
