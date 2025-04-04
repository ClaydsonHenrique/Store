"use strict";
import { Model, QueryInterface, DataTypes } from "sequelize";
import { IColor } from "../../Interfaces/IColor";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IColor>>("ProductsColor", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      colorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("ProductsColor");
  },
};
