import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import Button from '../../components/Button'
import { addToLocalStorage } from '../../store/actions/addToLocalStorage'

import './Products.css'

const Products: React.FC = (): JSX.Element => {
  const [peolpeCount, setPeolpeCount] = useState('')
  const [starshipsCount, setStarshipsCount] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()

  const urlPeople = 'https://swapi.dev/api/people/'
  const urlStarships = 'https://swapi.dev/api/starships/'

  useEffect(() => {
    function getCount(url: string, setItemCount: any, actionType: string) {
      axios.get(url).then((resp) => {
        const data = resp.data

        setItemCount(data.count)
        dispatch(addToLocalStorage(data, actionType))
        setIsLoaded(true)
      })
    }

    getCount(urlPeople, setPeolpeCount, 'ADD_TO_LOCALSTORAGE_PEOPLE')
    getCount(urlStarships, setStarshipsCount, 'ADD_TO_LOCALSTORAGE_STARSHIPS')
  }, [])

  // useEffect(() => {
  //   async function getCount(url: string, setItemCount: any) {
  //     let response = await fetch(url)

  //     if (response.ok) {
  //       let json = await response.json()
  //       console.log(json.count)
  //       if (setItemCount === setPeolpeCount) {
  //         setPeolpeCount(json.count)
  //       } else if (setItemCount === setStarshipsCount) {
  //         setStarshipsCount(json.count)
  //       }
  //     } else {
  //       console.log('Ошибка HTTP: ' + response.status)
  //     }

  //     setIsLoaded(true)
  //   }

  //   getCount(urlPeople, setPeolpeCount)
  //   getCount(urlStarships, setStarshipsCount)
  // }, [])

  return (
    <main className="products">
      <h1>Products</h1>
      <section className="buttons">
        <Button
          title="Count of People"
          count={peolpeCount}
          path="/products/people"
          load={isLoaded}
        />
        <Button
          title="Count of Starships"
          count={starshipsCount}
          path="/products/starships"
          load={isLoaded}
        />
      </section>
    </main>
  )
}

export default Products
