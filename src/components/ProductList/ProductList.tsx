import React from 'react'
import ProductCardList from '../ProductCardList'

import './ProductList.css'

import { ProductProps } from './types'

const ProductList: React.FC<ProductProps> = ({
  config,
  images,
}): JSX.Element => {
  return (
    <section className="productList">
      {config.map((item: any) => (
        <ProductCardList
          key={item.name}
          name={item.name}
          passengers={item.passengers}
          manufacturer={item.manufacturer}
          gender={item.gender}
          skin={item.skin_color}
          img={images[Math.floor(Math.random() * images.length)]}
        />
      ))}
    </section>
  )
}

export default ProductList
