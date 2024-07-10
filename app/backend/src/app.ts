import  express from "express";
import "express-async-errors";
import errorMiddleware from "./middleware/errorMiddleware";

import dotenv from "dotenv";
import LoginRouter from './router/user.router';
import ProductsRouter from './router/product.router';
import CarrinhoRouter from './router/carrinho.router';

dotenv.config();

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get("/", (req, res) => res.json({ ok: true }));

    // Login
    this.app.use(LoginRouter)

    //  Produtos
    this.app.use(ProductsRouter)
    
    // Carrinho
    this.app.use(CarrinhoRouter)
    
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