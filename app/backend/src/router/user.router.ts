import { Router } from "express";
import {
  Login,
  registreUsers,
  updateUserController,
  tokenValidate,
  getUser,
} from "../controllers/users.controller";
import { erroLogin, erroCreateUser } from '../middleware/erroLogin,middleware';

const LoginRouter = Router();

LoginRouter.get("/login", getUser);
LoginRouter.post("/login", erroLogin, Login);
LoginRouter.put("/login", updateUserController);
LoginRouter.get('/verifyToken', tokenValidate)
LoginRouter.post("/register", erroCreateUser, registreUsers);

export default LoginRouter;
