"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroCreateUser = exports.erroLogin = void 0;
const User_models_1 = __importDefault(require("../database/models/User.models"));
const erroLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({ message: "Email and Password are required" });
    }
    next();
};
exports.erroLogin = erroLogin;
const erroCreateUser = async (req, res, next) => {
    const { email, name, lastname, password } = req.body;
    if (!email || !name || !lastname || !password) {
        return res.status(400).json({ message: "All fields are necessary." });
    }
    const username = `${name} ${lastname}`;
    const userEmail = await User_models_1.default.findOne({ where: { email } });
    const usernames = await User_models_1.default.findOne({ where: { username } });
    if (usernames || userEmail) {
        return res.status(409).json({ message: "This User already exists." });
    }
    next();
};
exports.erroCreateUser = erroCreateUser;
//# sourceMappingURL=erroLogin,middleware.js.map