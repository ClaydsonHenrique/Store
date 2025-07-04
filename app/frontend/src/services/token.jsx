import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'vingador mais forte';

export function verifyToken(token) {
  try {
    const tokenVerify = jwt.verify(token, secret)
    return tokenVerify;
  } catch (err) {
    return null;
  }
}