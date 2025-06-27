"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductById = exports.upProduct = exports.createProduct = exports.AllProducts = void 0;
const Products_services_1 = __importDefault(require("../services/Products.services"));
const AllProducts = async (req, res) => {
    const products = await Products_services_1.default.getAllProducts();
    res.status(products.status).json(products.data);
};
exports.AllProducts = AllProducts;
const ProductById = async (req, res) => {
    const { id } = req.params;
    const restultProductById = await Products_services_1.default.ProductByIdServices(Number(id));
    res.status(restultProductById.status).json(restultProductById.data);
};
exports.ProductById = ProductById;
const createProduct = async (req, res) => {
    const { productName, description, price, gender, promo, categories, brands, colors, images, thumbnail, quantity, } = req.body;
    const productId = await Products_services_1.default.addProduct({
        productName,
        description,
        price,
        gender,
        promo: promo || "",
        categories,
        brands,
        colors,
        images,
        thumbnail,
        quantity,
    });
    res.status(201).json(productId);
};
exports.createProduct = createProduct;
const upProduct = async (req, res) => {
    const { id } = req.params;
    const convertNumbet = parseInt(id);
    const Update = req.body;
    const getRestult = await Products_services_1.default.updateProduct(convertNumbet, Update);
    res.status(getRestult.status).json(getRestult.data);
};
exports.upProduct = upProduct;
//# sourceMappingURL=Prodcuts.controller.js.map