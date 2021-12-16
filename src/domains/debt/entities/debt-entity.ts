import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { UserEntity } from "../../user/entities/user-entity";
import { DebtStatusEnum } from "../enums/debt-status-enum";

@Entity("debts")
class DebtEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  status: DebtStatusEnum;

  @CreateDateColumn()
  due_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { DebtEntity };
