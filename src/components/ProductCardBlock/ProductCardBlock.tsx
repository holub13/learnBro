import React from 'react'
import { ConfigItem } from './types'

import './ProductCardBlock.css'

const ProductCardBlock: React.FC<ConfigItem> = ({
  name,
  gender,
  skin,
  img,
  passengers,
  manufacturer,
}): JSX.Element => {
  return (
    <section className="productCard">
      <div className="image">
        <img src={img} alt="img" />
      </div>
      <p>{name}</p>
      {(gender && <p>Gender: {gender}</p>) ||
        (passengers && <p>Passengers: {passengers}</p>)}
      {(skin && <p>Skin color: {skin}</p>) ||
        (manufacturer && <p>Manufacturer: {manufacturer}</p>)}
    </section>
  )
}

export default ProductCardBlock
