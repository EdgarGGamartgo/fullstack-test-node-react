import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import { ProductController, OrderController } from './controllers'
import { errorHandler, NotFoundError } from '@oregtickets/common'
import cors from 'cors'

const app = express()
app.use(cors())
app.set('trust proxy', true)
app.use(json())

app.use('/api/product', ProductController)
app.use('/api/order', OrderController)

app.all('*', async(req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }