import { Router } from "express";
import { CreateUserController } from "../controllers/user/create-user-controller";
import { DeleteUserController } from "../controllers/user/delete-user-controller";
import { FindAllUsersController } from "../controllers/user/find-all-users-controller";
import { FindOneUserController } from "../controllers/user/find-one-user-controller";

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
