import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [totalItems, setTotalItems] = useState(0);

  const updateCartCount = () => {
    const storedCart = localStorage.getItem("car");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    const total = cart.reduce((acc, item) => acc + item.quantidade, 0);
    setTotalItems(total);
  };

  useEffect(() => {
    updateCartCount();

    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

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
            <div className='flex items-center space-x-6'>
              <Link
                className='text-gray-600 mr-4 cursor-pointer'
                to='/products' >Produtos</Link>
              <Search className='h-6 w-6 text-gray-600 cursor-pointer' />
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
              <Link to='' >
                <User className='h6 w-6 text-gray-600 cursor-pointer' />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
