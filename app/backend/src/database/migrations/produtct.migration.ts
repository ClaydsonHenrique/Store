"use strict";
import { Model, QueryInterface, DataTypes } from "sequelize";
import { IProducts } from "../../Interfaces/IProduct";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProducts>>("products", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      promo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coresId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoriasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      marcasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagens: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("products");
  },
};
