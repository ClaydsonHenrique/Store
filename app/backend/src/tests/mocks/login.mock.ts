const emailFail = { email: "", password: "secret_admin" };

const emailError = { email: "claydssdfon@email.com", password: "secret_admin" };

const passwordFail = { email: "claydson@email.com", password: "" };

const passwordError = {
  email: "claydson@email.com",
  password: "secret_fdfadmin",
};

const userLogin = { email: "claydson@email.com", password: "secret_admin" };

const existingUser = {
  username: "claydson silva",
  email: "claydson@email.com",
  tumrbl: "",
  role: "adim",
  password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
  endereco: "",
  cep: "",
  telefone: "",
};

export default {
  emailFail,
  emailError,
  passwordFail,
  passwordError,
  userLogin,
  existingUser,
};
