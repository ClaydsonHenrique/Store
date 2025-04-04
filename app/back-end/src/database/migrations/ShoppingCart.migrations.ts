"user strict"
import { Model, QueryInterface, DataTypes } from "sequelize";
import { IShoppingCart } from "../../Interfaces/ICarrinho";

export default {
  up(QueryInterface: QueryInterface){
    return QueryInterface.createTable<Model<IShoppingCart>>("shoppingCart", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  
  down(QueryInterface:QueryInterface) {
    return QueryInterface.dropTable("shoppingCart");
  }
}