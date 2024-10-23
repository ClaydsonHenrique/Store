import { Link } from 'react-router-dom'
import { MethodGet } from '../FetchApi/ApiProducts'
import { useEffect, useState } from 'react'

function Products() {

  const [products, setProducts] = useState('')
  const [loading, setLoading] = useState(false)
  const getAllProducts = async () => {
    const allProducts = await MethodGet()
    setProducts(allProducts)
    setLoading(true)
  }
  console.log(products)
  useEffect(() => {
    getAllProducts()
  }, [])

  const renderProduct = () => {
    if (products) {
      return products.slice(0, 20).map((product) => {
        return (
          <div className="card" key={product.id}>
            <div className="card-body">
              <h2 className="card-title">{product.productName}</h2>
              <img src={product.images[0]} alt={product} className='thumbnail'/>
              {product.promo !== '0.00' ?
                <div>
                  <p style={{ color: 'red' }}>R$ {product.price}</p>
                  <p>R$ {product.promo}</p>
                </div>
                : <p>{product.price}</p>}
              <Link to={`/product/${product.id}`} className="btn btn-primary">Detalhes</Link>
            </div>
          </div>
        )
      })
    }
  }
  return (
    <main>
        <section>
          <div>Escolha seus Produtos </div>
          <div className="container">
            <div className="row">
              {renderProduct()}
            </div>
          </div>
        </section>
    </main>
  )
}

export default Products