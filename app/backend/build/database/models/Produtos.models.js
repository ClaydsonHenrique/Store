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
    descricao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    promo: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    genero: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    coresId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    categoriasId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    marcasId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: "products",
    timestamps: false,
});
// cor
Products.belongsTo(Cores_models_1.default, {
    foreignKey: "coresId",
    as: "color",
});
Cores_models_1.default.hasMany(Products, { foreignKey: "coresId" });
// marca
Marcas_models_1.default.hasMany(Products, { foreignKey: "marcasId" });
Products.belongsTo(Marcas_models_1.default, { foreignKey: "marcasId", as: "marca" });
// categoria
Categoria_models_1.default.hasMany(Products, { foreignKey: "categoriasId" });
Products.belongsTo(Categoria_models_1.default, { foreignKey: "categoriasId", as: "categoria" });
exports.default = Products;
//# sourceMappingURL=Produtos.models.js.map