import { v4 as uuidV4 } from "uuid";
import { UserEntity } from "../../user/entities/user-entity";
import { DebtStatusEnum } from "../enums/debt-status-enum";

export class DebtEntity implements DebtEntity.BaseFields {
  private _id!: string;
  private _user_id: string;
  private _user!: UserEntity.BaseFields;
  private _description: string;
  private _amount: number;
  private _status: DebtStatusEnum;
  private _created_at: Date;
  private _updated_at: Date;

  get id() {
    return this._id;
  }

  get user_id() {
    return this._user_id;
  }

  get user() {
    return this._user;
  }

  get description() {
    return this._description;
  }

  get amount() {
    return this._amount;
  }

  get status() {
    return this._status;
  }

  get created_at() {
    return this._created_at;
  }

  get updated_at() {
    return this._updated_at;
  }

  set updated_at(date: Date) {
    this._updated_at = date;
  }

  get data() {
    return {
      id: this._id,
      user_id: this._user_id,
      user: this._user,
      description: this._description,
      amount: this._amount,
      status: this._status,
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  constructor(init: DebtEntity.Create) {
    if (init.id) {
      this._id = init.id || uuidV4();
    }

    this._user_id = init.user_id;
    this._user = init.user;
    this._description = init.description;
    this._amount = init.amount;
    this._status = init.status ?? DebtStatusEnum.PENDING;
    this._created_at = init.created_at ?? new Date(Date.now());
    this._updated_at = init.created_at ?? new Date(Date.now());
  }
}

export namespace DebtEntity {
  export interface BaseFields {
    id: string;
    user_id: string;
    user: UserEntity.BaseFields;
    description: string;
    amount: number;
    status: DebtStatusEnum;
    created_at: Date;
    updated_at: Date;
  }

  type Modify<T, R> = Omit<T, keyof R> & R;

  export type Create = Modify<
    BaseFields,
    {
      id?: string;
      user_id?: string;
      user?: UserEntity.BaseFields;
      description?: string;
      amount?: number;
      status?: DebtStatusEnum;
      created_at?: Date;
      updated_at?: Date;
    }
  >;
}
