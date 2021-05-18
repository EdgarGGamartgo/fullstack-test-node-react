import { Order } from './../models'
import { ProductAttrs } from './../types'
import { v4 as uuidv4 } from 'uuid';
import { BadRequestError } from '@oregtickets/common';

export const createOrder = async() => await Order.findAll() //{ include: Category }
