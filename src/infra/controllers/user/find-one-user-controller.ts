import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class FindOneUserController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;

    const usersRepository = getRepository(UserTypeormEntity);
    const user = await usersRepository.findOne({
      id,
    });

    if (!user) {
      return response.status(404).json({
        error: "User does not exists",
      });
    }

    return response.status(200).json(user);
  }
}
