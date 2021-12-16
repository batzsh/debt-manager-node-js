import { UserRepository } from "../../../infra/repositories/user-repository";
import { UserEntity } from "../entities/user-entity";

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<FindAllUsersUseCase.Response> {
    return await this.userRepository.find();
  }
}

export namespace FindAllUsersUseCase {
  export type Response = UserEntity.BaseFields[];
}
