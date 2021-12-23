import { Request, Response } from "express";
import { getRepository } from "typeorm";
import DebtTypeormEntity from "../../repositories/entities/debt-typeorm-entity";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class FindAllDebtsByUserIdController {
  async execute(request: Request, response: Response) {
    const { user_id } = request.params;

    const usersRepository = getRepository(UserTypeormEntity);
    const user = await usersRepository.findOne({ id: user_id });

    if (!user) {
      return response.status(404).json({
        message: "User not found.",
      });
    }

    const debtsRepository = getRepository(DebtTypeormEntity);
    const allDebtsFromUser = await debtsRepository.find({
      where: { user_id: user_id },
    });

    return response.json(allDebtsFromUser);
  }
}
