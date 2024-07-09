"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, _req, res, _next) {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    console.log(error);
    return res.status(status).json({ message });
}
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map