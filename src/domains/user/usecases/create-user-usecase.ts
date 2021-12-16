import { UserRepository } from "../../../infra/repositories/user-repository";
import { UserStatusEnum } from "../enums/user-status-enum";
import { SaveUserRepository } from "../gateways/repositories/save-user-repository";

export class CreateUserUseCase {
  constructor(
    private saveUserRepository: SaveUserRepository,
    private userRepository: UserRepository
  ) {}

  async execute({
    name,
    email,
  }: CreateUserUseCase.CreateUserRequest): Promise<CreateUserUseCase.CreateUserResponse> {
    const userAlreadyExists = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const createdUser = await this.saveUserRepository.save({
      name: name,
      email: email,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    return createdUser;
  }
}

export namespace CreateUserUseCase {
  export interface CreateUserRequest {
    name: string;
    email: string;
  }

  export interface CreateUserResponse {
    id: string;
    name: string;
    email: string;
    status: UserStatusEnum;
    created_at: Date;
    updated_at: Date;
  }
}
