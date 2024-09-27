"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = exports.getUser = exports.registreUsers = exports.Login = void 0;
const users_services_1 = require("./../services/users.services");
const users_services_2 = require("../services/users.services");
const Login = async (req, res) => {
    const { email, password } = req.body;
    const userlogin = { email, password };
    const { status, data } = await (0, users_services_2.login)(userlogin);
    res.status(status).json(data);
};
exports.Login = Login;
// const role = (req:Request, res:Response) => {
//   const authorizationHeader = req.get('Authorization');
//   if (!authorizationHeader) {
//     return res.status(401).json({ message: 'Token not found' });
//   }
//   const token = authorizationHeader.split(' ')[1];
//   const Role = getRole(token);
//   return res.status(200).json({ role: Role });
// };
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
    const newUser = await (0, users_services_2.registerUser)({
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
    const authorizationHeader = req.get('Authorization');
    const dataUser = req.body;
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Token not found' });
    }
    const token = authorizationHeader.split(' ')[1];
    const serviceupdate = await (0, users_services_1.updateUser)(dataUser, token);
    return res.status(200).json(serviceupdate);
};
exports.updateUserController = updateUserController;
const getUser = async (req, res) => {
    const user = await (0, users_services_2.getallUser)();
    return res.status(200).send(user);
};
exports.getUser = getUser;
//# sourceMappingURL=users.controller.js.map