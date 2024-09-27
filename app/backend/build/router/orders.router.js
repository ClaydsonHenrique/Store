"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Orders_controller_1 = __importDefault(require("../controllers/Orders.controller"));
const OrdersRouter = (0, express_1.Router)();
OrdersRouter.get('/orders', Orders_controller_1.default);
exports.default = OrdersRouter;
//# sourceMappingURL=orders.router.js.map