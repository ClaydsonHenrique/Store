"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Cores_models_1 = __importDefault(require("./Cores.models"));
const Marcas_models_1 = __importDefault(require("./Marcas.models"));
const Categoria_models_1 = __importDefault(require("./Categoria.models"));
const _1 = __importDefault(require("."));
class Products extends sequelize_1.Model {
}
Products.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    promo: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    colorsId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    categoriesId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    brandsId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    thumbnail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    images: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
}, {
    sequelize: _1.default,
    modelName: "products",
    timestamps: false,
});
// cor
Products.belongsTo(Cores_models_1.default, {
    foreignKey: "colorsId",
    as: "color",
});
Cores_models_1.default.hasMany(Products, { foreignKey: "colorsId" });
// marca
Marcas_models_1.default.hasMany(Products, { foreignKey: "brandsId" });
Products.belongsTo(Marcas_models_1.default, { foreignKey: "brandsId", as: "marca" });
// categoria
Categoria_models_1.default.hasMany(Products, { foreignKey: "categoriesId" });
Products.belongsTo(Categoria_models_1.default, {
    foreignKey: "categoriesId",
    as: "categoria",
});
exports.default = Products;
//# sourceMappingURL=Produtos.models.js.map