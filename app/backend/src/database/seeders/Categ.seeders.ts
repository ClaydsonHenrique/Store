import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          categName: "Lifestyle",
        },
        {
          categName: "Skate",
        },
        {
          categName: "Futebol",
        },
        {
          categName: "Corrida",
        },
        {
          categName: "Basquete",
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("categorias", {});
  },
};
