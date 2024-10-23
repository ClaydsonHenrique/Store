import { updateUser, validateToken } from "./../services/users.services";
import { Request, Response } from "express";
import {
  login,
  // getRole,
  registerUser,
  getallUser,
  getUserLogin,
} from "../services/users.services";

const Login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const userlogin = { email, password };
  const { status, data } = await login(userlogin);
  res.status(status).json(data);
};


// controller
const registreUsers = async (req: Request, res: Response) => {
  const { name, lastname, email, password, tumrbl, endereco, cep, telefone } =
    req.body;

  // Validação de dados
  if (!name || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ message: "Por favor, forneça todos os campos necessários." });
  }

  // Criação de novo usuário
  const newUser = await registerUser({
    name,
    lastname,
    email,
    password,
    tumrbl,
    endereco,
    cep,
    telefone,
  });

  // Retorno de sucesso
  return res.status(201).json(newUser);
};

const updateUserController = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  const dataUser = req.body;
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorizationHeader.split(" ")[1];
  const serviceupdate = await updateUser(dataUser, token);
  return res.status(200).json(serviceupdate);
};

const getUser = async (req: Request, res: Response) => {
  const user = await getallUser();
  return res.status(200).send(user);
};

const getUserLoginController = async (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorizationHeader.split(" ")[1];
  const { status, data } = await getUserLogin(token);
  return res.status(status).json(data);
};

const tokenValidate = (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) return res.status(401).json({ message: "Token not found" });
  const isTokenValid = validateToken(authorizationHeader)
  return res.status(200).json(isTokenValid)
};

export {
  Login,
  registreUsers,
  getUser,
  updateUserController,
  getUserLoginController,
  tokenValidate,
};
