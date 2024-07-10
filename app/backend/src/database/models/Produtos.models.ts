import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import ProductsColor from "./Cores.models";
import MarcaModel from "./Marcas.models";
import CartegModel from "./Categoria.models";
import db from ".";

class Products extends Model<
  InferAttributes<Products>,
  InferCreationAttributes<Products>
> {
  declare id: CreationOptional<number>;
  declare productName: string;
  declare descricao: string;
  declare preco: number;
  declare promo: number;
  declare quantidade: number;
  declare genero: string;
  declare coresId: number;
  declare categoriasId: number;
  declare marcasId: number;
  declare imagens: string[];
  declare tumblr: string;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    promo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coresId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoriasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marcasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagens: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    tumblr: {
      type: DataTypes.STRING,
      allowNull: true,
    },
     quantidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize: db,
    modelName: "products",
    timestamps: false,
  }
);

// cor
Products.belongsTo(ProductsColor, {
  foreignKey: "coresId",
  as: "color",
}); 
ProductsColor.hasMany(Products, { foreignKey: "coresId"   });

// marca
MarcaModel.hasMany(Products, { foreignKey: "marcasId" });
Products.belongsTo(MarcaModel, {foreignKey: "marcasId", as: "marca"});

// categoria
CartegModel.hasMany(Products, { foreignKey: "categoriasId" });
Products.belongsTo(CartegModel, { foreignKey: "categoriasId", as: "categoria"  });

export default Products;
