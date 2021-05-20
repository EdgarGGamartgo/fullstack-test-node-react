import { User } from './../models'
import { UserAttrs } from './../types'
import { v4 as uuidv4 } from 'uuid';
import { passwordIsValid, token } from './../utils'


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

// export const logIn = async (username: string, requestPassword: string) => {
//     const user = await User.findOne({
//         where: {
//             username
//         },
//         raw: true,
//     })
//     if (!user) {
//         throw new BadRequestError('User Not Found!')
//     }
//     const { password, id } = user
//     passwordIsValid(requestPassword, password)
//     const accessToken = token(id!)
//     const response = {
//         ...user,
//         accessToken
//     }
//     return response
//}