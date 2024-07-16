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
  declare description: string;
  declare price: number;
  declare promo: number;
  declare gender: string;
  declare colorsId: number;
  declare categoriesId: number;
  declare brandsId: number;
  declare images: string[];
  declare thumbnail: string;
  declare  quantity: number;
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    promo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colorsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brandsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "products",
    timestamps: false,
  }
);

// cor
Products.belongsTo(ProductsColor, {
  foreignKey: "colorsId",
  as: "color",
}); 
ProductsColor.hasMany(Products, { foreignKey: "colorsId" });

// marca
MarcaModel.hasMany(Products, { foreignKey: "brandsId" });
Products.belongsTo(MarcaModel, { foreignKey: "brandsId", as: "marca" });

// categoria
CartegModel.hasMany(Products, { foreignKey: "categoriesId" });
Products.belongsTo(CartegModel, {
  foreignKey: "categoriesId",
  as: "categoria",
});

export default Products;
