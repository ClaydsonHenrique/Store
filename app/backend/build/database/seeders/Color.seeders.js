"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert("ProductsColor", [
            {
                colorName: "Preto/branco",
            },
            {
                colorName: "Preto/vermelho",
            },
            {
                colorName: "Preto/azul",
            },
            {
                colorName: "Preto/cinza esc",
            },
            {
                colorName: "Preto",
            },
            {
                colorName: "Branco/rosa claro",
            },
            {
                colorName: "Branco/vermelho",
            },
            {
                colorName: "Branco/preto",
            },
            {
                colorName: "Branco",
            },
            {
                colorName: "Branco/prata",
            },
            {
                colorName: "Cinza/preto",
            },
            {
                colorName: "Azul esc/branco",
            },
            {
                colorName: "Azul/branco",
            },
            {
                colorName: "Bege",
            },
            {
                colorName: "Cinza/rosa",
            },
            {
                colorName: "Cinza",
            },
            {
                colorName: "Azul esc/verde",
            },
            {
                colorName: "Marrom esc/branco",
            },
            {
                colorName: "Verde/branco",
            },
            {
                colorName: "Cinza claro",
            },
            {
                colorName: "Branco/cinza claro",
            },
            {
                colorName: "Branco/cinza",
            },
            {
                colorName: "Branco/azul claro",
            },
            {
                colorName: "Amarelo claro",
            },
            {
                colorName: "Laranja",
            },
            {
                colorName: "Verde",
            },
            {
                colorName: "Rosa escuro",
            },
            {
                colorName: "Vermelho",
            },
            {
                colorName: "Rosa",
            },
            {
                colorName: "Rosa/ preto",
            },
            {
                colorName: "Azul/ vermelho",
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("ProductsColor", {});
    },
};
//# sourceMappingURL=Color.seeders.js.map