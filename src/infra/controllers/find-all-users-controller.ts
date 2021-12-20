import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserTypeormEntity } from "../repositories/entities/user-typeorm-entity";

export class FindAllUsersController {
  async execute(request: Request, response: Response) {
    const usersRepository = getRepository(UserTypeormEntity);
    const allUsers = await usersRepository.find();

    return response.status(200).json(allUsers);
  }
}
