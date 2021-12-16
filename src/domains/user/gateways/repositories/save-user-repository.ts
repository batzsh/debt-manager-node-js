import { UserEntity } from "../../entities/user-entity";

export interface SaveUserRepository {
  save(params: UserEntity.Create): Promise<UserEntity.BaseFields>;
}
