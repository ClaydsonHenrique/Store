"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const token_utils_1 = require("../utils/token.utils");
const validateToken = (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    const tokenSplit = token.split('')[1];
    const tokenVerify = (0, token_utils_1.verifyToken)(tokenSplit);
    if (!tokenVerify) {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
};
exports.validateToken = validateToken;
//# sourceMappingURL=validateToken.middleware.js.map