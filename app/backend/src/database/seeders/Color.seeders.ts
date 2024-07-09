import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "ProductsColor",
      [
        {
          colorName: "Preto/branco",
        },
        {
          colorName: "Preto/vermelho",
        },
        {
          colorName: "Preto/azul",
        },
        {
          colorName: "Preto/cinza esc",
        },
        {
          colorName: "Preto",
        },
        {
          colorName: "Branco/rosa claro",
        },
        {
          colorName: "Branco/vermelho",
        },
        {
          colorName: "Branco/preto",
        },
        {
          colorName: "Branco",
        },
        {
          colorName: "Branco/prata",
        },
        {
          colorName: "Cinza/preto",
        },
        {
          colorName: "Azul esc/branco",
        },
        {
          colorName: "Azul/branco",
        },
        {
          colorName: "Bege",
        },
        {
          colorName: "Cinza/rosa",
        },
        {
          colorName: "Cinza",
        },
        {
          colorName: "Azul esc/verde",
        },
        {
          colorName: "Marrom esc/branco",
        },
        {
          colorName: "Verde/branco",
        },
        {
          colorName: "Cinza claro",
        },
        {
          colorName: "Branco/cinza claro",
        },
        {
          colorName: "Branco/cinza",
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("ProductsColor", {});
  },
};
