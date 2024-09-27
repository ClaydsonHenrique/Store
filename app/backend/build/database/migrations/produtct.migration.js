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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable("products");
    },
};
//# sourceMappingURL=produtct.migration.js.map