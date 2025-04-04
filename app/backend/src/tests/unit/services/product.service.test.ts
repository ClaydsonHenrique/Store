import { expect } from "chai";
import sinon from "sinon";
import productMock from "../../mocks/products.mock";
import productService from "../../../services/Products.services";

describe("ProdudctService", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("#getAllProducts", function () {
    it("verificando se retorna todos os produtos", async function () {
      const serviceResponse = await productService.getAllProducts();
      expect(serviceResponse.status).to.eq(200);
      serviceResponse.data.forEach((product: any) => {
        expect(product).to.have.property("id");
        expect(product).to.have.property("productName");
        expect(product).to.have.property("price");
        expect(product).to.have.property("images");
      });
    });
  });
  describe("#ProductByIdServices", function () {
    
    it("ao não passar id retorna o error", async function () {
      const serviceResponse = await productService.ProductByIdServices();
      expect(serviceResponse.status).to.eq(400);
      expect(serviceResponse.data).to.be.deep.equal({
        message: "Id is required",
      });
    });
    
    it("ao passar id invalido retorna o error", async function () {
      const serviceResponse = await productService.ProductByIdServices(11000);
      expect(serviceResponse.status).to.eq(404);
      expect(serviceResponse.data).to.be.deep.equal({
        message: "Produto não encontrado",
      });
    });
    
    it("ao passar id valido retorna o produto", async function () {
      const serviceResponse = await productService.ProductByIdServices(1);
      expect(serviceResponse.status).to.eq(200);
      expect(serviceResponse.data).to.be.deep.equal(productMock.productExisting)
    });
  });
});
