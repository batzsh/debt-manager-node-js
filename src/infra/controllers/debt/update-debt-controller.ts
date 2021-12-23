import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DebtTypeormEntity } from "../../repositories/entities/debt-typeorm-entity";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class UpdateDebtController {
  async execute(request: Request, response: Response) {
    const { description, amount, status, due_date } = request.body;
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

    debt.user_id = user_id;
    debt.description = description;
    debt.amount = amount;
    debt.due_date = due_date;

    await debtsRepository.save(debt);

    return response.status(200).json(debt);
  }
}
