import { Router } from "express";

import { login, registerUser, updateUser } from "../controller/user.controller";
import {erroLogin, erroCreateUser} from '../middleware/erroLogin,middleware'

const UserRouter = Router();

UserRouter.post("/login",erroLogin, login);
UserRouter.put("/login", updateUser);
UserRouter.post("/register", erroCreateUser, registerUser);

export default UserRouter