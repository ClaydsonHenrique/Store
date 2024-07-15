import { QueryInterface } from "sequelize";

export default {
  up: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkInsert("orders", [
      {
        id: 1,
        ShoppingCartId: 1, 
        userId: 1,
      }
    ]);
  },
  down: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkDelete("orders", {});
  },
};
