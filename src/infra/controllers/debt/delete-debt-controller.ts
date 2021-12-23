import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { DebtTypeormEntity } from "../../repositories/entities/debt-typeorm-entity";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class DeleteDebtController {
  async execute(request: Request, response: Response) {
    const { id, user_id } = request.params;

    const usersRepository = getRepository(UserTypeormEntity);
    const user = await usersRepository.findOne({
      id: user_id,
    });

    if (!user) {
      return response.status(404).json({
        error: "User not found.",
      });
    }

    const debtsRepository = getRepository(DebtTypeormEntity);
    const debt = await debtsRepository.findOne({
      id,
      user_id,
    });

    if (!debt) {
      return response.status(404).json({
        error: "Debt not found.",
      });
    }

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(DebtTypeormEntity)
      .where("id = :id", { id })
      .execute();

    return response.status(200);
  }
}
