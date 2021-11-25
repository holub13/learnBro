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
    <li className="product-card">
      <p className="image">
        <img src={img} alt="img" />
      </p>
      <ul>
        <h2>{name}</h2>
        {(gender && <li>Gender: {gender}</li>) ||
          (passengers && <li>Passengers: {passengers}</li>)}
        {(skin && <li>Skin color: {skin}</li>) ||
          (manufacturer && <li>Manufacturer: {manufacturer}</li>)}
      </ul>
    </li>
  )
}

export default ProductCardBlock
