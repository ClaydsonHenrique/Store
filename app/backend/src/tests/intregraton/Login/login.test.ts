import loginMock from "../../mocks/login.mock";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../app";
import Users from "../../../database/models/User.models";

chai.use(chaiHttp);

describe("POST /login", function () {
  beforeEach(function () {
    sinon.restore();
  });

  it("não receber email, retorna um error", async function () {
    const httpRequestBody = loginMock.emailFail;

    const httpResponse = await chai
      .request(app)
      .post("/login")
      .send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({
      message: "Email and Password are required",
    });
  });

  it("ao receber um e-mail inexistente, retorne um erro", async function () {
    const httpRequestBody = loginMock.emailError;
    const httpResponse = await chai
      .request(app)
      .post("/login")
      .send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({
      message: "Invalid email or password",
    });
  });

  it("ao não receber uma senha, retorne um erro", async function () {
    const httpRequestBody = loginMock.passwordFail;

    const httpResponse = await chai
      .request(app)
      .post("/login")
      .send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({
      message: "Email and Password are required",
    });
  });
  
    it("ao receber um e-mail existente e uma senha errada, retorne um erro", async function () {
      const httpRequestBody = loginMock.passwordError;
      const httpResponse = await chai
        .request(app)
        .post("/login")
        .send(httpRequestBody);

      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.be.deep.equal({
        message: "Invalid email or password",
      });
    });
  
  it("ao receber um email e uma senha valida , retoner um token de login", async function () {
    const httpRequestBody = loginMock.userLogin;
    const mockFindeOneReturn = Users.build(loginMock.existingUser);
    
    sinon.stub(Users, 'findOne').resolves(mockFindeOneReturn)
    
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key("token");
    
  })

});
