"user strict";
import { Model, QueryInterface, DataTypes } from "sequelize";
import { IOrders } from '../../Interfaces/IOrders';

export default {
  up(QueryInterface: QueryInterface) {
    return QueryInterface.createTable<Model<IOrders>>("shoppingCart", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      shoppingCartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  down(QueryInterface: QueryInterface) {
    return QueryInterface.dropTable("shoppingCart");
  },
};
