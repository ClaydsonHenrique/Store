"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("products", [
            {
                productName: "",
                descricao: "",
                preco: 0,
                promo: 0,
                genero: "",
                coresId: 0,
                categoriasId: 0,
                marcasId: 0,
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("products", {});
    },
};
//# sourceMappingURL=Product.seeders.js.map