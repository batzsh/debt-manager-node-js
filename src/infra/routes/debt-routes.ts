import { Router } from "express";
import { CreateDebtController } from "../controllers/debt/create-debt-controller";
import { FindAllDebtsByUserIdController } from "../controllers/debt/find-all-debts-by-user-id-controller";

const debtRoutes = Router();

const createDebtController = new CreateDebtController();
debtRoutes.post("/:user_id", createDebtController.execute);

const findAllDebtsByUserIdController = new FindAllDebtsByUserIdController();
debtRoutes.get("/:user_id", findAllDebtsByUserIdController.execute);

export default debtRoutes;
