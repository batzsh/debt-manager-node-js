import { DebtsRepository } from "../../../infra/repositories/debt-repository";
import { UserRepository } from "../../../infra/repositories/user-repository";
import { DebtEntity } from "../entities/debt-entity";

export class FindOneDebtByUserIdUseCase {
  constructor(
    private userRepository: UserRepository,
    private debtRepository: DebtsRepository
  ) {}

  async execute(id, user_id): Promise<FindAllDebtsByUserIdUseCase.Response> {
    const user = await this.userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found.");
    }

    const debt = await this.debtRepository.findOne({
      where: { id, user_id },
    });

    if (!debt) {
      throw new Error("Debt not found.");
    }

    return debt;
  }
}

export namespace FindAllDebtsByUserIdUseCase {
  export type Response = DebtEntity.BaseFields;
}
