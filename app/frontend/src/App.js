import React from "react";
import Login from './Pages/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products.jsx';
import SingUp from './Pages/SingUp.jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/product' element={<Products/>} />
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signUp' element={<SingUp />} />
      <Route path='/shoppingCart' element={<ShoppingCart/>}/>
    </Routes>
  );
}

export default App;
