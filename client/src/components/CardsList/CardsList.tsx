import React, { useEffect, useState } from 'react';
import { 
  ProductCard,
  Paginator,
} from './../'
import { CardMock } from './../../__mocks__'
import { fetchTodoRequest } from './../../redux/todo/actions'
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./../../redux/todo/selectors";
import { useDispatch, useSelector } from "react-redux";

import './CardsList.scss'

const CardsList = () => {
  
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const products = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);
  const [seePaginator, setSeePaginator] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(fetchTodoRequest(0, 20));
  }, []);

  useEffect(() => {
    const validateDta = products && products.data && products.data.totalItems
    console.log('HANABI: ', products)
    if (validateDta) {
      if (products.data.totalItems > 20) {
        setSeePaginator(true)
        setTotalPages(products.data.totalPages)
      } else {
        setSeePaginator(false)
      }
    }
  }, [products]);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(fetchTodoRequest(value - 1, 20));
    setPage(value);
  }

  const getPagination = () => {
    const totalProducts = products && products.data && products.data
    if (totalProducts > 20) {

    }
  }

  return (
     <>
     <div className="card-container">
         {
             products && products.data && products.data && products.data.products.map((product: any) => {
                 const { id } = product;
                 return <ProductCard {...product} key={id} />
             })
         }
     </div>
     {
       seePaginator ? 
       <Paginator pages={totalPages} page={page} handleChange={handleChange}/> : null
     }
     </>
  );
}

export default CardsList

