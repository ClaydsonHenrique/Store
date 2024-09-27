"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Prodcuts_controller_1 = require("../controllers/Prodcuts.controller");
const ProductsRouter = (0, express_1.Router)();
ProductsRouter.get("/product", Prodcuts_controller_1.AllProducts);
ProductsRouter.get("/product/:id", Prodcuts_controller_1.ProductById);
ProductsRouter.post("/product", Prodcuts_controller_1.createProduct);
ProductsRouter.put("/product", Prodcuts_controller_1.upProduct);
exports.default = ProductsRouter;
//# sourceMappingURL=product.router.js.map