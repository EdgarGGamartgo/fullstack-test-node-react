import { body } from 'express-validator'

export const createOrderValidation = [
    body('orders')
        .isArray()
        .notEmpty()
        .custom((entries) => {
            entries.forEach((entry: any) => {
                const keys: any = Object.keys(entry)
                keys.forEach((key: any) => {
                    if (typeof keys || key !== 'id' || key !== 'quantity') {
                        return false
                    }
                })
            })
            return true
        })
        .withMessage('Please provide a valid order field'),
    body('username')
        .isString()
        .notEmpty()
        .withMessage('Please provide a valid username field'),
    body('userId')
        .isNumeric()
        .notEmpty()
        .withMessage('Please provide a valid userId field'),
    body('address')
        .isString()
        .notEmpty()
        .withMessage('Please provide a valid address field'),
    body('phone')
        .isString()
        .withMessage('Please provide a valid phone field'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Please provide a valid email field'),
]
