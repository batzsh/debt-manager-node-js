import { DebtsRepository } from "../../../infra/repositories/debt-repository";
import { UserRepository } from "../../../infra/repositories/user-repository";
import { UserEntity } from "../../user/entities/user-entity";
import { DebtStatusEnum } from "../enums/debt-status-enum";

export class CreateDebtUseCase {
  constructor(
    private userRepository: UserRepository,
    private debtRepository: DebtsRepository
  ) {}

  async execute({
    user_id,
    description,
    amount,
    status,
  }: CreateDebtUseCase.CreateDebtRequest): Promise<CreateDebtUseCase.CreateDebtResponse> {
    const user = await this.userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found.");
    }

    const debt = this.debtRepository.create({
      user_id,
      description,
      amount,
      status: status ?? DebtStatusEnum.PENDING,
    });

    await this.debtRepository.save(debt);

    return debt;
  }
}

export namespace CreateDebtUseCase {
  export interface CreateDebtRequest {
    user_id: string;
    description?: string;
    amount: number;
    status?: DebtStatusEnum;
  }

  export interface CreateDebtResponse {
    id: string;
    user: UserEntity.BaseFields;
    description: string;
    amount: number;
    status: DebtStatusEnum;
    created_at: Date;
    updated_at: Date;
  }
}
