import app from "../server";
import supertest from "supertest";
import { OutputOptions } from "../services";
import dotenv from "dotenv";
dotenv.config();

describe("FizzBuzz GET Endpoint", () => {
  it("should create return a not a number error", async () => {
    const res = await supertest(app).get("/str");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Input must be a number");
  });
  const arr = [
    -490, -455, -420, -385, -350, -315, -280, -245, -210, -175, -140, -105, -70,
    -35, 0, 35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420, 455, 490,
  ];
  arr.map(async (el) => {
    it("should return LR", async () => {
      const res = await supertest(app).get(`/${el}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("output");
      expect(res.body).toHaveProperty("status");
      expect(res.body.output).toEqual(OutputOptions.LR);
    });
  });

  const arrL = [
    -100, -95, -90, -85, -80, -75, -65, -60, -55, -50, -45, -40, -30, -25, -20,
    -15, -10, -5, 5, 10, 15, 20, 25, 30, 40, 45, 50, 55, 60, 65, 75, 80, 85, 90,
    95, 100,
  ];
  arrL.map(async (el) => {
    it("should return L", async () => {
      const res = await supertest(app).get(`/${el}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("output");
      expect(res.body).toHaveProperty("status");
      expect(res.body.output).toEqual(OutputOptions.L);
    });
  });

  const arrR = [
    -98, -91, -84, -77, -63, -56, -49, -42, -28, -21, -14, -7, 7, 14, 21, 28,
    42, 49, 56, 63, 77, 84, 91, 98,
  ];
  arrR.map(async (el) => {
    it("should return R", async () => {
      const res = await supertest(app).get(`/${el}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("output");
      expect(res.body).toHaveProperty("status");
      expect(res.body.output).toEqual(OutputOptions.R);
    });
  });

  const arrNon = [
    -48, -47, -46, -44, -43, -41, -39, -38, -37, -36, -34, -33, -32, -31, -29,
    -27, -26, -24, -23, -22, -19, -18, -17, -16, -13, -12, -11, -9, -8, -6, -4,
    -3, -2, -1, 1, 2, 3, 4, 6, 8, 9, 11, 12, 13, 16, 17, 18, 19, 22, 23, 24, 26,
    27, 29, 31, 32, 33, 34, 36, 37, 38, 39, 41, 43, 44, 46, 47, 48,
  ];
  arrNon.map(async (el) => {
    it("should return input", async () => {
      const res = await supertest(app).get(`/${el}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("output");
      expect(res.body).toHaveProperty("status");
      expect(res.body.output).toEqual(el);
    });
  });
});
