import { UserRepository } from "../../../infra/repositories/user-repository";
import { UserEntity } from "../entities/user-entity";

export class FindOneUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    id,
  }: FindOneUserUsecase.Request): Promise<FindOneUserUsecase.Response> {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }
}

export namespace FindOneUserUsecase {
  export interface Request {
    id: string;
  }

  export type Response = UserEntity.BaseFields;
}
