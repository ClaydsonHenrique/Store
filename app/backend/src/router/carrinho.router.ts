import { Router } from "express";
import {
  getProductFromCart,
  addProductToCart,
  updateCar,
} from "../controllers/Carrinho.controller";

const CarrinhoRouter = Router();

CarrinhoRouter.get("/carrinho", getProductFromCart);
CarrinhoRouter.post("/carrinho", addProductToCart);
CarrinhoRouter.put("/carrinho", updateCar);

export default CarrinhoRouter;
