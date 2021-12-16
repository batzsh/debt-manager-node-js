import { Router } from "express";
const routes = Router();

import userRoutes from "./src/infra/routes/user-routes";

routes.use("/users", userRoutes);

export default routes;
