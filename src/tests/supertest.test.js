import { expect } from "chai";
import request from "supertest";
const url = "localhost:8080";

describe("Test the main route", () => {
  it("Should return students with code 200", () => {
    request(url)
      .get("/alumnos")
      .end(function (err, res) {
        expect(res.statusCode).to.equal(200);
      });
  });
});
