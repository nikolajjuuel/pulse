import { NextFunction, Request, Response } from "express";
import { db } from "../db/db";
import { ticketsTable } from "../db/schema";
import { sql } from "drizzle-orm";

export const getUserTickets = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userIdNumber = parseInt(userId, 10);

  if (isNaN(userIdNumber)) {
    res.status(400).send("Invalid user ID. It must be a number.");
    return;
  }

  const userTickets = await db
    .select()
    .from(ticketsTable)
    .where(sql`${ticketsTable.user_id} = ${userIdNumber}`);

  res.json({ userTickets: userTickets });
};

export const getTeamTickets = async (req: Request, res: Response) => {
  const teamId = req.params.id;
  const teamIdNumber = parseInt(teamId, 10);

  if (isNaN(teamIdNumber)) {
    res.status(400).send("Invalid team ID. It must be a number.");
    return;
  }
  const teamTickets = await db
    .select()
    .from(ticketsTable)
    .where(sql`${ticketsTable.team_id} = ${teamIdNumber}`);
  console.log(teamTickets);

  res.json({ teamTickets: teamTickets });
};

export const updateTicket = async (req: Request, res: Response) => {
  const ticketId = 1;
  const title = "Title";
  const description = "Description";
  const status = "Status";
  await db
    .update(ticketsTable)
    .set({ title: title, summary: description, status: status })
    .where(sql`${ticketsTable} = ${ticketId}`);
  res.json({ tickets: "updated a Ticket" });
};

export const createTicket = (req: Request, res: Response) => {
  res.json({ tickets: "created a Tickets" });
};
