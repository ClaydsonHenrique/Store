"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToCartService = exports.getProductsInCartService = void 0;
const ShoppingCart_models_1 = __importDefault(require("../database/models/ShoppingCart.models"));
const token_utils_1 = require("../utils/token.utils");
const Produtos_models_1 = __importDefault(require("../database/models/Produtos.models"));
const getProductsInCartService = async (token) => {
    const tokenId = (0, token_utils_1.verifyToken)(token);
    if (!tokenId) {
        throw new Error("Token inválido");
    }
    const { id } = tokenId;
    const carrinho = await ShoppingCart_models_1.default.findAll({
        include: [
            {
                model: Produtos_models_1.default,
                as: "product",
            },
        ],
    });
    return { status: 200, data: carrinho };
};
exports.getProductsInCartService = getProductsInCartService;
const addProductToCartService = async (token, product, quantidade) => {
    const tokenId = (0, token_utils_1.verifyToken)(token);
    if (!tokenId) {
        throw new Error("Invalid token");
    }
    const { id } = tokenId;
    const createCar = await ShoppingCart_models_1.default.create({
        userId: id,
        idProduct: product,
        quantidade,
    });
    return { status: 201, data: createCar };
};
exports.addProductToCartService = addProductToCartService;
//# sourceMappingURL=Carrinho.services.js.map