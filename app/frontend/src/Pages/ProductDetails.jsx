import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { add_Produc_ShoppingCart, getById } from '../FetchApi/ApiProducts';
import { connect } from 'react-redux';


function ProductDetails({ token }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

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
  console.log(token, 'verificando token')

  const add_Prodict_shoppingCart = async () => {
    try {
      if (!token) {
        navigate('/login')
      }
      let value = quantity
      setQuantity(value += 1)
      const addProduct = await add_Produc_ShoppingCart(token, product.id, quantity)
      console.log(addProduct)
      return addProduct
    } catch (error) {
      console.log(error)
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
        <section>
          <section className='container'>
            <div>
              {product.images && <img src={product.images[0]} alt={product.productName} className='renderImage' />}
              <div className='containerImages'>
                {renderImages(product.images)}
              </div>
            </div>
            <div>
              <h1>{product.productName}</h1>
              {product.promo !== '0.00' ?
                <div>
                  <h2 style={{ color: 'red' }}>Preço: R$ {product.price}</h2>
                  <h2> R$ {product.promo}</h2>
                </div> : <p>{product.price}</p>}
              <button onClick={add_Prodict_shoppingCart}>adicionar ao carrinho</button>
              <button>Comprar</button>
            </div>
          </section>
          <section className='container-Description'>
            <h1>{product.productName}</h1>
            <p className='description'>{product.description}</p>
          </section>
        </section>
    </main>
  )
}

const mapStateToProps = (state) => ({
  token: state.token.token,
});

export default connect(mapStateToProps)(ProductDetails);
