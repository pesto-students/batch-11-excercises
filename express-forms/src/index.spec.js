const request = require("supertest");
const app = require("./index");

describe("Get Endpoints", () => {
  it("should send success status", async () => {
    const res = await request(app).get("/form-with-get");
    expect(res.statusCode).toEqual(200);
  });

  it("should send success status", async () => {
    const res = await request(app).get("/form-with-post");
    expect(res.statusCode).toEqual(200);
  });
});
