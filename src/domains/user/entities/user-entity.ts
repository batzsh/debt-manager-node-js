import { v4 as uuidV4 } from "uuid";
import { UserStatusEnum } from "../enums/user-status-enum";

export class UserEntity implements UserEntity.BaseFields {
  private _id!: string;
  private _name: string;
  private _email: string;
  private _status: UserStatusEnum;
  private _createDate: Date;
  private _updateDate: Date;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
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
      name: this._name,
      email: this._email,
      status: this._status,
      createDate: this._createDate,
      updateDate: this._updateDate,
    };
  }

  constructor(init: UserEntity.Create) {
    if (init.id) {
      this._id = init.id || uuidV4();
    }

    this._name = init.name;
    this._email = init.email;
    this._status = init.status ?? UserStatusEnum.REGISTERED;
    this._createDate = init.createDate ?? new Date(Date.now());
    this._updateDate = init.createDate ?? new Date(Date.now());
  }
}

export namespace UserEntity {
  export interface BaseFields {
    id: string;
    name: string;
    email: string;
    status: UserStatusEnum;
    createDate: Date;
    updateDate: Date;
  }

  type Modify<T, R> = Omit<T, keyof R> & R;

  export type Create = Modify<
    BaseFields,
    {
      id?: string;
      name?: string;
      email?: string;
      status?: UserStatusEnum;
      createDate?: Date;
      updateDate?: Date;
    }
  >;
}
