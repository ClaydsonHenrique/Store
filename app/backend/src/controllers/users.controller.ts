import loginService from "./../services/users.services";
import { Request, Response } from "express";

const getUser = async (req: Request, res: Response): Promise<void> => {
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
  const token = authorizationHeader.split(" ")[1];
  const getUserById = await loginService.getUserById(token);

  res.status(getUserById.status).json(getUserById.data);
};

const Login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const userlogin = { email, password };
  const { status, data } = await loginService.login(userlogin);
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
  const newUser = await loginService.registerUser({
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
  const serviceupdate = await loginService.updateUser(dataUser, token);
  return res.status(200).json(serviceupdate);
};

const tokenValidate = (req: Request, res: Response) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader)
    return res.status(401).json({ message: "Token not found" });
  const isTokenValid = loginService.validateToken(authorizationHeader);
  return res.status(200).json(isTokenValid);
};

export { Login, registreUsers, updateUserController, tokenValidate, getUser };
