import { DebtsRepository } from "../../../infra/repositories/debt-repository";
import { UserRepository } from "../../../infra/repositories/user-repository";

export class DeleteDebtUseCase {
  constructor(
    private userRepository: UserRepository,
    private debtRepository: DebtsRepository
  ) {}

  async execute(id, user_id): Promise<DeleteDebtUseCase.Response> {
    const user = await this.userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found.");
    }

    const debt = await this.debtRepository.findOne({ id });

    if (!debt) {
      throw new Error("Debt not found.");
    }

    await this.debtRepository.delete(debt);

    return;
  }
}

export namespace DeleteDebtUseCase {
  export type Response = void;
}
