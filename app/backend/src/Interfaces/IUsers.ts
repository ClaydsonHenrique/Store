export interface Users {
  id: number;
  username: string;
  tumrbl?: string;
  role: string;
  email: string;
  password: string;
  endereco:string;
  cep:string;
  telefone:string;
}

export interface createUser {
  name: string;
  lastname: string;
  tumrbl: string;
  role?: string;
  email: string;
  password: string;
  endereco: string;
  cep: string;
  telefone: string;
}

export interface updateUser {
  name?: string;
  lastname?: string;
  tumrbl?: string;
  role?: string;
  email?: string;
  password?: string;
  endereco?: string;
  cep?: string;
  telefone?: string;
}

export interface Ilogin {
  email:string,
  password:string,
}
