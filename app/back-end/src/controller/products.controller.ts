import { Request, Response } from "express";
import { getAllProducts, getproductById } from "../services/products.service";

const allproducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(products.status).json(products.data);
};

const productById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getproductById(Number(id));
  res.status(product.status).json(product.data);
};

export  { allproducts, productById };
