import { app } from "../Parcial 3/index.js";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe("Test the main route", () => {
  it("Should return students with code 200", (done) => {
    chai
      .request(app)
      .get("/alumnos")
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          chai.expect(res).to.have.status(200);
          done();
        }
      });
  });
});
