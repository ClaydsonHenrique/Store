import * as bcrypt from "bcryptjs";
import Users from "../database/models/User.models";
import { Ilogin, createUser, updateUser } from "../Interfaces/IUsers";
import { verifyToken, sign } from "../utils/token.utils";
import { uptime } from 'process';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

const login = async (user: Ilogin) => {
  const { email, password } = user;

  if (!email || !password) {
    return {
      status: 401,
      data: { message: "Email and Password are required" },
    };
  }

  const verifyLogin = await Users.findOne({ where: { email } });

  if (!verifyLogin || !verifyLogin.dataValues) {
    return { status: 401, data: { message: "Invalid email or password" } };
  }

  const verifyPassword = await bcrypt.compare(password, verifyLogin.password);

  if (!verifyPassword) {
    return { status: 401, data: { message: "Invalid email or password" } };
  }

  const { role, id } = verifyLogin;

  const token = sign({ id, email, role });
  return { status: 200, data: { token } };
};

const registerUser = async (userData: createUser) => {
  const { name, lastname, email, password, tumrbl, endereco, cep, telefone } =
    userData;

  const username = `${name} ${lastname}`;
  const bcryptPassword = bcrypt.hashSync(password, SALT_ROUNDS);
  const newUser = await Users.create({
    username,
    email,
    tumrbl: tumrbl || "",
    password: bcryptPassword,
    role: "USER",
    endereco,
    cep,
    telefone,
  });

  if (!newUser) {
    return { status: 401, data: { message: "fail create user" } };
  }

  return { status: 201, data: "user created successfully"  };
};

const userUpdate = async (userData: updateUser, token: string) => {
  let { ...dataUpdate } = userData;
  const tokenPayload = verifyToken(token);

  if (!tokenPayload) {
    return { status: 401, data: { message: "Invalid token" } };
  }

  const { id } = tokenPayload;
  const user = await Users.findOne({ where: { id } });

  if (!user) {
    return { status: 401, data: { message: "User nof found" } };
  }

  if (dataUpdate.password) {
    dataUpdate.password = bcrypt.hashSync(dataUpdate.password, SALT_ROUNDS);
  }
  const upUser = await Users.update(dataUpdate, { where: { id } });
  return { status: 201, data: upUser };
};


export default {
  login,
  registerUser,
  userUpdate,
};
