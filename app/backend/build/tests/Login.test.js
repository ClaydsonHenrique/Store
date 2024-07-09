"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const chai_1 = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = require("../app");
const User_models_1 = __importDefault(require("../database/models/User.models"));
chai_1.default.use(chai_http_1.default);
describe("Verificando Usuarios", function () {
    let sandbox;
    beforeEach(function () {
        sandbox = sinon_1.default.createSandbox();
    });
    afterEach(function () {
        sandbox.restore();
    });
    //  Verificando Post Login
    describe("POST /Login", function () {
        this.beforeEach(function () {
            sinon_1.default.restore();
        });
        //  login valido
        it("verificando se é possivel fazer o login com email e senha validos", async () => {
            const email = "claydson@email.com";
            const password = "secret_admin";
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .post("/login")
                .send({ email: email, password: password });
            (0, chai_1.expect)(ServiceResponse.status).to.equal(200);
            (0, chai_1.expect)(ServiceResponse.body).to.have.key("token");
        });
        // login invalido
        it("verificando se retorna erro ao passar password invalid", async () => {
            const email = "claydson@email.com";
            const password = "secret_admins";
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .post("/login")
                .send({ email: email, password: password });
            (0, chai_1.expect)(ServiceResponse.status).to.equal(401);
            (0, chai_1.expect)(ServiceResponse.body).to.deep.equal({
                message: "Invalid email or password",
            });
        });
        it("verificando se retorna erro ao passar email invalid", async () => {
            const email = "claydson@email.coms";
            const password = "secret_admin";
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .post("/login")
                .send({ email: email, password: password });
            (0, chai_1.expect)(ServiceResponse.status).to.equal(401);
            (0, chai_1.expect)(ServiceResponse.body).to.deep.equal({
                message: "Invalid email or password",
            });
        });
        it("verificando se retorna erro ao passar password vazio", async () => {
            const email = "claydson@email.com";
            const password = "";
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .post("/login")
                .send({ email: email, password: password });
            (0, chai_1.expect)(ServiceResponse.status).to.equal(401);
            (0, chai_1.expect)(ServiceResponse.body).to.deep.equal({
                message: "Email and Password are required",
            });
        });
        it("verificando se retorna erro ao passar email vazio", async () => {
            const email = "";
            const password = "secret_admin";
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .post("/login")
                .send({ email: email, password: password });
            (0, chai_1.expect)(ServiceResponse.status).to.equal(401);
            (0, chai_1.expect)(ServiceResponse.body).to.deep.equal({
                message: "Email and Password are required",
            });
        });
    });
    // verificando Put Login
    describe("PUT /login", () => {
        it("verificando se é possivel cadastrar com sucesso um usuario com os dados validos ", async () => {
            // Stub para a função de criação de usuário
            const createUserStub = sandbox.stub(User_models_1.default, "create").resolves({ id: 1 });
            const name = "cafu";
            const lastname = "silva";
            const email = "cafu@email.com";
            const password = "secret_user";
            const tumrbl = "";
            const createUser = { name, lastname, email, password, tumrbl };
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .put("/login")
                .send(createUser);
            (0, chai_1.expect)(ServiceResponse.status).to.equal(201);
            sinon_1.default.assert.calledOnce(createUserStub);
        });
        it("Verificando se retorna erro ao passar algum atributo vazio", async () => {
            const name = "cafu";
            const lastname = "";
            const email = "cafu@email.com";
            const password = "secret_user";
            const tumrbl = "";
            const createUser = { name, lastname, email, password, tumrbl };
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .put("/login")
                .send(createUser);
            (0, chai_1.expect)(ServiceResponse.status).to.equal(400);
            (0, chai_1.expect)(ServiceResponse.body).to.deep.equal({
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
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default
                .request(app)
                .put("/login")
                .send(createUser);
            (0, chai_1.expect)(ServiceResponse.status).to.equal(409);
            (0, chai_1.expect)(ServiceResponse.body).to.deep.equal({
                message: "This User already exists.",
            });
        });
    });
    describe("GET /login", () => {
        it("verificando ser retorna todos os usuarios", async () => {
            const appInstance = new app_1.App();
            const app = appInstance.app;
            const ServiceResponse = await chai_1.default.request(app).get("/login");
            (0, chai_1.expect)(ServiceResponse.status).to.be.eql(200);
            (0, chai_1.expect)(Array.isArray(ServiceResponse.body)).to.be.true;
        });
    });
});
//# sourceMappingURL=Login.test.js.map