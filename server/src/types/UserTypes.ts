import { BuildOptions, Model } from "sequelize";

export interface UserAttrs {
    id?: string;
    username: string;
    address: string;
    phone: string;
    is_deleted: boolean;
    email: string;
  }

export interface UserModel extends Model<UserAttrs>, UserAttrs {}
export class User extends Model<UserModel, UserAttrs> {}

export type UserStatic = typeof Model & {
     new (values?: object, options?: BuildOptions): UserModel;
};

