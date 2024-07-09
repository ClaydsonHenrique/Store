"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upProduct = exports.createProduct = exports.AllProducts = void 0;
const Products_services_1 = require("../services/Products.services");
const AllProducts = async (req, res) => {
    const products = await (0, Products_services_1.getAllProducts)();
    res.status(products.status).json(products.data);
};
exports.AllProducts = AllProducts;
const createProduct = async (req, res) => {
    const { productName, descricao, preco, genero, promo, categoria, marca, cor, } = req.body;
    const productId = await (0, Products_services_1.addProduct)({
        productName,
        descricao,
        preco,
        genero,
        promo: promo || "",
        categoria,
        marca,
        cor,
    });
    res.status(201).json(productId);
};
exports.createProduct = createProduct;
const upProduct = async (req, res) => {
    const { id } = req.params;
    const convertNumbet = parseInt(id);
    const Update = req.body;
    const getRestult = await (0, Products_services_1.updateProduct)(convertNumbet, Update);
    res.status(getRestult.status).json(getRestult.data);
};
exports.upProduct = upProduct;
//# sourceMappingURL=Prodcuts.controller.js.map