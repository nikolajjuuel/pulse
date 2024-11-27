import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "List of users" });
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  res.json({ message: `User ${name} created successfully!` });
};
