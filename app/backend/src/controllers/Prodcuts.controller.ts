import { Request, Response } from "express";
import {
  getAllProducts,
  addProduct,
  updateProduct,
  ProductByIdServices,
} from "../services/Products.services";

const AllProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(products.status).json(products.data);
};

const ProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const restultProductById = await ProductByIdServices(Number(id))
  res.status(restultProductById.status).json(restultProductById.data);
};

const createProduct = async (req: Request, res: Response) => {
  const {
    productName,
    description,
    price,
    gender,
    promo,
    categories,
    brands,
    colors,
    images,
    thumbnail,
    quantity,
  } = req.body;

  const productId = await addProduct({
    productName,
    description,
    price,
    gender,
    promo: promo || "",
    categories,
    brands,
    colors,
    images,
    thumbnail,
    quantity,
  });
  res.status(201).json(productId);
};

const upProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const convertNumbet = parseInt(id);
  const Update = req.body;
  const getRestult = await updateProduct(convertNumbet, Update);
  res.status(getRestult.status).json(getRestult.data);
};

export { AllProducts, createProduct, upProduct, ProductById };
