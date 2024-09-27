"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("marcas", [
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
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("marcas", {});
    },
};
//# sourceMappingURL=Marca.seeders.js.map