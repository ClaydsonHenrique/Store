import {Router} from 'express';
import {AllProducts, createProduct, upProduct} from '../controllers/Prodcuts.controller'

const ProductsRouter = Router();

ProductsRouter.get('/product', AllProducts);
ProductsRouter.post("/product", createProduct);
ProductsRouter.put("/product", upProduct);

export default ProductsRouter;

