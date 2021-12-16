import { getConnection } from "typeorm";
import { UserRepository } from "../../../infra/repositories/user-repository";
import { UserEntity } from "../entities/user-entity";

export class DeleteUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: DeleteUserUsecase.Request): Promise<void> {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new Error("User not found.");
    }

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(UserRepository)
      .where("id = :id", { id })
      .execute();

    return;
  }
}

export namespace DeleteUserUsecase {
  export interface Request {
    id: string;
  }
}
