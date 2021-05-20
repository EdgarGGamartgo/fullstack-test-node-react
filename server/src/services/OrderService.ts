import { Order, User } from './../models'
import { db } from './../data-access/dbConnect'
import { createUser, getUserById } from './UserService'
import { v4 as uuidv4 } from 'uuid';

export const createOrder = async(req: any) => {
    const { orders, username, userId, address, phone, email } = req
    // Verify if user exists
    let user = await getUserById(userId)
    if (!user) {
        // Save user data
        user = await createUser({ username, address, phone, email, is_deleted: false })
    }
    // Save order data
    const order_track = uuidv4();
    await db.transaction(async (t) => {
        return await Promise.all(orders.map(async(order: any) => {
            return await Order.create({ 
                quantity: order.quantity,
                is_deleted: false,
                order_track,
                userId: user?.id
             },
             { 
                transaction: t 
            })
    }))})
    return { order_track, user }
}
