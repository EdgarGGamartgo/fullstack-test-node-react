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
        const { page, size }: any = req.query;
        const { method } = req
        console.log('HELLO PRODUCT')
        try {
            const products = await getAllProducts(page, size)
            res.status(200).send(products);
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve products')
        }
})

router.get('/cart',
    LoggerMiddleware,
    //getAllProductsValidation,
    validateRequest,
    async (req: Request, res: Response) => {
        //const { page, size }: any = req.query;
        const { method } = req
        console.log('HELLO PRODUCT: ', req.query)
        try {
            //const products = await getAllProducts(page, size)
            res.status(200).send(req.query);
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve products')
        }
})

export { router as ProductController }
