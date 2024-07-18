import { Link } from 'react-router-dom'
import { MethodGet } from '../FetchApi/ApiProducts'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import '../style/Product.css'

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
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <img src={product.images[0]} alt={product} className='thumbnail'/>
              {product.promo !== 0 ?
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