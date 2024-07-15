import { Request, Response } from 'express';
import getAllOrdersService from '../services/Orders.services';

const getAllOrders = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorizationHeader.split(" ")[1];
  const resultOrders = await getAllOrdersService(token);
  const { status, data } = resultOrders;
  return res.status(status).json(data);
};

export default getAllOrders