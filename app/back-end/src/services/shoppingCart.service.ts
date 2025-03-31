import ShoppingCart from "../database/models/ShoppingCart.models";
import Products from "../database/models/Products.models";
import { verifyToken } from "../utils/token.utils";

const getProducts = async (token: string) => {
  const tokenIsValid = verifyToken(token);
  if (!tokenIsValid) {
    return { status: 400, data: { message: "Invalid token" } };
  }

  const { id } = tokenIsValid;
  const shoppingCart = await ShoppingCart.findAll({
    where: { userId: id },
    include: [
      {
        model: Products,
        as: "product",
        attributes: ["productName", "price","promo", "images"],
      },
    ],
  });
  return { status: 200, data: shoppingCart };
};

const addProduct = async (
  token: string,
  productId: number,
  quantity: number
) => {
  const tokenIsValid = verifyToken(token);

  if (!tokenIsValid) {
    return { status: 400, data: { message: "Invalid token" } };
  }

  const { id } = tokenIsValid;

  const existingProduct = await ShoppingCart.findOne({
    where: { userId: id, idProduct: productId },
  });

  if (existingProduct) {
    await ShoppingCart.update(
      { quantity: existingProduct.quantity + quantity },
      { where: { userId: id, idProduct: productId } }
    );
    return { status: 200, data: { message: "Car updated " } };
  }

  const addproductCart = await ShoppingCart.create({
    userId: id,
    idProduct: productId,
    quantity,
  });

  return { status: 201, data: addproductCart };
};

export { getProducts, addProduct };
