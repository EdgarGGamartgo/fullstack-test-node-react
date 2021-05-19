import { Product, Category } from './../models'
import { ProductAttrs } from './../types'
import { v4 as uuidv4 } from 'uuid';
import { BadRequestError } from '@oregtickets/common';

export const getAllProducts = async(page: number, size: number) => {
    const { limit, offset } = getPagination(page, size);
    const response = await Product.findAndCountAll({ 
        where: {
            is_deleted: false
        },
        limit, 
        offset, 
        include: Category 
    })
    return getPagingData(response, page, limit);
}

export const getCart = async(ids: object) => {
    const productIds = Object.entries(ids)
    const products = await Promise.all(
        productIds.map(async (id) => {
            return await Product.findOne({
                where: {
                    is_deleted: false,
                    id: id[0]
                },
                attributes: ['id', 'name', 'price'],
                include: [{ model: Category, attributes: ['name']}] 
            })
        })
    )
    return products.filter(r => r !== null).map((a:any, i: number) => {
        let b = a.get({ plain: true })
        let c = Number(b.price.substring(1));
        b.totalProductPrice = `$${(productIds[i][1] * c).toFixed(2)}`
        b.quantity = productIds[i][1]
        const categories = b.Categories.map((cName: any) => cName.name )
        b.Categories = categories.join(',')
        return b
    })
}

const getPagination = (page: any, size: any) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };

const getPagingData = (data: any, page: any, limit: any) => {
    const { count: items, rows: products } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(items / limit);
    const totalItems = items - 2
    return { totalItems, products, totalPages, currentPage };
};