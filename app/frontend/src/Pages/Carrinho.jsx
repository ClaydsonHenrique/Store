import React, { useEffect, useState } from 'react'

export default function Carrinho() {
  const [products, setProducts] = useState(null);

  const getProducts = () => {
    const productsLocal = JSON.parse(localStorage.getItem('cart'));
    setProducts(productsLocal)
  }

  useEffect(() => {
    getProducts();
  })


  return (
    <section>
      {products ?
        products.map((product) => {
          console.log(product)
        }) : <p>Carrinho vazio</p>
      }
    </section>
  )
}
