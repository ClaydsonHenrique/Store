"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatequantityProductCar = exports.addProductToCartService = exports.getProductsInCartService = void 0;
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
        where: { userId: id },
        include: [
            {
                model: Produtos_models_1.default,
                as: "product",
                attributes: ["productName", "price", "images"],
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
const removeItemCar = async (idProduct) => {
    await ShoppingCart_models_1.default.destroy({ where: { idProduct } });
    return { status: 201, data: { message: "item removido" } };
};
const updatequantityProductCar = async (idProduct, operador, number) => {
    const carItem = await ShoppingCart_models_1.default.findOne({ where: { idProduct } });
    if (!carItem) {
        return { status: 201, data: { message: "item não encontrado" } };
    }
    if (!operador && carItem.quantidade <= 0) {
        removeItemCar(idProduct);
        return { status: 401, data: { message: "Produto vazio" } };
    }
    let updateCar;
    if (!operador) {
        updateCar = await carItem.update({
            quantidade: carItem.quantidade - number,
        });
    }
    updateCar = await carItem.update({
        quantidade: carItem.quantidade + number,
    });
    return { status: 201, data: updateCar };
};
exports.updatequantityProductCar = updatequantityProductCar;
//# sourceMappingURL=Carrinho.services.js.map