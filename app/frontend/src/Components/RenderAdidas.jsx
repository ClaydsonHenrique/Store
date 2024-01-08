import React, { useState } from "react";
import ProductSlider from "./ProductsSlide.jsx";
import { adidasRoupas, adidasShoes } from "../Dados/dados";

export default function RenderAdidas() {

  const productsAdidas = [...adidasRoupas, ...adidasShoes].slice(0, 8)

  return (
    <ProductSlider products={productsAdidas} brandName="Adidas" />
  )
}
