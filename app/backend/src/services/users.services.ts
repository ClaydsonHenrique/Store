import * as bcrypt from "bcryptjs";
import UserModels from "../database/models/User.models";
import { Ilogin, createUser, updateUser } from "../Interfaces/IUsers";
import { verifyToken, sign } from "../utils/token.utils";


const getUserById = async (token: string) => {
  const user = verifyToken(token);
  if (!user) {
    return { status: 401, data: { message: "Invalid token" } };
  }
  const getuser = await UserModels.findByPk(user.id,{
    attributes: {exclude:['password']}
  });
  return { status: 200, data: getuser };
};

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

const login = async (user: Ilogin) => {
  const { email, password } = user;

  if (!email || !password) {
    return {
      status: 401,
      data: { message: "Email and Password are required" },
    };
  }

  const verifyLogin = await UserModels.findOne({ where: { email } });
  if (!verifyLogin || !verifyLogin.dataValues) {
    return { status: 401, data: { message: "Invalid email or password" } };
  }
  const verfifyPassword = await bcrypt.compare(password, verifyLogin.password);
  if (!verfifyPassword) {
    return { status: 401, data: { message: "Invalid email or password" } };
  }
  const { role, id, username } = verifyLogin;
  const token = sign({ id, role, username });
  return { status: 200, data: { token } };
};

const registerUser = async (userData: createUser) => {
  const { name, lastname, email, password, tumrbl, endereco, cep, telefone } =
    userData;
  const username = `${name} ${lastname}`;
  const bcryptPassword = bcrypt.hashSync(password, SALT_ROUNDS);
  const newUser = await UserModels.create({
    username,
    email,
    tumrbl: tumrbl || "",
    password: bcryptPassword,
    role: "USER",
    endereco,
    cep,
    telefone,
  });
  return newUser;
};

const updateUser = async (userUpdate: updateUser, token: string) => {
  let { ...dataUpdate } = userUpdate;
  const tokenPayload = verifyToken(token);

  if (!tokenPayload) {
    throw new Error("Invalid token");
  }
  const { id } = tokenPayload;
  const user = await UserModels.findOne({ where: { id } });

  if (!user) {
    throw new Error("User not found");
  }

  if (dataUpdate.password) {
    dataUpdate.password = bcrypt.hashSync(dataUpdate.password, SALT_ROUNDS);
  }
  const updateUser = await UserModels.update(dataUpdate, { where: { id } });
  return updateUser;
};

const validateToken = (token: string) => {
  if (token) false;
  const isToken = verifyToken(token);
  if (!isToken) false;
  return true;
};

export default {
  login,
  registerUser,
  updateUser,
  validateToken,
  getUserById,
};
