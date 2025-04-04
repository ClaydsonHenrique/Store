import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { Request, Response } from "express";
import loginSevice from "../../../services/users.services";
import { Login } from "../../../controllers/users.controller";
import loginMock from "../../mocks/login.mock";
import { ServiceResponse } from "../../../types/ServiceResponse";
import { Token } from "../../../types/Token";


chai.use(sinonChai);

describe("Login Controller", function () {
  const req = {} as Request;
  const res = {} as Response;
  const messageEmailOrPasswordEmpty = "Email and Password are required";
  const messageEmailOrPasswordInvalid = "Invalid email or password";

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe("#login", function () {
    it("ao não receber um e-mail, retorne um erro", async function () {
      req.body = loginMock.emailFail;

      const ServiceResponse: ServiceResponse<Token> = {
        status: 401,
        data: { message: messageEmailOrPasswordEmpty },
      };

      sinon.stub(loginSevice, "login").resolves(ServiceResponse);

      await Login(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({
        message: messageEmailOrPasswordEmpty,
      });
    });

    it("ao não receber uma senha, retorne um erro", async function () {
      req.body = loginMock.passwordFail;

      const ServiceResponse: ServiceResponse<Token> = {
        status: 401,
        data: { message: messageEmailOrPasswordEmpty },
      };

      sinon.stub(loginSevice, "login").resolves(ServiceResponse);

      await Login(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({
        message: messageEmailOrPasswordEmpty,
      });
    });

    it("ao receber um e-mail inexistente, retorne um erro", async function () {
      req.body = loginMock.emailError;

      const ServiceResponse: ServiceResponse<Token> = {
        status: 401,
        data: { message: messageEmailOrPasswordInvalid },
      };

      sinon.stub(loginSevice, "login").resolves(ServiceResponse);

      await Login(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({
        message: messageEmailOrPasswordInvalid,
      });
    });
    
     it("ao receber um e-mail existente e uma senha errada, retorne um erro", async function () {
       req.body = loginMock.passwordError;

       const ServiceResponse: ServiceResponse<Token> = {
         status: 401,
         data: { message: messageEmailOrPasswordInvalid },
       };

       sinon.stub(loginSevice, "login").resolves(ServiceResponse);

       await Login(req, res);

       expect(res.status).to.have.been.calledWith(401);
       expect(res.json).to.have.been.calledWith({
         message: messageEmailOrPasswordInvalid,
       });
     });

    it("ao receber um e-mail e uma senha valida, retorne um token de login", async function () {
      req.body = loginMock.userLogin;

      const token = { token: "token12345valido" };
      const serviceResponse: ServiceResponse<Token> = {
        status: 200,
        data: token,
      };

      sinon.stub(loginSevice, "login").resolves(serviceResponse);

      await Login(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(token);
    });
  });
});
