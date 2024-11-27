import { Router } from "express";
import { getDefaults } from "../controllers/defaultControllers";
const router = Router();

router.get("/", getDefaults);

export default router;
