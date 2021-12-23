import { v4 as uuidV4 } from "uuid";

export class UserEntity implements UserEntity.BaseFields {
  private _id!: string;
  private _name: string;
  private _email: string;
  private _created_at: Date;
  private _updated_at: Date;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get created_at() {
    return this._created_at;
  }

  set created_at(date: Date) {
    this._created_at = date;
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
      name: this._name,
      email: this._email,
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  constructor(init: UserEntity.Create) {
    if (init.id) {
      this._id = init.id || uuidV4();
    }

    this._name = init.name;
    this._email = init.email;
    this._created_at = init.created_at ?? new Date(Date.now());
    this._updated_at = init.created_at ?? new Date(Date.now());
  }
}

export namespace UserEntity {
  export interface BaseFields {
    id: string;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
  }

  type Modify<T, R> = Omit<T, keyof R> & R;

  export type Create = Modify<
    BaseFields,
    {
      id?: string;
      name?: string;
      email?: string;
      created_at?: Date;
      updated_at?: Date;
    }
  >;
}
