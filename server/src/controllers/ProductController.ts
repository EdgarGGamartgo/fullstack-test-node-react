import express, { Request, Response } from 'express'
import { validateRequest } from '@oregtickets/common'
import { ErrorHandler } from './../handlers'
import {
    getAllProducts,
    getCart,
} from './../services'
import {
    LoggerMiddleware,
} from './../middlewares'

const router = express.Router()

router.get('/',
    LoggerMiddleware,
    validateRequest,
    async (req: Request, res: Response) => {
        const { page, size }: any = req.query;
        const { method } = req
        try {
            const products = await getAllProducts(page, size)
            res.status(200).send(products);
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve products')
        }
    })

router.get('/cart',
    LoggerMiddleware,
    validateRequest,
    async (req: Request, res: Response) => {
        const { method } = req
        try {
            const cart = await getCart(req.query)
            res.status(200).send(cart);
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve cart')
        }
    })

export { router as ProductController }
