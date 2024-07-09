"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.registreUsers = exports.Login = void 0;
const users_services_1 = require("../services/users.services");
const Login = async (req, res) => {
    const { email, password } = req.body;
    const userlogin = { email, password };
    const { status, data } = await (0, users_services_1.login)(userlogin);
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
    const { name, lastname, email, password, tumrbl } = req.body;
    // Validação de dados
    if (!name || !lastname || !email || !password) {
        return res
            .status(400)
            .json({ message: "Por favor, forneça todos os campos necessários." });
    }
    // Criação de novo usuário
    const newUser = await (0, users_services_1.registerUser)({
        name,
        lastname,
        email,
        password,
        tumrbl,
    });
    // Retorno de sucesso
    return res.status(201).json(newUser);
};
exports.registreUsers = registreUsers;
const getUser = async (req, res) => {
    const user = await (0, users_services_1.getallUser)();
    return res.status(200).send(user);
};
exports.getUser = getUser;
//# sourceMappingURL=users.controller.js.map