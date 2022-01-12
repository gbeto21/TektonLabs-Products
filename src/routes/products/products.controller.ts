import { Request, Response } from "express";

export async function httpGetProducts(req: Request, res: Response) {
  return res.status(200).json({ saludo: "hola" });
}
