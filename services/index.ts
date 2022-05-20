import { Express, Request, Response } from "express";

export interface IInput {
  input: number;
}
enum OutputOptions {
  L = "L",
  R = "R",
  LR = "LR",
}

/**
 * @description Here we first grab the input value from the request parameters
 * then we proceed to try and covert the value to a Number
 * if not successful we retun a Not Accepted 400 error
 * otherwise we proceed to check if the number is either divisible by both 7&5, only 7 or only 5 in that order
 * if either of the three cases match we return the appropriate enum
 * else we return the number itself
 * @param { req } Request
 * @param { res } Response
 * @return { Response<any, Record<string, any>> } output
 */

export const fizzBuzz = (req: Request<IInput>, res: Response) => {
  const params = req.params;
  const input = Number(params.input);
  let output: string | number;

  if (isNaN(input)) {
    return res
      .status(400)
      .json({ status: 400, message: "Input must be a number" });
  }
  if (input % 7 === 0 && input % 5 === 0) {
    output = OutputOptions.LR;
  } else if (input % 7 === 0) {
    output = OutputOptions.R;
  } else if (input % 5 === 0) {
    output = OutputOptions.L;
  } else {
    output = input;
  }
  return res.status(200).json({ status: 200, output });
};
