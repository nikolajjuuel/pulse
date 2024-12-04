import { Router } from "express";
import userRoutes from "./userRoutes";
import defaultRoutes from "./defaultRoutes";
import ticketRoutes from "./ticketRoutes";
import teamRoutes from "./teamRoutes";
import commentRoutes from "./commentRoutes";
const router = Router();

router.use("/", defaultRoutes);
router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/tickets", ticketRoutes);
router.use("/comments", commentRoutes);

export default router;
