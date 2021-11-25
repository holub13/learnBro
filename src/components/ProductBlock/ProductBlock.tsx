import React from 'react'
import ProductCardBlock from '../ProductCardBlock'

import './ProductBlock.css'

import { ProductProps } from './types'

const ProductBlock: React.FC<ProductProps> = ({
  config,
  images,
}): JSX.Element => {
  return (
    <ul className="product-block">
      {config.map((item: any) => (
        <ProductCardBlock
          key={item.name}
          name={item.name}
          passengers={item.passengers}
          manufacturer={item.manufacturer}
          gender={item.gender}
          skin={item.skin_color}
          img={images[Math.floor(Math.random() * images.length)]}
        />
      ))}
    </ul>
  )
}

export default ProductBlock
