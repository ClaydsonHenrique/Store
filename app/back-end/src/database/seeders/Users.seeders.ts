import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "claydson silva",
          email: "claydson@email.com",
          tumrbl: "",
          role: "adim",
          password:
            "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
          // senha: secret_admin
          endereco:"",
          cep:"",
          telefone:"",
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("users", {});
  },
};
