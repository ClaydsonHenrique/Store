import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";
import Products from './Products.models';
import Users from './User.models';

class ShoppingCart extends Model<
  InferAttributes<ShoppingCart>,
  InferCreationAttributes<ShoppingCart>
> {
  declare id: CreationOptional<number>;
  declare idProduct: number;
  declare userId: number;
  declare quantity: number;
}

ShoppingCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "shoppingCart",
    tableName: "shoppingCart", // Nome correto da tabela
    timestamps: false,
  }
);

ShoppingCart.belongsTo(Users, { foreignKey: "userId", as: "user" });
ShoppingCart.belongsTo(Products, { foreignKey: "idProduct", as: "product" });

Users.hasMany(ShoppingCart, { foreignKey: "userId" });
Products.hasMany(ShoppingCart, { foreignKey: "idProduct" });

export default ShoppingCart;