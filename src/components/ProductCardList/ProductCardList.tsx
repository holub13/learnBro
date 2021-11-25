import React from 'react'
import { ConfigItem } from './types'

import './ProductCardList.css'

const ProductCardList: React.FC<ConfigItem> = ({
  name,
  gender,
  skin,
  img,
  passengers,
  manufacturer,
}): JSX.Element => {
  return (
    <li className="product-card-list">
      <p className="image-list">
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

export default ProductCardList
