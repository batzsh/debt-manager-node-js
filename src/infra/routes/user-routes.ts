import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";

const userRoutes = Router();

const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.execute);

export default userRoutes;
