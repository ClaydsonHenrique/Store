"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.addProduct = exports.getAllProducts = void 0;
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
                attributes: ["id", "categName"],
            },
            {
                model: Marcas_models_1.default,
                as: "marca",
                attributes: ["id", "brandName"],
            },
            {
                model: Cores_models_1.default,
                as: "color",
                attributes: ["id", "colorName", "quantity"],
            },
        ],
        attributes: {
            exclude: ["coresId", "categoriasId", "marcasId"],
        },
    });
    return { status: 200, data: allProducts };
};
exports.getAllProducts = getAllProducts;
const addProduct = async (param) => {
    const existingProduct = await Produtos_models_1.default.findOne({
        where: { productName: param.productName },
    });
    if (existingProduct) {
        return { status: 409, data: null, message: "Produto já existe." };
    }
    let category = await Categoria_models_1.default.findOne({
        where: { categName: param.categoria },
    });
    if (!category) {
        category = await Categoria_models_1.default.create({
            categName: param.categoria,
        });
    }
    let marca = await Marcas_models_1.default.findOne({ where: { brandName: param.marca } });
    if (!marca) {
        marca = await Marcas_models_1.default.create({
            brandName: param.marca,
        });
    }
    let cor = await Cores_models_1.default.findOne({ where: { colorName: param.cor } });
    if (!cor) {
        cor = await Cores_models_1.default.create({
            colorName: param.cor,
            quantity: 40,
        });
    }
    const product = await Produtos_models_1.default.create({
        productName: param.productName,
        descricao: param.descricao,
        preco: param.preco,
        promo: param.promo || "",
        genero: param.genero,
        categoriasId: category.id,
        marcasId: marca.id,
        coresId: cor.id,
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