
"use strict";
import { Model, QueryInterface, DataTypes } from "sequelize";
import { ICateg } from "../../Interfaces/ICateg";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICateg>>("categorias", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      categName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("categorias");
  },
};
