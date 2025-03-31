import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/token.utils';
const validateToken = (req:Request, res:Response, next:NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) {
   return res.status(401).json({message:'Token not found'}) 
  }
  const tokenSplit = token.split('')[1];
  const tokenVerify = verifyToken(tokenSplit)
  if (!tokenVerify) {
    return res.status(401).json({message:'Token must be a valid token'})
  }
  next();
}

export {validateToken}