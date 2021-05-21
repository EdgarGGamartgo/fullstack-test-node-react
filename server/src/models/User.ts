import { DataTypes, Sequelize } from 'sequelize';
import { UserStatic } from './../types/UserTypes';
import { db } from '../data-access/dbConnect'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export function UserFactory (sequelize: Sequelize): UserStatic {
    return <UserStatic>sequelize.define("user", {
        id: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
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

export const User = UserFactory(db)
