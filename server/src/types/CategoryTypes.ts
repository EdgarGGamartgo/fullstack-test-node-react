import { BuildOptions, Model } from "sequelize";

export interface CategoryAttrs {
    id: number;
    name: string;
    is_deleted: boolean;
  }

export interface CategoryModel extends Model<CategoryAttrs>, CategoryAttrs {}
export class Category extends Model<CategoryModel, CategoryAttrs> {}

export type CategoryStatic = typeof Model & {
     new (values?: object, options?: BuildOptions): CategoryModel;
};

