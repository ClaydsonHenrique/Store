"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCar = exports.addProductToCart = exports.getProductFromCart = void 0;
const Carrinho_services_1 = require("../services/Carrinho.services");
const getProductFromCart = async (req, res) => {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
        return res.status(401).json({ message: "Token not found" });
    }
    const token = authorizationHeader.split(" ")[1];
    const resultProductCar = await (0, Carrinho_services_1.getProductsInCartService)(token);
    const { status, data } = resultProductCar;
    res.status(status).json(data);
};
exports.getProductFromCart = getProductFromCart;
const addProductToCart = async (req, res) => {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
        return res.status(401).json({ message: "Token not found" });
    }
    const token = authorizationHeader.split(" ")[1];
    const { productId, quantidade } = req.body;
    const resultProductCar = await (0, Carrinho_services_1.addProductToCartService)(token, productId, quantidade);
    const { status, data } = resultProductCar;
    res.status(status).json(data);
};
exports.addProductToCart = addProductToCart;
const updateCar = async (req, res) => {
    const { IProduct, operador, number } = req.body;
    if (!IProduct) {
        return res
            .status(400)
            .json({
            message: `IProduct are required  ${IProduct}`,
        });
    }
    const { status, data } = await (0, Carrinho_services_1.updatequantityProductCar)(IProduct, operador, number);
    return res.status(status).json(data);
};
exports.updateCar = updateCar;
//# sourceMappingURL=Carrinho.controller.js.map