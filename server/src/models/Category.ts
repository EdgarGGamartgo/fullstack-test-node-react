import { DataTypes, Sequelize } from 'sequelize';
import { CategoryStatic } from './../types';
import { db } from '../data-access/dbConnect'

export function CategoryFactory (sequelize: Sequelize): CategoryStatic {
    return <CategoryStatic>sequelize.define("Category", {
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
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false,
        }
    }, {
        timestamps: false
    });
}

export const Category = CategoryFactory(db)
