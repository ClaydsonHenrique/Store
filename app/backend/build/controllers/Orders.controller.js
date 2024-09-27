"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orders_services_1 = __importDefault(require("../services/Orders.services"));
const getAllOrders = async (req, res) => {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
        return res.status(401).json({ message: "Token not found" });
    }
    const token = authorizationHeader.split(" ")[1];
    const resultOrders = await (0, Orders_services_1.default)(token);
    const { status, data } = resultOrders;
    return res.status(status).json(data);
};
exports.default = getAllOrders;
//# sourceMappingURL=Orders.controller.js.map