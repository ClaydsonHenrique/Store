"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (QueryInterface) => {
        await QueryInterface.bulkInsert("shoppingCart", [
            {
                id: 1,
                idProduct: 1,
                userId: 1,
                quantidade: 4,
            },
        ]);
    },
    down: async (QueryInterface) => {
        await QueryInterface.bulkDelete("shoppingCart", {});
    },
};
//# sourceMappingURL=Carrinho.seeders.js.map