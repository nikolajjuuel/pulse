import { Router } from "express";
import userRoutes from "./userRoutes";
import defaultRoutes from "./defaultRoutes";
import ticketRoutes from "./ticketRoutes";

const router = Router();

router.use("/", defaultRoutes);
router.use("/users", userRoutes);
router.use("/tickets", ticketRoutes);

export default router;
