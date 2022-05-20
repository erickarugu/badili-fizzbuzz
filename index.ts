import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { fizzBuzz, IInput } from "./services";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/:input", (req: Request<IInput>, res: Response) => {
  fizzBuzz(req, res);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
