import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";

class Marcas extends Model<
  InferAttributes<Marcas>,
  InferCreationAttributes<Marcas>
> {
  declare id: CreationOptional<number>;
  declare brandName: string;
}

Marcas.init(
  {
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
  },
  {
    sequelize: db,
    modelName: "marcas",
    timestamps: false,
  }
);

export default Marcas;
