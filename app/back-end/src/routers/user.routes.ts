import { Router } from "express";

import { login, registerUser, updateUser } from "../controller/user.controller";

const UserRouter = Router();

UserRouter.post("/login", login);
UserRouter.put("/login", updateUser);
UserRouter.post("/register", registerUser);

export default UserRouter