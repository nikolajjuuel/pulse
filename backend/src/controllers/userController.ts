import { Request, Response } from "express";
import { db } from "../db/db";
import { usersTable } from "../db/schema";

export const getUsers = async (req: Request, res: Response) => {
  const users = await db.select().from(usersTable);
  try {
    res.json({ message: "List of users", body: users });
  } catch (error) {
    res.json({ message: "Error getting users", body: error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const users = await db.insert(usersTable).values(req.body).returning();
  res.status(201).json({ message: "User created successfully", body: users });
};
