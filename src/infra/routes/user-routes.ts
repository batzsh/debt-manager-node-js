import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { DeleteUserController } from "../controllers/delete-user-controller";
import { FindAllUsersController } from "../controllers/find-all-users-controller";
import { FindOneUserController } from "../controllers/find-one-user-controller";

const userRoutes = Router();

const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.execute);

const findAllUsersController = new FindAllUsersController();
userRoutes.get("/", findAllUsersController.execute);

const findOneUserController = new FindOneUserController();
userRoutes.get("/:id", findOneUserController.execute);

const deleteUserController = new DeleteUserController();
userRoutes.delete("/:id", deleteUserController.execute);

export default userRoutes;
