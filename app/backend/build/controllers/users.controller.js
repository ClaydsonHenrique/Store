"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidate = exports.getUserLoginController = exports.updateUserController = exports.getUser = exports.registreUsers = exports.Login = void 0;
const users_services_1 = __importDefault(require("./../services/users.services"));
const Login = async (req, res) => {
    const { email, password } = req.body;
    const userlogin = { email, password };
    const { status, data } = await users_services_1.default.login(userlogin);
    res.status(status).json(data);
};
exports.Login = Login;
// controller
const registreUsers = async (req, res) => {
    const { name, lastname, email, password, tumrbl, endereco, cep, telefone } = req.body;
    // Validação de dados
    if (!name || !lastname || !email || !password) {
        return res
            .status(400)
            .json({ message: "Por favor, forneça todos os campos necessários." });
    }
    // Criação de novo usuário
    const newUser = await users_services_1.default.registerUser({
        name,
        lastname,
        email,
        password,
        tumrbl,
        endereco,
        cep,
        telefone,
    });
    // Retorno de sucesso
    return res.status(201).json(newUser);
};
exports.registreUsers = registreUsers;
const updateUserController = async (req, res) => {
    const authorizationHeader = req.get("Authorization");
    const dataUser = req.body;
    if (!authorizationHeader) {
        return res.status(401).json({ message: "Token not found" });
    }
    const token = authorizationHeader.split(" ")[1];
    const serviceupdate = await users_services_1.default.updateUser(dataUser, token);
    return res.status(200).json(serviceupdate);
};
exports.updateUserController = updateUserController;
const getUserLoginController = async (req, res) => {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
        return res.status(401).json({ message: "Token not found" });
    }
    const token = authorizationHeader.split(" ")[1];
    const { status, data } = await users_services_1.default.getUserLogin(token);
    return res.status(status).json(data);
};
exports.getUserLoginController = getUserLoginController;
const tokenValidate = (req, res) => {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader)
        return res.status(401).json({ message: "Token not found" });
    const isTokenValid = users_services_1.default.validateToken(authorizationHeader);
    return res.status(200).json(isTokenValid);
};
exports.tokenValidate = tokenValidate;
//# sourceMappingURL=users.controller.js.map