import React from "react";
import { ShoppingBag, Heart, Search, Menu, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextToken } from '../Context/ContextApi';

export default function Header() {
  const navigate = useNavigate();

  const { token, setToken, filter, setFilter } = React.useContext(ContextToken)
  
  const [inputText , setinputText] = React.useState('')
  

  const [totalItems, setTotalItems] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const updateCartCount = () => {
    const storedCart = localStorage.getItem("car");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    const total = cart.reduce((acc, item) => acc + item.quantidade, 0);
    setTotalItems(total);
  };

  React.useEffect(() => {
    updateCartCount();

    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

console.log(inputText)

  const handleChange = ({ target }) => {
    const { value } = target;
    setinputText(value)
  }

  const handleClick = () => {
    setFilter(inputText)
  }


  return (
    <div className=' bg-gray-50'>
      <nav className='bg-white shadow-sm'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex items-center justify-between h-16'>
            <div>
              <Link
                className='text-2xl font-bold text-gray-800'
                to="/" >
                SneakerStyle
              </Link>
            </div>
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar tênis..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
                <button onClick={handleClick}> <Search className="absolute right-3 top-2.5 text-gray-400" size={20} /></button>
              </div>
            </div>
            <div className='flex items-center space-x-6'>
              <Link
                className='text-gray-600 mr-4 cursor-pointer'
                to='/products' >Produtos</Link>
              <Link to='' >
                <Heart className='h-6 w-6 text-gray-600 cursor pointer' />
              </Link>
              <Link to='carrinho'>
                <div className='relative'>
                  <ShoppingBag className='h-6 w-6 text-gray-600 cursor-pointer' />
                  {totalItems > 0 &&
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>}
                </div>
              </Link>

              {!token ?
                <Link to='/login' >
                  <p className='h6 w-6 text-gray-600 cursor-pointer'>Login</p>
                </Link> :
                <div className="relative inline-block text-left" ref={dropdownRef}>
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center rounded-full hover:bg-gray-200 p-2"
                  >
                    <User className="h-6 w-6 text-gray-600 cursor-pointer" />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50">
                      <div className="py-1 text-sm text-gray-700">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setOpen(false)}
                        >
                          Meu Perfil
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                          onClick={() => {
                            localStorage.removeItem('token');
                            setOpen(false);
                            setToken(false);
                            window.dispatchEvent(new Event('tokenUpdated'));
                            navigate('/login'); // ← navegação sem reload
                          }}
                        >
                          Sair
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
