import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'vingador mais forte';

type TokenPayload = {
  id:number;
  email: string;
  role: string;
};

// criando token
function sign(payload: TokenPayload): string | null {
  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (erro) {
    console.log('Erro na geracao do token', erro);
    return null;
  }
}

// validando token
function verifyToken(token: string): TokenPayload | null {
  try {
    const tokenVerify = jwt.verify(token, secret) as TokenPayload;
    return tokenVerify;
  } catch (err) {
    return null;
  }
}



export { sign, verifyToken };
