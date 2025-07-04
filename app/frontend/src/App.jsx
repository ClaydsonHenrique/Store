import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import ProductDetails from "./Pages/ProductDetails";
import Carrinho from "./Pages/Carrinho";
import { GetAllProducts } from "./services/Api/Api";
import Products from './Pages/Products';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import { ContextToken } from './Context/ContextApi';
import EditProfile from './Pages/EditProfile';

function App() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [token, setToken] = React.useState(false)
  const [filter, setFilter] = React.useState('')


  const getToken = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (typeof token === 'string') {
      setToken(true);
    } else {
      setToken(false)
    }
  }

  React.useEffect(() => {
    getToken();
  }, [])


  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await GetAllProducts();
        setAllProducts(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main>
      <ContextToken.Provider value={{ token, setToken, filter, setFilter }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home allProducts={allProducts} />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="carrinho" element={<Carrinho allProducts={allProducts} />} />
          <Route path='/products' element={<Products allProducts={allProducts} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='profile/edit' element={<EditProfile />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </ContextToken.Provider>
    </main>
  );
}


export default App