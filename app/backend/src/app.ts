import  express from "express";
import "express-async-errors";
import errorMiddleware from "./middleware/errorMiddleware";

import { Login, registreUsers, getUser } from "./controllers/users.controller";
import { erroLogin, erroCreateUser } from "./middleware/erroLogin,middleware";

import { AllProducts, createProduct, upProduct } from "./controllers/Prodcuts.controller";

import dotenv from "dotenv";
dotenv.config();

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get("/", (req, res) => res.json({ ok: true }));

    // Login
    this.app.get("/login", getUser);
    this.app.post("/login",erroLogin, Login);
    this.app.put("/login",erroCreateUser, registreUsers);

    //  Produtos
    this.app.get("/products", AllProducts);
    this.app.post("/products", createProduct);
    this.app.put("/products/:id", upProduct)
    
    // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
    // Mantenha ele sempre como o último middleware a ser chamado
    this.app.use(errorMiddleware);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();