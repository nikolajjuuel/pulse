import { Router } from "express";
import {
  getUserTickets,
  createTicket,
  getTeamTickets,
  updateTicket,
} from "../controllers/ticketController";

const router = Router();

router.get("/user/:id", getUserTickets);
router.get("/team/:id", getTeamTickets);
router.post("/", updateTicket);

router.post("/", createTicket);

export default router;
