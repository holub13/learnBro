import React, { useLayoutEffect, useState } from 'react'

import ProductBlock from '../../components/ProductBlock'
import ProductList from '../../components/ProductList'

import { images } from './images'

import './People.css'

const People: React.FC = (): JSX.Element => {
  const [view, setView] = useState(true)
  const local: any = localStorage.getItem('people')
  const people = JSON.parse(local)

  useLayoutEffect(() => {
    localStorage.viewPeople
      ? setView(JSON.parse(localStorage.viewPeople))
      : localStorage.setItem('viewPeople', 'true')
  }, [])

  const onChangeView = (param: boolean) => {
    localStorage.setItem('viewPeople', JSON.stringify(param))
    setView(param)
  }

  return (
    <div className="people">
      <div className="header-products">
        <h1>People</h1>
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
        <ProductBlock config={people.results} images={images} />
      ) : (
        <ProductList config={people.results} images={images} />
      )}
    </div>
  )
}

export default People
