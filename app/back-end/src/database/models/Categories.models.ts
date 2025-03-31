import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";

class Categorias extends Model<
  InferAttributes<Categorias>,
  InferCreationAttributes<Categorias>
> {
  declare id: CreationOptional<number>;
  declare categName: string;
}

Categorias.init(
  {
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
  },
  {
    sequelize: db,
    modelName: "categorias",
    timestamps: false,
  }
);

export default Categorias;
