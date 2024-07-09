import { Request, Response } from "express";
import { getAllProducts, addProduct, updateProduct } from "../services/Products.services";

const AllProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(products.status).json(products.data);
};

const createProduct = async (req: Request, res: Response) => {
  const {
    productName,
    descricao,
    preco,
    genero,
    promo,
    categoria,
    marca,
    cor,
    imagens
  } = req.body;
  
  const productId = await addProduct({
    productName,
    descricao,
    preco,
    genero,
    promo: promo || "",
    categoria,
    marca,
    cor,
    imagens,
  });
  res.status(201).json(productId)
};

const upProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const convertNumbet = parseInt(id)
  const Update = req.body
   const getRestult = await updateProduct(convertNumbet, Update);
   res.status(getRestult.status).json(getRestult.data)
}

export { AllProducts, createProduct, upProduct };
