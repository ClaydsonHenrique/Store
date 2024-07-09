import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";

class ProductsColor extends Model<
  InferAttributes<ProductsColor>,
  InferCreationAttributes<ProductsColor>
> {
  declare id: CreationOptional<number>;
  declare colorName: string;
}

ProductsColor.init(
  {
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
  },
  {
    sequelize: db,
    tableName: "ProductsColor",
    modelName: "ProductsColor",
    timestamps: false,
  }
);

export default ProductsColor;
