import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'vingador mais forte';

type TokenPayload = {
  id: number;
  username: string;
  role: string;
};

// criando token
function sign(payload: TokenPayload): string | null {
  try {
    const token = jwt.sign(payload, secret, {expiresIn:'3h'});
    return token;
  } catch (erro) {
    console.log('Erro na geracao do token', erro);
    return null;
  }
}

// validando token
function verifyToken(token: string): TokenPayload | void {
  try {
    const tokenVerify = jwt.verify(token, secret) as TokenPayload;
    return tokenVerify;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      console.log("expired token");
    } else if (err instanceof Error) {
      console.log("invalid token:", err.message);
    } else {
      console.log("unknown error");
    }
  }
}


export { sign, verifyToken };
