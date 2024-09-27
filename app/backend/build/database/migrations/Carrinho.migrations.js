"use strict";
"user strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(QueryInterface) {
        return QueryInterface.createTable("shoppingCart", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            idProduct: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            quantidade: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
        });
    },
    down(QueryInterface) {
        return QueryInterface.dropTable("shoppingCart");
    }
};
//# sourceMappingURL=Carrinho.migrations.js.map