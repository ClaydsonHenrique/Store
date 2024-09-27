"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable("users", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            tumrbl: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            endereco: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            cep: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            telefone: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable("users");
    },
};
//# sourceMappingURL=Users.migrations.js.map