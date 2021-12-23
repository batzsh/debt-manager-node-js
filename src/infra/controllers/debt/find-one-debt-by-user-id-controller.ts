import { Request, Response } from "express";
import { getRepository } from "typeorm";
import DebtTypeormEntity from "../../repositories/entities/debt-typeorm-entity";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class FindOneDebtByUserIdController {
  async execute(request: Request, response: Response) {
    const { user_id, id } = request.params;

    const usersRepository = getRepository(UserTypeormEntity);
    const user = await usersRepository.findOne({ id: user_id });

    if (!user) {
      return response.status(404).json({
        message: "User not found.",
      });
    }

    const debtsRepository = getRepository(DebtTypeormEntity);
    const debt = await debtsRepository.find({
      where: { id: id, user_id: user_id },
    });

    if (!debt) {
      return response.status(404).json({
        message: "Debt not found.",
      });
    }

    return response.json(debt);
  }
}
