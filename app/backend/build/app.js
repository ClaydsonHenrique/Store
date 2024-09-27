"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_router_1 = __importDefault(require("./router/user.router"));
const product_router_1 = __importDefault(require("./router/product.router"));
const carrinho_router_1 = __importDefault(require("./router/carrinho.router"));
const orders_router_1 = __importDefault(require("./router/orders.router"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        // Não remover essa rota
        this.app.get("/", (req, res) => res.json({ ok: true }));
        // Login
        this.app.use(user_router_1.default);
        //  Produtos
        this.app.use(product_router_1.default);
        // Carrinho
        this.app.use(carrinho_router_1.default);
        // Pedidos
        this.app.use(orders_router_1.default);
        // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
        // Mantenha ele sempre como o último middleware a ser chamado
        this.app.use(errorMiddleware_1.default);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT,PATCH");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map