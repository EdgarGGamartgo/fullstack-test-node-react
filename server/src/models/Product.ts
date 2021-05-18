import { DataTypes, Sequelize } from 'sequelize';
import { ProductStatic } from './../types';
import { db } from '../data-access/dbConnect'

export function ProductFactory (sequelize: Sequelize): ProductStatic {
    return <ProductStatic>sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },  
        summary: {
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

export const Product = ProductFactory(db)
