import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import ProductDetails from "./Pages/ProductDetails";
import Carrinho from "./Pages/Carrinho";
import { GetAllProducts } from "./services/Api/Api";
import Products from './Pages/Products';

function App() {
  const [allProducts, setAllProducts] = React.useState([]);

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
      <Header />
      <Routes>
        <Route path="/" element={<Home allProducts={allProducts} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="carrinho" element={<Carrinho allProducts={allProducts} />} />
        <Route path='/products' element={<Products allProducts={allProducts} />} />
      </Routes>
    </main>
  );
}

export default App;
