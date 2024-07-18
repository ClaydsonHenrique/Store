import Products from "../database/models/Produtos.models";
import Categorias from "../database/models/Categoria.models";
import Marcas from "../database/models/Marcas.models";
import Cores from "../database/models/Cores.models";

const getAllProducts = async () => {
  const allProducts = await Products.findAll({
    include: [
      {
        model: Categorias,
        as: "categoria",
        attributes: ["categName"],
      },
      {
        model: Marcas,
        as: "marca",
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

  return { status: 200, data: allProducts };
};

const ProductByIdServices = async (id: number) => {
  if(!id) {
    return { status: 400, message: "Id is required" }
  }
  const getProduct = await Products.findByPk(id);
  if(!getProduct) {
    return { status: 404, data: "Produto não encontrado" };
  }
  return { status: 200, data: getProduct}
};

interface IaddProduct {
  productName: string;
  description: string;
  price: number;
  gender: string;
  promo?: number;
  categories: string;
  brands: string;
  colors: string;
  images: string[];
  thumbnail: string;
  quantity: number;
}

const addProduct = async (param: IaddProduct) => {
  const existingProduct = await Products.findOne({
    where: { productName: param.productName },
  });

  if (existingProduct) {
    return { status: 409, data: null, message: "Produto já existe." };
  }

  let category = await Categorias.findOne({
    where: { categName: param.categories },
  });

  if (!category) {
    category = await Categorias.create({
      categName: param.categories,
    });
  }

  let marca = await Marcas.findOne({ where: { brandName: param.brands } });

  if (!marca) {
    marca = await Marcas.create({
      brandName: param.brands,
    });
  }

  let cor = await Cores.findOne({ where: { colorName: param.colors } });

  if (!cor) {
    cor = await Cores.create({
      colorName: param.colors,
    });
  }

  const product = await Products.create({
    productName: param.productName,
    description: param.description,
    price: param.price,
    promo: param.promo || 0,
    gender: param.gender,
    categoriesId: category.id,
    brandsId: marca.id,
    colorsId: cor.id,
    images: param.images,
    thumbnail: param.thumbnail,
    quantity: param.quantity,
  });

  return { status: 201, data: product };
};

interface UpdateData {
  productName?: string;
  descricao?: string;
  preco?: number;
  promo?: number;
  genero?: string;
  color?: { colorName: string };
  categoria?: { categName: string };
  marca?: { brandName: string };
  imagens?: string[];
}

const updateProduct = async (
  id: number,
  updateData: UpdateData
): Promise<{ status: number; data: any }> => {
  const product = await Products.findByPk(id);
  console.log(product);

  if (!product) {
    return { status: 404, data: { message: "Produto não encontrado." } };
  }

  try {
    await product.update(updateData);

    return {
      status: 200,
      data: { updateData },
    };
  } catch (error: any) {
    return {
      status: 500,
      data: { message: "Erro ao atualizar o produto.", error: error.message },
    };
  }
};

export { getAllProducts, addProduct, updateProduct, ProductByIdServices };
