import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DebtTypeormEntity } from "../../repositories/entities/debt-typeorm-entity";
import { UserTypeormEntity } from "../../repositories/entities/user-typeorm-entity";

export class CreateDebtController {
  async execute(request: Request, response: Response) {
    const { description, amount, status, due_date } = request.body;
    const { user_id } = request.params;

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
    const debt = debtsRepository.create({
      user_id,
      description,
      amount,
      status,
      due_date,
    });

    await debtsRepository.save(debt);

    return response.status(201).json(debt);
  }
}
