import * as bcrypt from 'bcryptjs';
import UserModels from "../database/models/User.models";
import { Ilogin, createUser, updateUser} from "../Interfaces/IUsers";
import { verifyToken, sign } from "../utils/token.utils";


const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

const login = async (user:Ilogin) => {
  const {email, password } = user;
  const verifyLogin = await UserModels.findOne({ where: { email } });
  if (!verifyLogin || !verifyLogin.dataValues) {
    return { status: 401, data: { message: 'Invalid email or password' } };
  }
  const verfifyPassword = await bcrypt.compare(
    password,
    verifyLogin.password,
  );
  if (!verfifyPassword) {
    return { status: 401, data: { message: 'Invalid email or password' } };
  }
  const { role, id } = verifyLogin;
  const token = sign({ id, email, role });
  return { status: 200, data: { token } };
};


const registerUser = async (userData: createUser) => {
  const { name, lastname, email, password, tumrbl, endereco, cep, telefone } = userData;
  const username = `${name} ${lastname}`; 
  const bcryptPassword =  bcrypt.hashSync(password, SALT_ROUNDS)
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


const updateUser = async (userUpdate: updateUser, token:string) => {
  let { ...dataUpdate } = userUpdate
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
}

const getallUser = async () => {
  const user = await UserModels.findAll();
  return user;
}

export { login, registerUser, getallUser, updateUser };
