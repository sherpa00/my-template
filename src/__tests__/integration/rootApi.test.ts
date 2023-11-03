import app from "../..";
import request from "supertest";

// integration test for root api
describe("ROOT API INTEGRATION TEST", () => {
  it("Should return successfull response for root api", async () => {
    const result = await request(app).get("/");

    expect(result.statusCode).toBe(200);
    expect(result.body).toBeDefined();
    expect(result.body.success).toBeTruthy();
  });
});
