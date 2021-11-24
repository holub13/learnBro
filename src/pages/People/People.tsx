import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToState } from '../../store/actions/addToState'
// import ProductCard from '../../components/ProductCard'
import ProductBlock from '../../components/ProductBlock'
import ProductList from '../../components/ProductList'

import { images } from './images'

import './People.css'

const People: React.FC = (): JSX.Element => {
  const [view, setView] = useState(true)
  const local: any = localStorage.getItem('people')
  const people = JSON.parse(local)

  const onChangeView = (param: boolean) => {
    setView(param)
  }

  // const dispatch = useDispatch()
  // const state: any = useSelector((state) => state)

  // useEffect(() => {
  //   const local: any = localStorage.getItem('people')
  //   dispatch(addToState(JSON.parse(local), 'ADD_TO_STATE_PEOPLE'))
  // }, [])
  // console.log(state.people.results)

  return (
    <section className="starships">
      <header className="headerProducts">
        <h2>People</h2>
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
        <ProductBlock config={people.results} images={images} />
      ) : (
        <ProductList config={people.results} images={images} />
      )}
    </section>
  )
}

export default People

// <main className="people">
//   <h2>People</h2>
//   <ProductBlock config={people.results} images={images} />
//   {/* {people.results.map((item: any) => (
//     <ProductCard
//       key={item.name}
//       name={item.name}
//       gender={item.gender}
//       skin={item.skin_color}
//     />
//   ))} */}
//   {/* {state.people.results.map((item: any) => (
//     <ProductCard
//       key={item.name}
//       name={item.name}
//       gender={item.gender}
//       skin={item.skin_color}
//     />
//   ))} */}
// </main>
