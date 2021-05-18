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

router.get('/',
    LoggerMiddleware,
    createOrderValidation,
    validateRequest,
    async (req: Request, res: Response) => {
        const { method } = req

        try {
            await createOrder()
            res.status(200).send({});
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve products')
        }
})

export { router as OrderController }
