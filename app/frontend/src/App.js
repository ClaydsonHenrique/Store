import React from "react";
import { connect } from 'react-redux';
import Login from './Pages/Login.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import Products from './Pages/Products.jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Headers from './Pages/Headers.jsx';
import Footer from './Pages/Footer.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
import Carrinho from './Pages/Carrinho.jsx';

function App({login}) {
  if (login === true) <Navigate to="/" />
  return (
    <main className='container_app'>
      <Headers />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='*' element ={<PageNotFound />} />
      </Routes>
      <Footer />
    </main>

  );
}

const mapStateToProps = (state) => ({
  login: state.token.login,
});

export default connect(mapStateToProps)(App);
