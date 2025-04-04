import produtctMock from "../../mocks/products.mock";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../app";

chai.use(chaiHttp);

describe("Produts Integration", function () {
  describe("Get /product", function () {
    beforeEach(function () {
      sinon.restore();
    });

    it("retorna todos os produtos", async function () {
      const produtcts = produtctMock.productExisting;

      const httpResponse = await chai.request(app).get("/product");

      httpResponse.body.forEach((product: any) => {
        expect(product).to.have.property("id");
        expect(product).to.have.property("productName");
        expect(product).to.have.property("price");
        expect(product).to.have.property("images");
      });
      expect(httpResponse.body[0]).to.deep.equal(produtcts);
    });
  });

  describe("Get /product/id", function () {
    beforeEach(function () {
      sinon.restore();
    });

    it("ao passar id invalido retorna error", async function () {
      const httpResponse = await chai.request(app).get("/product/444");
      
        expect(httpResponse.status).to.equal(404);
        expect(httpResponse.body).to.be.deep.equal({
          message: "Produto não encontrado",
        });
    });
    
    it("ao passar id valido, retorna produto", async function () {
      const produtcts = produtctMock.productExisting;

      const httpResponse = await chai.request(app).get("/product/1");

      expect(httpResponse.body).to.deep.equal(produtcts);
    });
  });
});
