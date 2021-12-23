import { Router } from "express";
import { CreateDebtController } from "../controllers/debt/create-debt-controller";
import { FindAllDebtsByUserIdController } from "../controllers/debt/find-all-debts-by-user-id-controller";
import { FindOneDebtByUserIdController } from "../controllers/debt/find-one-debt-by-user-id-controller";
import { UpdateDebtController } from "../controllers/debt/update-debt-controller";

const debtRoutes = Router();

const createDebtController = new CreateDebtController();
debtRoutes.post("/:user_id", createDebtController.execute);

const findAllDebtsByUserIdController = new FindAllDebtsByUserIdController();
debtRoutes.get("/:user_id", findAllDebtsByUserIdController.execute);

const findOneDebtByUserIdController = new FindOneDebtByUserIdController();
debtRoutes.get("/:user_id/:id", findOneDebtByUserIdController.execute);

const updateDebtController = new UpdateDebtController();
debtRoutes.put("/:user_id/:id", updateDebtController.execute);

export default debtRoutes;
