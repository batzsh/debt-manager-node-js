import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../../domains/user/entities/user-entity";

@EntityRepository(UserEntity)
class DebtsRepository extends Repository<UserEntity> {}

export { DebtsRepository };
