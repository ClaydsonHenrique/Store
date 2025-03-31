import { Request, Response } from "express";
import { IProducts } from "../Interfaces/IProduct";
import { getProducts, addProduct } from "../services/shoppingCart.service";

const getProductsCart = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }

  const token = authorizationHeader.split(" ")[1];

  const productCar = await getProducts(token);
  return res.status(productCar.status).json(productCar.data);
};

const addProductCar = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  const { productId, quantity } = req.body;

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  
  if (!productId || !quantity) {
    return res
      .status(401)
      .json({ message: "productId or quantity is required" });
  }
  const token = authorizationHeader.split(" ")[1];

  const addCar = await addProduct(token, productId, quantity);
  
  return { status: addCar.status, data: addCar.data}
};


export { addProductCar, getProductsCart };
