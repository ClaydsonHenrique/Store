"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("ProductsColor", [
            {
                colorName: "",
                quantity: 0,
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("ProductsColor", {});
    },
};
//# sourceMappingURL=Color.seeders.js.map