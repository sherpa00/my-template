import app from "../..";
import request from "supertest";

// integration test for root api
describe("Api health check testing", () => {
  it("Should return health check info for successfull request", async () => {
    const result = await request(app).get("/api/healthCheck");

    expect(result.statusCode).toBe(200);
    expect(result.body).toBeDefined();
    expect(result.body.uptime).toBeDefined();
  });
});
