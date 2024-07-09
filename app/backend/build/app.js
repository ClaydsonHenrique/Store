"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const users_controller_1 = require("./controllers/users.controller");
const erroLogin_middleware_1 = require("./middleware/erroLogin,middleware");
const Prodcuts_controller_1 = require("./controllers/Prodcuts.controller");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        // Não remover essa rota
        this.app.get("/", (req, res) => res.json({ ok: true }));
        // Login
        this.app.get("/login", users_controller_1.getUser);
        this.app.post("/login", erroLogin_middleware_1.erroLogin, users_controller_1.Login);
        this.app.put("/login", erroLogin_middleware_1.erroCreateUser, users_controller_1.registreUsers);
        //  Produtos
        this.app.get("/products", Prodcuts_controller_1.AllProducts);
        this.app.post("/products", Prodcuts_controller_1.createProduct);
        this.app.put("/products/:id", Prodcuts_controller_1.upProduct);
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