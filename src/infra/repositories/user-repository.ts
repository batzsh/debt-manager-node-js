import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../../domains/user/entities/user-entity";

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {}

export { UserRepository };
