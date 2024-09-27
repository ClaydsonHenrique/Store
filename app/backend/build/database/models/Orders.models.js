"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import Users from './User.models';
// import ShoppingCart from './ShoppingCart.models';
const _1 = __importDefault(require("."));
class Orders extends sequelize_1.Model {
}
Orders.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    shoppingCartId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    tableName: "orders",
    modelName: "orders",
    timestamps: false,
});
// usuario
// Orders.belongsTo(Users, { foreignKey: "userId", as: "user" });
// Users.hasMany(Orders, { foreignKey: "userId", as: "orders" });
// // products
// Orders.belongsTo(ShoppingCart, {
//   foreignKey: "shoppingCartId",
//   as: "shoppingCart",
// });
// ShoppingCart.hasMany(Orders, { foreignKey: "shoppingCartId", as: "orders" });
exports.default = Orders;
//# sourceMappingURL=Orders.models.js.map