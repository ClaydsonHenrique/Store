"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable("products", {
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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable("products");
    },
};
//# sourceMappingURL=produtct.migration.js.map