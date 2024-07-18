import { Router } from "express";
import {
  AllProducts,
  createProduct,
  upProduct,
  ProductById,
} from "../controllers/Prodcuts.controller";

const ProductsRouter = Router();

ProductsRouter.get("/product", AllProducts);
ProductsRouter.get("/product/:id", ProductById);
ProductsRouter.post("/product", createProduct);
ProductsRouter.put("/product", upProduct);

export default ProductsRouter;
