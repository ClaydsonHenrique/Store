import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { Request, Response } from "express";
import productService from "../../../services/Products.services";
import { ProductById , AllProducts} from "../../../controllers/Prodcuts.controller";
import { ServiceResponse } from "../../../types/ServiceResponse";
import productsMock from '../../mocks/products.mock';

chai.use(sinonChai);

describe("Product Controller", function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe("#AllProducts", function () {
    it("verifica se retorna todos produtos", async function () {
      const serviceResponse = {
        status:200,
        data:[productsMock.productExisting]
      }
      sinon.stub(productService, "getAllProducts").resolves(serviceResponse)
      
      await AllProducts(req, res)
      
      expect(res.status).to.have.been.calledWith(200);
       expect(res.json).to.have.been.calledWith([productsMock.productExisting]); 
      
    });
  });
  describe("#ProductById", function () {});
});
