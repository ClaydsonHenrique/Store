import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/action/index.js';

import Filteres from "../Components/Filteres.jsx";
import RenderNike from "../Components/RenderNike.jsx";
import RenderAdidas from "../Components/RenderAdidas.jsx";
import RenderVans from "../Components/RenderVans.jsx";
import {
  allProdutcts,
  adidasShoes,
  nikeShoes,
  nikeRoupas,
  adidasRoupas,
} from "../Dados/dados.js";
import "./Home.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const randomProducts = getRandomProdutos(27);
    setProdutos(randomProducts);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await getApi();
      console.log(result);
    }

    fetchData();
  }, []);

  async function postApi(data) {
    const response = await fetch("http://localhost:3003/products", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  }

  async function getApi() {
    const response = await fetch("http://localhost:3003/products");
    const result = await response.json();
    return result;
  }
  
  const a = getApi()
  console.log(a)

  function getRandomProdutos(count) {
    const shuffledShoes = allProdutcts.slice();
    let randomShoes = [];

    while (randomShoes.length < count && shuffledShoes.length > 0) {
      const randomIndex = Math.floor(Math.random() * shuffledShoes.length);
      randomShoes.push(shuffledShoes[randomIndex]);
      shuffledShoes.splice(randomIndex, 1);
    }

    return randomShoes;
  }

  const detailProduct = (id) => {
    dispatch(addProduct(id));
    navigate(`/detalhes/${id}`);
  }

  return (
    <section>
      <div className="section-home">
        <div className="renderProducts">
          <RenderNike />
          <RenderAdidas />
          <RenderVans />
        </div>
        <section style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
          {produtos.map(({ categoria, cores, genero, marca, name, id }, index) => (
            <div key={index} style={{ width: '400px', margin: '10px 40px' }}>
              {index >= 0 && (
                <div className="products">
                  <p className="tipo">{categoria}</p>
                  <h2 className="tipo">{marca}</h2>
                  <h1 className="titulo" style={{ maxWidthidth: '100%' }}>
                    {name}
                  </h1>
                  <img
                    src={cores[0].images[0]}
                    alt=""
                    className="imagem-home"
                  />
                  {cores[0].pricePromo !== '' ? (
                    <div style={{ display: 'flex' }}>
                      <p className="priceDisable"><s>{cores[0].priceOriginal}</s></p>
                      <p style={{ color: 'red' }}>{cores[0].pricePromo}</p>
                    </div>
                  ) : (
                    <p>{cores[0].priceOriginal}</p>
                  )}
                  <div className="container-tamanho"></div>
                  <button onClick={() => detailProduct(id)}>mais detalhes</button>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Home;
