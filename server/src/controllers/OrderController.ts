import express, { Request, Response } from 'express'
import { validateRequest } from '@oregtickets/common'
import { ErrorHandler } from './../handlers'
import { 
    createOrder,
 } from './../services'
import {
    createOrderValidation,
    LoggerMiddleware,
} from './../middlewares'

const router = express.Router()

router.post('/',
    LoggerMiddleware,
    createOrderValidation,
    validateRequest,
    async (req: Request, res: Response) => {
        const { method } = req
        try {
            const order = await createOrder(req.body)
            res.status(201).send(order);
        } catch (e) {
            ErrorHandler(req.body, method, e, 'Cant create order')
        }
})

export { router as OrderController }
