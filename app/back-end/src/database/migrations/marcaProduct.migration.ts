"use strict";
import { Model, QueryInterface, DataTypes } from "sequelize";
import { Imarcas } from "../../Interfaces/IMarca";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Imarcas>>("marcas", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      brandName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("marcas");
  },
};
