import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { App } from "../app";
import Users from "../database/models/User.models";

chai.use(chaiHttp);

describe("Verificando Usuarios", function () {
  let sandbox: any;

  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
    sandbox.restore();
  });

  //  Verificando Post Login
  describe("POST /Login", function () {
    this.beforeEach(function () {
      sinon.restore();
    });

    //  login valido

    it("verificando se é possivel fazer o login com email e senha validos", async () => {
      const email = "claydson@email.com";
      const password = "secret_admin";
      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .post("/login")
        .send({ email: email, password: password });

      expect(ServiceResponse.status).to.equal(200);
      expect(ServiceResponse.body).to.have.key("token");
    });

    // login invalido

    it("verificando se retorna erro ao passar password invalid", async () => {
      const email = "claydson@email.com";
      const password = "secret_admins";
      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .post("/login")
        .send({ email: email, password: password });

      expect(ServiceResponse.status).to.equal(401);
      expect(ServiceResponse.body).to.deep.equal({
        message: "Invalid email or password",
      });
    });
    it("verificando se retorna erro ao passar email invalid", async () => {
      const email = "claydson@email.coms";
      const password = "secret_admin";
      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .post("/login")
        .send({ email: email, password: password });

      expect(ServiceResponse.status).to.equal(401);
      expect(ServiceResponse.body).to.deep.equal({
        message: "Invalid email or password",
      });
    });
    it("verificando se retorna erro ao passar password vazio", async () => {
      const email = "claydson@email.com";
      const password = "";
      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .post("/login")
        .send({ email: email, password: password });

      expect(ServiceResponse.status).to.equal(401);
      expect(ServiceResponse.body).to.deep.equal({
        message: "Email and Password are required",
      });
    });
    it("verificando se retorna erro ao passar email vazio", async () => {
      const email = "";
      const password = "secret_admin";
      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .post("/login")
        .send({ email: email, password: password });

      expect(ServiceResponse.status).to.equal(401);
      expect(ServiceResponse.body).to.deep.equal({
        message: "Email and Password are required",
      });
    });
  });

  // verificando Put Login
  describe("PUT /login", () => {
    it("verificando se é possivel cadastrar com sucesso um usuario com os dados validos ", async () => {
      // Stub para a função de criação de usuário
      const createUserStub = sandbox.stub(Users, "create").resolves({ id: 1 });

      const name = "cafu";
      const lastname = "silva";
      const email = "cafu@email.com";
      const password = "secret_user";
      const tumrbl = "";

      const createUser = { name, lastname, email, password, tumrbl };

      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .put("/login")
        .send(createUser);

      expect(ServiceResponse.status).to.equal(201);
      sinon.assert.calledOnce(createUserStub);
    });

    it("Verificando se retorna erro ao passar algum atributo vazio", async () => {
      const name = "cafu";
      const lastname = "";
      const email = "cafu@email.com";
      const password = "secret_user";
      const tumrbl = "";

      const createUser = { name, lastname, email, password, tumrbl };

      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .put("/login")
        .send(createUser);

      expect(ServiceResponse.status).to.equal(400);
      expect(ServiceResponse.body).to.deep.equal({
        message: "All fields are necessary.",
      });
    });

    it("Verificando se retorna erro ao passar algum atributo repetido", async () => {
      const name = "cafu";
      const lastname = "silva";
      const email = "claydson@email.com";
      const password = "secret_user";
      const tumrbl = "";

      const createUser = { name, lastname, email, password, tumrbl };

      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai
        .request(app)
        .put("/login")
        .send(createUser);

      expect(ServiceResponse.status).to.equal(409);
      expect(ServiceResponse.body).to.deep.equal({
        message: "This User already exists.",
      });
    });
  });

  describe("GET /login", () => {
    it("verificando ser retorna todos os usuarios", async () => {
      const appInstance = new App();
      const app = appInstance.app;

      const ServiceResponse = await chai.request(app).get("/login");
      expect(ServiceResponse.status).to.be.eql(200);
      expect(Array.isArray(ServiceResponse.body)).to.be.true;
    });
  });
});
