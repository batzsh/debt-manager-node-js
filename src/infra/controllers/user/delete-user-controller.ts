import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class DeleteUserController {
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

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(UserTypeormEntity)
      .where("id = :id", { id })
      .execute();

    return response.status(201).json({ message: "User successfuly deleted." });
  }
}
