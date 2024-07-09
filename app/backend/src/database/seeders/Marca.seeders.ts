import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "marcas",
      [
        {
          id: 1,
          brandName: "Adidas",
        },
        {
          id: 2,
          brandName: "Nike",
        },
        {
          id: 3,
          brandName: "Vans",
        },
        {
          id: 4,
          brandName: "Mizuno",
        },
        {
          id: 5,
          brandName: "Puma",
        },
        {
          id: 6,
          brandName: "Olympikus",
        },
        {
          id: 7,
          brandName: "Asics",
        },
        {
          id: 8,
          brandName: "New Balance",
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("marcas", {});
  },
};
