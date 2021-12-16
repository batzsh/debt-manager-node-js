import { v4 as uuidV4 } from "uuid";
import { DebtStatusEnum } from "../enums/debt-status-enum";

export class DebtEntity implements DebtEntity.BaseFields {
  private _id!: string;
  private _description: string;
  private _amount: number;
  private _status: DebtStatusEnum;
  private _created_at: Date;
  private _updated_at: Date;

  get id() {
    return this._id;
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
      description?: string;
      amount?: number;
      status?: DebtStatusEnum;
      created_at?: Date;
      updated_at?: Date;
    }
  >;
}
