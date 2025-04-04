import userService from "../services/user.service";
import { Request, Response } from "express";

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const { status, data } = await userService.login({ email, password });
  res.status(status).json(data);
};

const registerUser = async (req: Request, res: Response) => {
  const { name, lastname, email, password, tumrbl, endereco, cep, telefone } =
    req.body;

  if (!name || !lastname || !email || password) {
    return res.status(400).json({ message: "required fields" });
  }

  const newUser = await userService.registerUser({
    name,
    lastname,
    email,
    password,
    tumrbl,
    endereco,
    cep,
    telefone,
  });

  return res.status(newUser.status).json(newUser.data);
};

const updateUser = async (req: Request, res: Response) => {
  const authorizantionHeader = req.get("Authorizantion");
  const dataUser = req.body;

  if (!authorizantionHeader) {
    return res.status(400).json({ message: "Token is required" });
  }

  const token = authorizantionHeader.split(" ")[1];
  const upUser = await userService.userUpdate(dataUser, token);

  res.status(upUser.status).json(upUser.data);
};


export  {
  login,
  registerUser,
  updateUser
}