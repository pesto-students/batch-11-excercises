const request = require("supertest");
const app = require("./index");

describe("Get Endpoints", () => {
  it("should fetch the data from get request", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });

  it("should return the message including the movie name passed in the url", async () => {
    const res = await request(app).get("/movie/godfather");
    expect(res.text).toEqual("My favorite movie is godfather");
  });
});
