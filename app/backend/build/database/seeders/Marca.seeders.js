"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("marcas", [
            {
                brandName: "",
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("marcas", {});
    },
};
//# sourceMappingURL=Marca.seeders.js.map