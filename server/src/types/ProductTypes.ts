import { BuildOptions, Model } from "sequelize";

export interface ProductAttrs {
    id: number;
    name: string;
    price: string;
    summary: string;
    is_deleted: boolean;
  }

export interface ProductModel extends Model<ProductAttrs>, ProductAttrs {}
export class Product extends Model<ProductModel, ProductAttrs> {}

export type ProductStatic = typeof Model & {
     new (values?: object, options?: BuildOptions): ProductModel;
};

