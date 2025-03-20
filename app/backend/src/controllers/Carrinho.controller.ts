import { IProducts } from "./../Interfaces/IProduct";
import {
  getProductsInCartService,
  addProductToCartService,
  updatequantityProductCar,
} from "../services/Carrinho.services";
import { Request, Response } from "express";

const getProductFromCart = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorizationHeader.split(" ")[1];
  const resultProductCar = await getProductsInCartService(token);
  const { status, data } = resultProductCar;
  res.status(status).json(data);
};

const addProductToCart = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorizationHeader.split(" ")[1];
  const { productId, quantidade } = req.body;
  const resultProductCar = await addProductToCartService(
    token,
    productId,
    quantidade
  );
  const { status, data } = resultProductCar;
  res.status(status).json(data);
};

const updateCar =async (req: Request, res: Response) => {
  const { IProduct, operador, number } = req.body;
  if(!IProduct ) {
    return res
      .status(400)
      .json({
        message: `IProduct are required  ${IProduct}`,
      });
  }
  const { status, data } = await updatequantityProductCar(
    IProduct,
    operador,
    number
  );
  return res.status(status).json(data);
};

export { getProductFromCart, addProductToCart, updateCar };
