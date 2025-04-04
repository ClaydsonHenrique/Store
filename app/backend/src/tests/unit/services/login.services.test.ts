import { expect } from "chai";
import sinon from "sinon";
import UserModel from "../../../database/models/User.models";
import loginMock from "../../mocks/login.mock";
import loginService from "../../../services/users.services";

describe("LoginService", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("#login", function () {
    it("ao não receber um e-mail, retorne um erro", async function () {
      const parameters = loginMock.emailFail;

      const serviceResponse = await loginService.login(parameters);

      expect(serviceResponse.status).to.eq(401);
      expect(serviceResponse.data).not.to.have.key("token");
      expect(serviceResponse.data).to.deep.eq({
        message: "Email and Password are required",
      });
    });

    it("ao não receber uma senha, retorne um erro", async function () {
      const parameters = loginMock.passwordFail;

      const serviceResponse = await loginService.login(parameters);

      expect(serviceResponse.status).to.eq(401);
      expect(serviceResponse.data).not.to.have.key("token");
      expect(serviceResponse.data).to.deep.eq({
        message: "Email and Password are required",
      });
    });

    it("ao receber um e-mail inexistente, retorne um erro", async function () {
      const parameters = loginMock.emailError;

      const serviceResponse = await loginService.login(parameters);

      expect(serviceResponse.status).to.eq(401);
      expect(serviceResponse.data).not.to.have.key("token");
      expect(serviceResponse.data).to.deep.eq({
        message: "Invalid email or password",
      });
    });

    it("ao receber uma senha inexistente, retorne um erro", async function () {
      const parameters = loginMock.passwordError;

      const serviceResponse = await loginService.login(parameters);

      expect(serviceResponse.status).to.eq(401);
      expect(serviceResponse.data).not.to.have.key("token");
      expect(serviceResponse.data).to.deep.eq({
        message: "Invalid email or password",
      });
    });

    it("ao receber um e-mail e uma senha válida, retorne um token de login", async function () {
      const parameters = loginMock.userLogin;
      const mockFindOneReturn = UserModel.build(loginMock.existingUser);
      sinon.stub(UserModel, "findOne").resolves(mockFindOneReturn);

      const serviceResponse = await loginService.login(parameters);

      expect(serviceResponse.status).to.eq(200);
      expect(serviceResponse.data).to.have.key("token");
    });
  });
});
