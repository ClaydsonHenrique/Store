import { Router } from "express";
import {
  Login,
  registreUsers,
  updateUserController,
  getUserLoginController,
  tokenValidate,
} from "../controllers/users.controller";
import { erroLogin, erroCreateUser } from '../middleware/erroLogin,middleware';

const LoginRouter = Router();

LoginRouter.post("/login", erroLogin, Login);
LoginRouter.post("/register", erroCreateUser, registreUsers);
LoginRouter.put("/login", updateUserController);
LoginRouter.get("/login", getUserLoginController);
LoginRouter.get('/verifyToken', tokenValidate)

export default LoginRouter;
