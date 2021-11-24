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
    <section className="productCardList">
      <div className="imageList">
        <img src={img} alt="img" />
      </div>
      <section>
        <p>{name}</p>
        {(gender && <p>Gender: {gender}</p>) ||
          (passengers && <p>Passengers: {passengers}</p>)}
        {(skin && <p>Skin color: {skin}</p>) ||
          (manufacturer && <p>Manufacturer: {manufacturer}</p>)}
      </section>
    </section>
  )
}

export default ProductCardList
