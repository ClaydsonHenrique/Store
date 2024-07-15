import { Request, Response } from 'express';
import getAllOrdersService from '../services/Orders.services';

const getAllOrders = async (res:Response, req:Request) => {
  const authorizationHeader = req.get("Authorization");
  if(!authorizationHeader){
    return res.status(401).json({message: "Token not found"});
  }
  const token = authorizationHeader.split(" ")[1];
  const resultOrders = await getAllOrdersService(token);
  return res.status(resultOrders.status).json(resultOrders.data);
}

export default getAllOrders