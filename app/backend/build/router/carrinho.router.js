"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Carrinho_controller_1 = require("../controllers/Carrinho.controller");
const CarrinhoRouter = (0, express_1.Router)();
CarrinhoRouter.get("/carrinho", Carrinho_controller_1.getProductFromCart);
CarrinhoRouter.post("/carrinho", Carrinho_controller_1.addProductToCart);
exports.default = CarrinhoRouter;
//# sourceMappingURL=carrinho.router.js.map