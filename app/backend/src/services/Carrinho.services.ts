import Carrinho from "../database/models/ShoppingCart.models";
import { verifyToken } from "../utils/token.utils";
import Products from "../database/models/Produtos.models";
import Users from '../database/models/User.models';

const getProductsInCartService = async (token: string) => {
  const tokenId = verifyToken(token);
  if (!tokenId) {
    throw new Error("Token inválido");
  }
  const { id } = tokenId;
  const carrinho = await Carrinho.findAll({
    where: { userId: id },
    include: [
      {
        model: Products,
        as: "product",
        attributes: ["productName", "price", "images"],
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

const updatequantityProductCar = async (
  quantidade: number,
  idProduct: number
) => {
  const carItem = await Carrinho.findOne({ where: { idProduct } });
  if (!carItem) {
    return { status: 201, data: { message: "item não encontrado" } };
  }
  const updateCar = await carItem.update({ quantidade });
  return {status:201,data: updateCar}
};


export {
  getProductsInCartService,
  addProductToCartService,
  updatequantityProductCar,
};
