import { DebtsRepository } from "../../../infra/repositories/debt-repository";
import { UserRepository } from "../../../infra/repositories/user-repository";
import { DebtEntity } from "../entities/debt-entity";

export class FindAllDebtsByUserIdUseCase {
  constructor(
    private userRepository: UserRepository,
    private debtRepository: DebtsRepository
  ) {}

  async execute(user_id): Promise<FindAllDebtsByUserIdUseCase.Response> {
    const user = this.userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found.");
    }

    return await this.debtRepository.find({
      where: { user_id },
    });
  }
}

export namespace FindAllDebtsByUserIdUseCase {
  export type Response = DebtEntity.BaseFields[];
}
