import { Router } from "express";
import getAllOrders from '../controllers/Orders.controller';


const OrdersRouter = Router();
OrdersRouter.get('/orders', getAllOrders)


export default OrdersRouter;
