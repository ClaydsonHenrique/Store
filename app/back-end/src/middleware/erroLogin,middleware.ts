import { NextFunction, Request, Response } from "express";
import Users from "../database/models/User.models";

const erroLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: "Email and Password are required" });
  }
  next();
};

const erroCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, lastname, password } = req.body;
  
  if (!email || !name || !lastname || !password) {
    return res.status(400).json({message: "fields are necessary."});
  }
  
  const username = `${name} ${lastname}`;
  const userEmail = await Users.findOne({ where: { email } });
  const usernames = await Users.findOne({ where: { username } });
  if (usernames || userEmail) {
    return res.status(409).json({ message: "This User already exists." });
  }
  next();
};

export { erroLogin, erroCreateUser };
