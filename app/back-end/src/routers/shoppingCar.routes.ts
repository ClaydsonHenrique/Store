import { Router } from "express";
import {
  getProductsCart,
  addProductCar,
} from "../controller/shoppingCart.controller";

const ShoppingCarRouter = Router();

ShoppingCarRouter.get("/car", getProductsCart);
ShoppingCarRouter.post("/car", addProductCar);

export default ShoppingCarRouter;
