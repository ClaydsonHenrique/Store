import React from "react";
import ProductSlider from "./ProductsSlide.jsx";
import { vansShoes, vansRoupas } from "../Dados/dados";

export default function RenderVans() {
  const productsAdidas = [...vansShoes, ...vansRoupas].slice(0, 8)

  return (
    <ProductSlider products={productsAdidas} brandName="Nike" />
  )
}