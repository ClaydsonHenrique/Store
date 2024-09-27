"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("categorias", [
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
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("categorias", {});
    },
};
//# sourceMappingURL=Categ.seeders.js.map