import { Router } from "express";
import {
  getProductFromCart,
  addProductToCart,
} from "../controllers/Carrinho.controller";

const CarrinhoRouter = Router();

CarrinhoRouter.get("/carrinho", getProductFromCart);
CarrinhoRouter.post("/carrinho", addProductToCart);

export default CarrinhoRouter;
