import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { filterByIdOrName } from "../filterProducts/filterProducts";
import './ProductDetails.css'

export default function ProductDetalhe() {
  const [imgIndex, setImgIndex] = useState(0)
  const [ImgPrincipal, setImgPrincipal] = useState(0)
  const [arrayCores, setCores] = useState([])
  const getIDProduto = useSelector(state => state.produto.productId);
  const getProduct = filterByIdOrName(getIDProduto, null);

  const a = getProduct.map((produto) => produto.cores)
  const result = getProduct.map((produto) => [produto.name, produto.categoria, produto.genero])
  const b = a[0][imgIndex]

  console.log(a[0])

  a[0].map((h) => console.log(h.images[0]))

  const handleClick = (corId) => {
    setImgIndex(corId)
    setImgPrincipal(0)
  }

  const handleClickImg = (index) => {
    setImgPrincipal(index)
  }
  console.log(result)
  return (
    <>
      {getIDProduto ?
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <img src={b.images[ImgPrincipal]} alt="" className="imagemPrincipal" />
            </div>
            <div className="asss" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {b.images.map((img, index) => (
                <img onClick={() => handleClickImg(index)}
                  src={img} alt="" className={index === ImgPrincipal ? 'img-destaque' : 'imagens'} />
              ))}
            </div>
            <div>
              <h1>{result[0][0]}</h1>
              <h1>{b.nome}</h1>
              <sr> <h1 className={`priceReal ${b.pricePromo ? 'risco' : ''}`}>{b.priceOriginal}</h1></sr>
              <h1 className="promo">{b.pricePromo ? b.pricePromo : ''}</h1>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            {a[0].map((as, index) => (
              <div onClick={() => handleClick(as.corId)}>
                <img src={as.images[0]} alt="" style={{ height: '100px' }} />
              </div>
            ))}
          </div>
        </div >
        : <h1>Produto não encontrado</h1>
      }
    </>
  );
}
