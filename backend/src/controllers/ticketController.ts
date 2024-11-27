import { Request, Response } from "express";

export const getTickets = (req: Request, res: Response) => {
  res.json({ message: "getting Tickets" });
};

export const createTicket = (req: Request, res: Response) => {
  res.json({ message: "created a Tickets" });
};
