import { Router } from "express";
import { allproducts, productById } from "../controller/products.controller";

const ProductRouter = Router();

ProductRouter.get("/products", allproducts);
ProductRouter.get("/proucts/:id", productById);

export default ProductRouter;
