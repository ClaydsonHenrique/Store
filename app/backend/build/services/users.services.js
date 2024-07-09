"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getallUser = exports.registerUser = exports.login = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const User_models_1 = __importDefault(require("../database/models/User.models"));
const token_utils_1 = require("../utils/token.utils");
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;
const login = async (user) => {
    const { email, password } = user;
    const verifyLogin = await User_models_1.default.findOne({ where: { email } });
    if (!verifyLogin || !verifyLogin.dataValues) {
        return { status: 401, data: { message: 'Invalid email or password' } };
    }
    const verfifyPassword = await bcrypt.compare(password, verifyLogin.password);
    if (!verfifyPassword) {
        return { status: 401, data: { message: 'Invalid email or password' } };
    }
    const { role } = verifyLogin;
    const token = (0, token_utils_1.sign)({ email, role });
    return { status: 200, data: { token } };
};
exports.login = login;
const registerUser = async (userData) => {
    const { name, lastname, email, password, tumrbl } = userData;
    const username = `${name} ${lastname}`;
    const bcryptPassword = bcrypt.hashSync(password, SALT_ROUNDS);
    const newUser = await User_models_1.default.create({
        username,
        email,
        tumrbl,
        password: bcryptPassword,
        role: "USER",
    });
    return newUser;
};
exports.registerUser = registerUser;
const getallUser = async () => {
    const user = await User_models_1.default.findAll();
    return user;
};
exports.getallUser = getallUser;
//# sourceMappingURL=users.services.js.map