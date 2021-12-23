import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class UserTypeormEntity {
  @PrimaryColumn({ name: "id", type: "uuid", nullable: false })
  id!: string;

  @Column({ name: "name", type: "varchar", nullable: false })
  name: string;

  @Column({ name: "email", type: "varchar", nullable: false })
  email: string;

  @CreateDateColumn({ name: "created_at", type: "datetime", nullable: false })
  created_at: Date;

  @CreateDateColumn({ name: "updated_at", type: "datetime", nullable: true })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserTypeormEntity };
