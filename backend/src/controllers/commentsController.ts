import { Request, Response } from "express";
import { db } from "../db/db";
import { commentsTable } from "../db/schema";
import { sql } from "drizzle-orm";

export const getTicketComments = async (req: Request, res: Response) => {
  const ticketId = 1;

  const comments = await db
    .select()
    .from(commentsTable)
    .where(sql`${commentsTable.ticket_id} = ${ticketId}`);

  res.json({ comments: comments });
};

export const createTicketComment = async (req: Request, res: Response) => {
  const ticket_id = 1;
  const user_id = 1;
  const comment = "This is a comment";
  await db.insert(commentsTable).values({
    ticket_id,
    user_id,
    comment,
  });
  res.json({ comments: "comment inserted successfully" });

  //  res.json({ tickets: "created a Tickets" });
};
