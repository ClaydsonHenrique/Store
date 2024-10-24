import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { add_Produc_ShoppingCart, getMethodIfToken, MethodGet, updateCar } from '../FetchApi/ApiProducts'
import { useEffect, useState } from 'react'
import { addToken } from '../Redux/actions'

function Products({ token }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [products, setProducts] = useState('')
  const [loading, setLoading] = useState(false)
  const [tokenUser, setToken] = useState(null)


  const getToken = React.useCallback(async () => {
    const token = localStorage.getItem('token');
    const user = await getMethodIfToken(token, 'login')
    if (user.message) {
      console.error(user.message)
    }
    dispatch(addToken(token))
    setToken(token)
  }, [dispatch]);


  const getLocalItens = async (id) => {
    const local = JSON.parse(localStorage.getItem('cart'))
    // const getProductCArt = await getMethodIfToken(tokenUser, 'carrinho');
    // if (getProductCArt.message) {
    //   console.error(getProductCArt.message)
    // }
    // if (getProductCArt.length > localStorage.length) {
    //   localStorage.setItem('cart', JSON.stringify(getProductCArt))
    // }

    const findItens = local.filter((loc) => loc.idProduct === id)
    const a = findItens
  }

  const getAllProducts = React.useCallback(async () => {
    setLoading(true);
    try {
      const allProducts = await MethodGet();
      setProducts(allProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  async function addCart(id) {
    let getProductCArt = await getMethodIfToken(tokenUser, 'carrinho');
    if (getProductCArt.message) {
      console.error(getProductCArt.message)
      navigate('/login')
      return
    }

    const findProductCar = getProductCArt.find((b) => b.idProduct === id)
    if (findProductCar) {
      await updateCar({ quantidade: findProductCar.quantidade + 1, IProduct: id })
    }
    const addProductCArt = await add_Produc_ShoppingCart(tokenUser, id, 1)
    if (!addProductCArt) {
      console.error('Erro ao adicionar o produto')
    }
    getProductCArt = await getMethodIfToken(tokenUser, 'carrinho');
    console.log(getProductCArt, 'verificando car')
    localStorage.setItem('cart', JSON.stringify(getProductCArt))
    getLocalItens(id);
  }

  useEffect(() => {
    getToken()
    getAllProducts()
  }, [getToken, getAllProducts])



  const renderProduct = () => {
    if (products) {
      return products.slice(0, 20).map((product) => {
        return (
          <div className="card" key={product.id}>
            <div className="card-body">
              <h2 className="card-title">{product.productName}</h2>
              <img src={product.images[0]} alt={product} className='thumbnail' />
              {product.promo !== '0.00' ?
                <div>
                  <p style={{ color: 'red' }}>R$ {product.price}</p>
                  <p>R$ {product.promo}</p>
                </div>
                : <p>{product.price}</p>}
              <Link to={`/product/${product.id}`} className="btn btn-primary">Detalhes</Link>
              <button onClick={() => addCart(product.id)}>Adicionar ao carrinho</button>
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

const mapStateToProps = (state) => ({
  token: state.token.token,
});

export default connect(mapStateToProps)(Products)