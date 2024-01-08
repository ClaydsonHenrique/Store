import React from "react";
import ProductSlider from "./ProductsSlide.jsx";
import { nikeRoupas, nikeShoes } from "../Dados/dados";

export default function RenderNike() {
  const productsNike = [...nikeRoupas, ...nikeShoes]
  const productsSelect = [productsNike[10], productsNike[20], productsNike[0], productsNike[25], productsNike[18], productsNike[5]]

  return (
    <ProductSlider products={productsSelect} brandName="Nike" />
  );
}
