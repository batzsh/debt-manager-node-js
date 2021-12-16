import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserTypeormEntity } from "../repositories/entities/user-typeorm-entity";

export class CreateUserController {
  async execute(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getRepository(UserTypeormEntity);
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists",
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}
