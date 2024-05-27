import React from 'react'
import {Data} from '../helpers/Data'
import ProductItem from './ProductItem'
import '../styles/Product.css'

const Product = () => {
  return (
    <div className='product'>
        <h1 className='productTitle'>SPOR AYAKKABILARIMIZ</h1>
        <div className='productList'>
         {
            Data.map((productItem, index )=>(
              <ProductItem key={index} products={productItem}/>  
            ))
         }
        </div>

    </div>
  )
}

export default Product