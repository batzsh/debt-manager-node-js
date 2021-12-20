import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { FindAllUsersController } from "../controllers/find-all-users-controller";

const userRoutes = Router();

const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.execute);

const findAllUsersController = new FindAllUsersController();
userRoutes.post("/", findAllUsersController.execute);

export default userRoutes;
