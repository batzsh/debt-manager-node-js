import { Router } from "express";
import debtRoutes from "./src/infra/routes/debt-routes";
import userRoutes from "./src/infra/routes/user-routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/debts", debtRoutes);

export default routes;
