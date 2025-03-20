import React from "react";
import { useCart } from '../Hooks/useCart';
import { Link } from 'react-router-dom';

export default function Home({ allProducts }) {
  const { handleClickAddCar } = useCart();
  const [sliceProduct, setSliceProduct] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setSliceProduct(allProducts.slice(0, 3));
  }, [allProducts, page]);

  return (
    <main className="p-0 m-0 mx-auto ">

      {/* section para banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="h-[500px] bg-[url('https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-4">Nova Coleção</h2>
              <p className="text-xl mb-8">Descubra os últimos lançamentos em sneakers</p>
              <Link
                to="/products"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
              >
                Explorar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* section para produtos  */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className='text-2xl font-bold text-gray-800 mb-8'>
          Destaques
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sliceProduct.length > 0 &&
            sliceProduct.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <a href={`product/${product.id}`}>
                  <div className='relative'>
                    <img
                      className='w-full h-64 object-cover group-hover:scale-105 transition duration-300'
                      src={product.images[0]}
                      alt='' />
                  </div>
                </a>
                <div className="p-4">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {product.productName}
                  </h1>
                  <span >{product.color}</span>

                  {product.promo !== "0.00" ? (
                    <div>
                      <p className="text-red-600 mt-1 line-through">{`R$ ${product.price}`}</p>
                      <p className='text-green-800'>{`R$ ${product.promo}`}</p>
                    </div>
                  ) : (
                    <p className="text-gray-600 mt-1">{`R$ ${product.price}`}</p>
                  )}
                  <button onClick={() => handleClickAddCar(product.id, 1)} className='w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
        </div>
      </section>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Categorias</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products?category=casual" className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=600"
                alt="Casual"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Casual</span>
              </div>
            </Link>
            <Link to="/products?category=esportivo" className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600"
                alt="Esportivo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Esportivo</span>
              </div>
            </Link>
            <Link to="/products?category=lifestyle" className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Lifestyle</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main >
  );
}
