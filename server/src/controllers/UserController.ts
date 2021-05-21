import express, { Request, Response } from 'express'
import { validateRequest } from '@oregtickets/common'
import {
    getUserById,
} from './../services'
import {
    getUserByIdValidation,
    LoggerMiddleware,
    VerifyToken,
} from './../middlewares'
import { ErrorHandler } from './../handlers'

const router = express.Router()

router.get('/api/user/:id',
    LoggerMiddleware,
    getUserByIdValidation,
    validateRequest,
    VerifyToken,
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const { method } = req
        try {
            const user = await getUserById(id)
            res.status(200).send(user);
        } catch (e) {
            ErrorHandler(req.params, method, e, 'Cant retrieve user!')
        }
    })

export { router as UserController }
