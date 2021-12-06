import { v4 as uuidV4 } from "uuid";
import { DebtStatusEnum } from "../enums/debt-status-enum";

export class DebtEntity implements DebtEntity.BaseFields {
  private _id!: string;
  private _description: string;
  private _amount: number;
  private _status: DebtStatusEnum;
  private _createDate: Date;
  private _updateDate: Date;

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

  get createDate() {
    return this._createDate;
  }

  get updateDate() {
    return this._updateDate;
  }

  set updateDate(date: Date) {
    this._updateDate = date;
  }

  get data() {
    return {
      id: this._id,
      description: this._description,
      amount: this._amount,
      status: this._status,
      createDate: this._createDate,
      updateDate: this._updateDate,
    };
  }

  constructor(init: DebtEntity.Create) {
    if (init.id) {
      this._id = init.id || uuidV4();
    }

    this._description = init.description;
    this._amount = init.amount;
    this._status = init.status ?? DebtStatusEnum.PENDING;
    this._createDate = init.createDate ?? new Date(Date.now());
    this._updateDate = init.createDate ?? new Date(Date.now());
  }
}

export namespace DebtEntity {
  export interface BaseFields {
    id: string;
    description: string;
    amount: number;
    status: DebtStatusEnum;
    createDate: Date;
    updateDate: Date;
  }

  type Modify<T, R> = Omit<T, keyof R> & R;

  export type Create = Modify<
    BaseFields,
    {
      id?: string;
      description?: string;
      amount?: number;
      status?: DebtStatusEnum;
      createDate?: Date;
      updateDate?: Date;
    }
  >;
}
