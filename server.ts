import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { fizzBuzz, IInput } from "./services";

dotenv.config();

const app: Express = express();

app.get("/:input", (req: Request<IInput>, res: Response) => {
  fizzBuzz(req, res);
});

export default app;
