import { Model } from 'sequelize';
import Carrinho from "../database/models/ShoppingCart.models";
import { verifyToken } from "../utils/token.utils";
import Products from '../database/models/Produtos.models';

const getProductsInCartService = async (token: string) => {
  const tokenId = verifyToken(token);
  if (!tokenId) {
    throw new Error("Token inválido");
  }
  const { id } = tokenId;
  const carrinho = await Carrinho.findAll({
    include: [
      {
        model: Products,
        as: "product", 
      },
    ],
  });
  return { status: 200, data: carrinho };
};

const addProductToCartService = async (
  token: string,
  product: number,
  quantidade: number
) => {
  const tokenId = verifyToken(token);
  if (!tokenId) {
    throw new Error("Invalid token");
  }
  
  const { id } = tokenId;
  const createCar = await Carrinho.create({
    userId: id,
    idProduct: product,
    quantidade,
  });

  return { status: 201, data: createCar };
};

export { getProductsInCartService, addProductToCartService };
