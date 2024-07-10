import { QueryInterface } from "sequelize";

export default {
  up: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkInsert("shoppingCart", []);
  },
  down: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkDelete("shoppingCart", {});
  },
};
