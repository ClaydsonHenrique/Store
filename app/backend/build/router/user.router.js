"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const erroLogin_middleware_1 = require("../middleware/erroLogin,middleware");
const LoginRouter = (0, express_1.Router)();
LoginRouter.post("/login", erroLogin_middleware_1.erroLogin, users_controller_1.Login);
LoginRouter.put("/login", users_controller_1.updateUserController);
LoginRouter.get("/login", users_controller_1.getUserLoginController);
LoginRouter.get('/verifyToken', users_controller_1.tokenValidate);
LoginRouter.post("/register", erroLogin_middleware_1.erroCreateUser, users_controller_1.registreUsers);
exports.default = LoginRouter;
//# sourceMappingURL=user.router.js.map