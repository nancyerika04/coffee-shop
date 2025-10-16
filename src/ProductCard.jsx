import React from 'react'

export default function ProductCard({product}) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <a href="{product.link}">Buy Now</a>
    </div>
  )
}
