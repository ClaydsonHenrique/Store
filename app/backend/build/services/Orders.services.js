"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orders_models_1 = __importDefault(require("../database/models/Orders.models"));
const token_utils_1 = require("../utils/token.utils");
const getAllOrdersService = async (token) => {
    const tokenId = (0, token_utils_1.verifyToken)(token);
    if (!tokenId) {
        return { status: 401, data: "Token invalid" };
    }
    const { id } = tokenId;
    const findOrders = await Orders_models_1.default.findAll({ where: { id } });
    return { status: 200, data: findOrders };
};
exports.default = getAllOrdersService;
//# sourceMappingURL=Orders.services.js.map