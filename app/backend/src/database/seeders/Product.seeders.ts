import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          productName: "",
          descricao: "",
          preco: 0,
          promo: 0,
          genero: "",
          coresId: 0,
          categoriasId: 0,
          marcasId: 0,
          tumblr: "",
          quantidade: 0,
          imagens: JSON.stringify(["a"]),
        },
        {
          productName: "",
          descricao: "",
          preco: 0,
          promo: 0,
          genero: "",
          coresId: 0,
          categoriasId: 0,
          quantidade: 0,
          marcasId: 0,
          tumblr: "",
          imagens: JSON.stringify(["a"]),
        },
        {
          productName: "",
          descricao: "",
          preco: 0,
          promo: 0,
          genero: "",
          coresId: 0,
          categoriasId: 0,
          marcasId: 0,
          tumblr: "",
          quantidade: 0,
          imagens: JSON.stringify(["a"]),
        },
        {
          productName: "",
          descricao: "",
          preco: 0,
          promo: 0,
          genero: "",
          coresId: 0,
          categoriasId: 0,
          marcasId: 0,
          tumblr: "",
          quantidade: 0,
          imagens: JSON.stringify(["a"]),
        },
        {
          productName: "",
          descricao: "",
          preco: 0,
          promo: 0,
          genero: "",
          coresId: 0,
          categoriasId: 0,
          marcasId: 0,
          tumblr: "",
          quantidade: 0,
          imagens: JSON.stringify(["a"]),
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("products", {});
  },
};
