"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Produtos_models_1 = __importDefault(require("./Produtos.models"));
const User_models_1 = __importDefault(require("./User.models"));
class ShoppingCart extends sequelize_1.Model {
}
ShoppingCart.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    idProduct: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produtos_models_1.default,
            key: "id",
        },
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User_models_1.default,
            key: "id",
        },
    },
    quantidade: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: "shoppingCart",
    tableName: "shoppingCart",
    timestamps: false,
});
ShoppingCart.belongsTo(User_models_1.default, { foreignKey: "userId", as: "user" });
ShoppingCart.belongsTo(Produtos_models_1.default, { foreignKey: "idProduct", as: "product" });
User_models_1.default.hasMany(ShoppingCart, { foreignKey: "userId" });
Produtos_models_1.default.hasMany(ShoppingCart, { foreignKey: "idProduct" });
exports.default = ShoppingCart;
//# sourceMappingURL=ShoppingCart.models.js.map