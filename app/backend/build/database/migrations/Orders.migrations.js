"use strict";
"user strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(QueryInterface) {
        return QueryInterface.createTable("orders", {
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
        });
    },
    down(QueryInterface) {
        return QueryInterface.dropTable("orders");
    },
};
//# sourceMappingURL=Orders.migrations.js.map