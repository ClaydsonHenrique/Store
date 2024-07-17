import React from "react";
import Login from './Pages/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products.jsx';
import SingIn from './Pages/SingIn.jsx';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/singIn' element={<SingIn/>} />
    </Routes>
  );
}

export default App;
