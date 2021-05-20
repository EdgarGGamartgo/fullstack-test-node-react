import { BuildOptions, Model } from "sequelize";

export interface OrderAttrs {
    id?: number;
    is_deleted: boolean;
    quantity: number;
    order_track: string;
    userId?: string;
  }

export interface OrderModel extends Model<OrderAttrs>, OrderAttrs {}
export class Order extends Model<OrderModel, OrderAttrs> {}

export type OrderStatic = typeof Model & {
     new (values?: object, options?: BuildOptions): OrderModel;
};

