"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("categorias", [
            {
                categName: "",
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("categorias", {});
    },
};
//# sourceMappingURL=Categ.seeders.js.map