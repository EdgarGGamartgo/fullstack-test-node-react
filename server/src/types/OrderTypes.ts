import { BuildOptions, Model } from "sequelize";

export interface OrderAttrs {
    id: number;
    order_info: string;
    is_deleted: boolean;
  }

export interface OrderModel extends Model<OrderAttrs>, OrderAttrs {}
export class Order extends Model<OrderModel, OrderAttrs> {}

export type OrderStatic = typeof Model & {
     new (values?: object, options?: BuildOptions): OrderModel;
};

