import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";

class Users extends Model<
  InferAttributes<Users>,
  InferCreationAttributes<Users>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare tumrbl: string;
  declare role: string;
  declare email: string;
  declare password: string;
  declare endereco: string;
  declare cep: string;
  declare telefone: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tumrbl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull:false,
    }
  },
  {
    sequelize: db,
    modelName: "users",
    timestamps: false,
  }
);

export default Users;
