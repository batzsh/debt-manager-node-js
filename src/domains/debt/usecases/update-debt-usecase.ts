import { DebtsRepository } from "../../../infra/repositories/debt-repository";
import { UserRepository } from "../../../infra/repositories/user-repository";
import { UserEntity } from "../../user/entities/user-entity";
import { DebtStatusEnum } from "../enums/debt-status-enum";

export class UpdateDebtUseCase {
  constructor(
    private userRepository: UserRepository,
    private debtRepository: DebtsRepository
  ) {}

  async execute({
    id,
    user_id,
    description,
    amount,
    status,
  }: UpdateDebtUseCase.Request): Promise<UpdateDebtUseCase.Response> {
    const user = await this.userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found.");
    }

    const debt = await this.debtRepository.findOne({ id });

    if (!debt) {
      throw new Error("Debt not found.");
    }

    const updateDebt = await this.debtRepository.update(debt, {
      description,
      amount,
      status,
    });

    return updateDebt.raw;
  }
}

export namespace UpdateDebtUseCase {
  export interface Request {
    id: string;
    user_id: string;
    description?: string;
    amount: number;
    status?: DebtStatusEnum;
  }

  export interface Response {
    id: string;
    description: string;
    amount: number;
    status: DebtStatusEnum;
    created_at: Date;
    updated_at: Date;
  }
}
