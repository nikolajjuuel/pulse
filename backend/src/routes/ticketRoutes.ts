import { Router } from "express";
import { getTickets, createTicket } from "../controllers/ticketController";

const router = Router();

router.get("/", getTickets);
router.post("/", createTicket);

export default router;
