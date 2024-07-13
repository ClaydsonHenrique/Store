import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import Users from './User.models';
import ShoppingCart from './ShoppingCart.models';
import db from ".";

class Orders extends Model<
  InferAttributes<Orders>,
  InferCreationAttributes<Orders>
> {
  declare id: CreationOptional<number>;
  declare shoppingCartId: number;
  declare userId: number;
}

Orders.init(
  {
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
  },
  {
    sequelize: db,
    tableName: "orders",
    modelName: "orders",
    timestamps: false,
  }
);

// usuario

Orders.belongsTo(Users, { foreignKey: "userId", as: "user" });
Users.hasMany(Orders, { foreignKey: "userId", as: "orders" });

// products
Orders.belongsTo(ShoppingCart, {
  foreignKey: "shoppingCartId",
  as: "shoppingCart",
});
ShoppingCart.hasMany(Orders, { foreignKey: "shoppingCartId", as: "orders" });

export default Orders;