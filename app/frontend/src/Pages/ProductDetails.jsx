import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/Api/Api';
import { CarouselDefault } from '../Components/Carrosel';
import { useCart } from '../Hooks/useCart';

import { Truck } from 'lucide-react';

export default function ProductDetails() {
  const { handleClickAddCar } = useCart();
  const { id } = useParams();
  const [product, setProduct] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [actived, setActived] = React.useState('description')

  const getproductId = async (id) => {
    try {
      const getProduct = await getProductById(Number(id))
      if (!getProduct) {
        throw new Error('product not found')
      }
      setProduct(getProduct)
      setLoading(true)
    } catch (error) {
      console.log('try falhou ', error)
      console.error('Product not found', error)
    }

  }

  React.useEffect(() => {
    getproductId(id)
  }, [id])


  const handleClickActived = (value) => {
    setActived(value)
  }

  return (
    <>
      {loading ?
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
        >
          <section className='flex flex-col lg:flex-row  '>
            <div className="lg:w-2/3">
              <CarouselDefault imagens={product.images} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.productName}</h1>
              <p>{product.catgName}</p>
              <p>{product.brandName}</p>
              <p>{product.colorName}</p>
              {product.promo !== 0 ?
                <div>
                  <h2 className="text-xl text-red-600 line-through">{product.price}</h2>
                  <h2 className="text-2xl font-bold text-green-600">{product.promo}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Em até 10x de R$ {(product.promo / 10).toFixed(2)}
                  </p>
                </div> :
                <div>
                  <h2>{product.price}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Em até 10x de R$ {(product.price / 10).toFixed(2)}
                  </p>
                </div>
              }
              <div className="mt-6 space-y-3">
                <button className='w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-800 transition'>Comprar agora</button>

                <button onClick={() => handleClickAddCar(product.id, 1)} className='w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition'>Adicionar ao carrinho</button>
              </div>
              <div className='mt-6'>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  CEP
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Calcule aqui " />
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Frete Grátis
                    </p>
                    <p className="text-sm text-gray-600">
                      Entrega estimada em 3-5 dias úteis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='mt-6 max-w-4xl mx-auto text-center'>
            
            <div className='flex gap-12 justify-center mb-6'>
              <button onClick={() => setActived('description')}>
                <h3 className={`font-medium transition-colors duration-300 ${actived === 'description' ? 'text-black' : 'text-gray-500'}`}>
                  Descrição
                </h3>
              </button>
              <button onClick={() => setActived('caracteristica')}>
                <h3 className={`font-medium transition-colors duration-300 ${actived === 'caracteristica' ? 'text-black' : 'text-gray-500'}`}>
                  Característica
                </h3>
              </button>
              <button onClick={() => setActived('detalhes')}>
                <h3 className={`font-medium transition-colors duration-300 ${actived === 'detalhes' ? 'text-black' : 'text-gray-500'}`}>
                  Detalhes
                </h3>
              </button>
            </div>

            <div className="relative h-20">
              <p className={`mt-2 text-gray-600 absolute inset-0 transition-opacity duration-500 ${actived === 'description' ? 'opacity-100' : 'opacity-0'}`}>
                {product.description}
              </p>
              <p className={`mt-2 text-gray-600 absolute inset-0 transition-opacity duration-500 ${actived === 'caracteristica' ? 'opacity-100' : 'opacity-0'}`}>
                {`Características: ${product.description}`}
              </p>
              <p className={`mt-2 text-gray-600 absolute inset-0 transition-opacity duration-500 ${actived === 'detalhes' ? 'opacity-100' : 'opacity-0'}`}>
                {`Detalhes: ${product.description}`}
              </p>
            </div>
          </section>
        </main>
        : <p>Loading.....</p>

      }
    </>
  )
}