import { Router } from "express";
import { getTicketComments } from "../controllers/commentsController";
import { createTicket } from "../controllers/ticketController";

const router = Router();

router.get("/:id", getTicketComments);
router.post("/", createTicket);

export default router;
