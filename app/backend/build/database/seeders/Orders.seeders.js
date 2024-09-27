"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (QueryInterface) => {
        await QueryInterface.bulkInsert("orders", [
            {
                id: 1,
                ShoppingCartId: 1,
                userId: 1,
            }
        ]);
    },
    down: async (QueryInterface) => {
        await QueryInterface.bulkDelete("orders", {});
    },
};
//# sourceMappingURL=Orders.seeders.js.map