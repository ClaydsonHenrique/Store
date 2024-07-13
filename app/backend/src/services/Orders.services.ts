import Orders from "../database/models/Orders.models";
import { verifyToken } from "../utils/token.utils";

const getAllOrdersService = async (token: string) => {
  const tokenId = verifyToken(token);
  if (!tokenId) {
    return { status: 401, data: "Token invalid" };
  }
  const { id } = tokenId;
  const findOrders = await Orders.findAll({ where: { id } });
  return { status: 200, data: findOrders };
};

export default getAllOrdersService;
