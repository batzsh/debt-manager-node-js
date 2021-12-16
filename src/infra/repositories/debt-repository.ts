import { EntityRepository, Repository } from "typeorm";
import { DebtEntity } from "../../domains/debt/entities/debt-entity";

@EntityRepository(DebtEntity)
class DebtsRepository extends Repository<DebtEntity> {}

export { DebtsRepository };
