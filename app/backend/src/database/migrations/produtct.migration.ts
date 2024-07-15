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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      promo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colorsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brandsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("products");
  },
};
