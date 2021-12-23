import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
  CreateDateColumn,
  Check,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { DebtStatusEnum } from "../../../domains/debt/enums/debt-status-enum";
import { UserTypeormEntity } from "./user-typeorm-entity";

@Entity("debts")
export default class DebtTypeormEntity {
  @PrimaryColumn({ name: "id", type: "uuid", nullable: false })
  id!: string;

  @Column({ name: "user_id", type: "uuid", nullable: false })
  user_id!: string;

  @ManyToOne(() => UserTypeormEntity)
  @JoinColumn({ name: "user_id" })
  user: UserTypeormEntity;

  @Column({ name: "description", type: "varchar", nullable: true })
  description?: string;

  @Column({ name: "amount", type: "float", nullable: false })
  amount!: number;

  @Check(`"status" NOT NULL AND IN ('PENDING')`)
  @Column({ name: "status", type: "varchar", nullable: false })
  status!: DebtStatusEnum;

  @CreateDateColumn({ name: "due_date", type: "datetime", nullable: false })
  due_date!: Date;

  @CreateDateColumn({
    name: "created_at",
    type: "datetime",
    nullable: false,
  })
  created_at!: Date;

  @CreateDateColumn({ name: "updated_at", type: "datetime", nullable: true })
  updated_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { DebtTypeormEntity };
