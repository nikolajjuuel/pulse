import { Request, Response } from "express";

export const getDefaults = (req: Request, res: Response) => {
  res.json({ message: "Listening on port" });
};
