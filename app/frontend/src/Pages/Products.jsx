import { Link } from 'react-router-dom'
import { MethodGet } from '../FetchApi/ApiProducts'
import { useEffect, useState } from 'react'
import Loading from './Loading'

function Products() {

  const [products, setProducts] = useState('')
  const [loading, setLoading] = useState(false)
  const getAllProducts = async () => {
    const allProducts = await MethodGet()
    setProducts(allProducts)
    setLoading(true)
  }
  useEffect(() => {
    getAllProducts()
  }, [])

  const renderProduct = () => {
    if (products) {
      return products.slice(0, 20).map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <img src={product.images[0]} alt={product} />
              <p className="card-text">{product.description}</p>
              <Link to={`/products/${product.id}`} className="btn btn-primary">Detalhes</Link>
            </div>
          </div>
        )
      })
    }
  }
  return (
    <main>
      {!loading ? <Loading /> :
        <section>
          <nav>
            <ul>
              <li><Link to='/login'>login</Link></li>
              <li><Link to='/singIn'>SingIN</Link></li>
              <li><Link to='/shoppingCart'>Shopping Cart</Link></li>
            </ul>
          </nav>
          <div>Escolha seus Produtos </div>
          <div className="container">
            <div className="row">
              {renderProduct()}
            </div>
          </div>
        </section>
      }
    </main>
  )
}

export default Products