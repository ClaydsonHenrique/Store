import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getById } from '../FetchApi/ApiProducts';
import '../style/ProductDetails.css'
import Loading from './Loading';


function ProductDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState('');


  const fetchProduct = async () => {
    try {
      const FetchApi = await getById('product', id)
      setProduct(FetchApi)
      setLoading(true)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const renderImages = (images) => {
    if (images) {
      return images.map((image, index) => {

        return (
          <div key={index}>
            <img src={image} alt={image} className='product-image' />
          </div>
        )
      }
      )
    }
  }
  console.log(product)

  return (
    <main>
      {!loading ? <Loading ></Loading> :
        <section>
          <Link to='/product' > Produtos</Link>
          <section className='container'>
            <div>
              {product.images && <img src={product.images[0]} alt={product.productName} className='renderImage' />}
              <div className='containerImages'>
                {renderImages(product.images)}
              </div>
            </div>
            <div>
              <h1>{product.productName}</h1>
              {product.promo !== 0 ?
                <div>
                  <h2 style={{ color: 'red' }}>Preço: R$ {product.price}</h2>
                  <h2> R$ {product.promo}</h2>
                </div> : <p>{product.price}</p>}
              <button>adicionar ao carrinho</button>
              <button>Comprar</button>
            </div>
          </section>
          <section className='container-Description'>
            <h1>{product.productName}</h1>
            <p className='description'>{product.description}</p>
          </section>
        </section>
      }
    </main>
  )
}
export default ProductDetails