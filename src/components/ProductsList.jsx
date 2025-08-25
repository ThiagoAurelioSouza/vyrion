import React from 'react'
import Product from './Product'

export default function ProductsList({ produtos, addProductToBag } ) {
  return (
    <div className="product-list">
      {produtos.map((item) => (
        <Product
          key={item.id}
          {...item}
          addProductToBag={addProductToBag}
        />
     ))}
    </div>
  )
}