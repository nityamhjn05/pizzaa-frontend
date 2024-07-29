import React from 'react'

export const Product = ({product}) => {
  const myStyle = {width: "18rem"};
  return (
   
        <div className="card me-4" style={myStyle}>
        <img src={product.assets.menu[0].url} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
        
  )
}
