import { QueryInterface } from "sequelize";

export default {
  up: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkInsert("shoppingCart", [
      {
        id: 1,
        idProduct: 1,
        userId: 1,
        quantidade:0,
      },
    ]);
  },
  down: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkDelete("shoppingCart", {});
  },
};
