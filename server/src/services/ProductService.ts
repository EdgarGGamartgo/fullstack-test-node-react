import { Product } from './../models'
import { ProductAttrs } from './../types'
import { v4 as uuidv4 } from 'uuid';
import { BadRequestError } from '@oregtickets/common';

export const getAllProducts = async() => await Product.findAll() //{ include: Category }
