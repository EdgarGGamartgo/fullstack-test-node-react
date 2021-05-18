import { DataTypes, Sequelize } from 'sequelize';
import { OrderStatic } from './../types';
import { db } from '../data-access/dbConnect'

export function OrderFactory (sequelize: Sequelize): OrderStatic {
    return <OrderStatic>sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true,
        },
        order_info: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false,
        }
    }, {
        timestamps: false
    });
}

export const Order = OrderFactory(db)
