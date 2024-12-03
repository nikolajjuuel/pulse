import { Request, Response } from "express";
import { db } from "../db/db";
import { teamsTable } from "../db/schema";

export const getTeams = async (req: Request, res: Response) => {
  const userId = 4;
  const teams = await db.select().from(teamsTable);

  res.json({ teams: teams });
};

export const createTeam = async (req: Request, res: Response) => {
  const name = "Name";
  const description = "Description";
  try {
    await db
      .insert(teamsTable)
      .values({ name: name, description: description });
  } catch (e) {
    console.log(e);
  }
  res.json({ teams: "created a team" });
};
