"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("users", [
            {
                username: "claydson silva",
                email: "claydson@email.com",
                tumrbl: "",
                role: "adim",
                password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
                // senha: secret_admin
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("users", {});
    },
};
//# sourceMappingURL=Users.seeders.js.map