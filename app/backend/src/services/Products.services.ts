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
      exclude: ["coresId", "categoriasId", "marcasId"],
    },
  });

  return { status: 200, data: allProducts };
};

interface IaddProduct {
  productName: string;
  descricao: string;
  preco: number;
  genero: string;
  promo?: number;
  categoria: string;
  marca: string;
  cor: string;
  imagens: string[];
  tumblr: string;
  quantidade: number;
}

const addProduct = async (param: IaddProduct) => {
  
    const existingProduct = await Products.findOne({
      where: { productName: param.productName },
    });

    if (existingProduct) {
      return { status: 409, data: null, message: "Produto já existe." };
    }
  
  let category = await Categorias.findOne({
    where: { categName: param.categoria },
  });


  if (!category) {
    category = await Categorias.create({
      categName: param.categoria,
    });
  }

  let marca = await Marcas.findOne({ where: { brandName: param.marca } });

  if (!marca) {
    marca = await Marcas.create({
      brandName: param.marca,
    });
  }

  let cor = await Cores.findOne({ where: { colorName: param.cor } });

  if (!cor) {
    cor = await Cores.create({
      colorName: param.cor,
    });
  }


  const product = await Products.create({
    productName: param.productName,
    descricao: param.descricao,
    preco: param.preco,
    promo: param.promo || 0,
    genero: param.genero,
    categoriasId: category.id,
    marcasId: marca.id,
    coresId: cor.id,
    imagens: param.imagens,
    tumblr: param.tumblr,
    quantidade: param.quantidade,
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
  imagens?: string[] ;
}

const updateProduct = async (
  id: number,
  updateData: UpdateData
): Promise<{ status: number; data: any }> => {
  const product = await Products.findByPk(id);
  console.log(product)

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

export { getAllProducts, addProduct, updateProduct };
