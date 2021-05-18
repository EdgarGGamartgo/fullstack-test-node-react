import express, { Request, Response } from 'express'
import { validateRequest } from '@oregtickets/common'
import { ErrorHandler } from './../handlers'
import { 
    getAllProducts,
 } from './../services'
import {
    //getAllProductsValidation,
    LoggerMiddleware,
} from './../middlewares'

const router = express.Router()

router.get('/',
    LoggerMiddleware,
    //getAllProductsValidation,
    validateRequest,
    async (req: Request, res: Response) => {
        const { method } = req
        console.log('HELLO PRODUCT')
        try {
            const products = await getAllProducts()
            res.status(200).send(products);
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve products')
        }
})

export { router as ProductController }
