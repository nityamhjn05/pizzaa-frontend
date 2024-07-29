import React from 'react'
import { Product } from './Product'

export const Products = ({products}) => {
  return (
    <div>
      <div className='row'>
            {products.map(product=><Product key = {product.id} product = {product}/>)}
      
      </div>
    </div>
  )
}
