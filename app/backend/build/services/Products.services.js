"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductByIdServices = exports.updateProduct = exports.addProduct = exports.getAllProducts = void 0;
const Produtos_models_1 = __importDefault(require("../database/models/Produtos.models"));
const Categoria_models_1 = __importDefault(require("../database/models/Categoria.models"));
const Marcas_models_1 = __importDefault(require("../database/models/Marcas.models"));
const Cores_models_1 = __importDefault(require("../database/models/Cores.models"));
const getAllProducts = async () => {
    const allProducts = await Produtos_models_1.default.findAll({
        include: [
            {
                model: Categoria_models_1.default,
                as: "categoria",
                attributes: ["categName"],
            },
            {
                model: Marcas_models_1.default,
                as: "marca",
                attributes: ["brandName"],
            },
            {
                model: Cores_models_1.default,
                as: "color",
                attributes: ["colorName"],
            },
        ],
        attributes: {
            exclude: ["colorsId", "categoriesId", "brandsId"],
        },
    });
    return { status: 200, data: allProducts };
};
exports.getAllProducts = getAllProducts;
const ProductByIdServices = async (id) => {
    if (!id) {
        return { status: 400, message: "Id is required" };
    }
    const getProduct = await Produtos_models_1.default.findByPk(id);
    if (!getProduct) {
        return { status: 404, data: "Produto não encontrado" };
    }
    return { status: 200, data: getProduct };
};
exports.ProductByIdServices = ProductByIdServices;
const addProduct = async (param) => {
    const existingProduct = await Produtos_models_1.default.findOne({
        where: { productName: param.productName },
    });
    if (existingProduct) {
        return { status: 409, data: null, message: "Produto já existe." };
    }
    let category = await Categoria_models_1.default.findOne({
        where: { categName: param.categories },
    });
    if (!category) {
        category = await Categoria_models_1.default.create({
            categName: param.categories,
        });
    }
    let marca = await Marcas_models_1.default.findOne({ where: { brandName: param.brands } });
    if (!marca) {
        marca = await Marcas_models_1.default.create({
            brandName: param.brands,
        });
    }
    let cor = await Cores_models_1.default.findOne({ where: { colorName: param.colors } });
    if (!cor) {
        cor = await Cores_models_1.default.create({
            colorName: param.colors,
        });
    }
    const product = await Produtos_models_1.default.create({
        productName: param.productName,
        description: param.description,
        price: param.price,
        promo: param.promo || 0,
        gender: param.gender,
        categoriesId: category.id,
        brandsId: marca.id,
        colorsId: cor.id,
        images: param.images,
        thumbnail: param.thumbnail,
        quantity: param.quantity,
    });
    return { status: 201, data: product };
};
exports.addProduct = addProduct;
const updateProduct = async (id, updateData) => {
    const product = await Produtos_models_1.default.findByPk(id);
    console.log(product);
    if (!product) {
        return { status: 404, data: { message: "Produto não encontrado." } };
    }
    try {
        await product.update(updateData);
        return {
            status: 200,
            data: { updateData },
        };
    }
    catch (error) {
        return {
            status: 500,
            data: { message: "Erro ao atualizar o produto.", error: error.message },
        };
    }
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=Products.services.js.map