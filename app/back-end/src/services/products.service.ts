import Products from "../database/models/Products.models";
import Categorias from "../database/models/Categories.models";
import Marcas from "../database/models/Brands.models";
import Cores from "../database/models/Colors.models";

const getAllProducts = async () => {
  const allProducts = await Products.findAll({
    include: [
      {
        model: Categorias,
        as: "category",
        attributes: ["categName"],
      },
      {
        model: Marcas,
        as: "brand",
        attributes: ["brandName"],
      },
      {
        model: Cores,
        as: "color",
        attributes: ["colorName"],
      },
    ],
    attributes: {
      exclude: ["colorsId", "categoriesId", "brandsId"],
    },
  });

  if (!allProducts) {
    return { status: 404, data: { message: "No product found" } };
  }

  const formatedProducts = allProducts.map((product: any) => ({
    ...product.json(),
    category: product.category?.categName,
    brand: product.brand?.brandName,
    color: product.color?.colorName,
  }));

  return { status: 200, data: formatedProducts };
};

const getproductById = async (id: number) => {
  if (!id || id <= 0) {
    return { status: 400, data: { message: "Id is required" } };
  }

  const getProduct = await Products.findByPk(id, {
    include: [
      {
        model: Categorias,
        as: "category",
        attributes: ["categName"],
      },
      {
        model: Marcas,
        as: "brand",
        attributes: ["brandName"],
      },
      {
        model: Cores,
        as: "color",
        attributes: ["colorName"],
      },
    ],
    attributes: {
      exclude: ["colorsId", "categoriesId", "brandsId"],
    },
  });

  if (!getProduct) {
    return { status: 404, data: { message: "Product not found" } };
  }

  const { brand, category, color, ...rest } = getProduct.toJSON() as any;

  const data = {
    ...rest,
    brand: brand?.brandName,
    category: category?.categName,
    color: color?.colorName,
  };

  return { status: 200, data };
};

export { getAllProducts, getproductById };
