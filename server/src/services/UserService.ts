import { User } from './../models'
import { UserAttrs } from './../types'
import { v4 as uuidv4 } from 'uuid';

export const getAllUsersByIsDelete = async(is_deleted: boolean) => {
    return User.findAll({
        where: {
            is_deleted
        }
    })
}

export const getAllUsers = async() => await User.findAll()

export const getUserById = async(id: string) => {
    return await User.findOne({
        where: {
            is_deleted: false,
            id: id
        }
    })
}

export const createUser = async (user: UserAttrs) => await User.create({...user, id: uuidv4()})

export const updateUser = async (user: UserAttrs, id: string) => {
    return await User.update(user,{
        where: {
            is_deleted: false,
            id
        }
    })            
}

export const deleteUser = async (id: string) => {
    return await User.update({ is_deleted: true },{
        where: {
            is_deleted: false,
            id
        }
    })
}
