import React, { useEffect, useState } from 'react'

import Button from '../../components/Button'

import './Products.css'

const Products: React.FC = (): JSX.Element => {
  const [peolpeCount, setPeolpeCount] = useState('')
  const [starshipsCount, setStarshipsCount] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const urlPeople = 'https://swapi.dev/api/people/'
  const urlStarships = 'https://swapi.dev/api/starships/'

  useEffect(() => {
    async function getCount(url: string, setItemCount: any) {
      let response = await fetch(url)

      if (response.ok) {
        let json = await response.json()
        console.log(json.count)
        if (setItemCount === setPeolpeCount) {
          setPeolpeCount(json.count)
        } else if (setItemCount === setStarshipsCount) {
          setStarshipsCount(json.count)
        }
      } else {
        console.log('Ошибка HTTP: ' + response.status)
      }

      setIsLoaded(true)
    }

    getCount(urlPeople, setPeolpeCount)
    getCount(urlStarships, setStarshipsCount)
  }, [])

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
