import { Router } from "express";
import { CreateDebtController } from "../controllers/debt/create-debt-controller";

const debtRoutes = Router();

const createDebtController = new CreateDebtController();
debtRoutes.post("/:user_id", createDebtController.execute);

export default debtRoutes;
