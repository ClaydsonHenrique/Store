import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";

class ShoppingCart extends Model<
  InferAttributes<ShoppingCart>,
  InferCreationAttributes<ShoppingCart>
> {
  declare id: CreationOptional<number>;
  declare idProduct: number;
  declare userId: number;
  declare quantidade: number;
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "shoppingCart",
    timestamps: false,
  }
);

export default ShoppingCart;
