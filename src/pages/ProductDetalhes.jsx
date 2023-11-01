import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { filterByIdOrName } from "../filterProducts/filterProducts";

export default function ProductDetalhe() {
  const [imgIndex, setImgIndex] = useState(0)
  const [arrayCores, setCores] = useState([])
  const getIDProduto = useSelector(state => state.produto.productId);
  const getProduct = filterByIdOrName(getIDProduto, null);

  const { genero, cores, name, categoria } = getProduct


  const a = getProduct.filter(({ cores }) => cores)
  console.log(a, 'fdsfd')
  return (
    <>
      {getIDProduto ?
        <div>
          <h1>{name}</h1>
          {/* <img src={cores[0].images[0]} alt="" /> */}
        </div >
        : <h1>Produto não encontrado</h1>
      }
    </>
  );
}
