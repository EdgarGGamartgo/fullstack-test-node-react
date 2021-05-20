import { DataTypes, Sequelize } from 'sequelize';
import { OrderStatic } from './../types';
import { db } from '../data-access/dbConnect'

export function OrderFactory (sequelize: Sequelize): OrderStatic {
    return <OrderStatic>sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        order_track: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
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
