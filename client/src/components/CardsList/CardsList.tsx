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
import { connect } from 'react-redux'

import './CardsList.scss'

const CardsList = () => {
  
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const products = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);
  const [seePaginator, setSeePaginator] = useState(false);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  useEffect(() => {
    const validateDta = products && products.data
    if (validateDta) {
      if (products.data.length > 20) {
        setSeePaginator(true)
      } else {
        setSeePaginator(false)
      }
    }
  }, [products]);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
             products && products.data && products.data.map((product: any) => {
                 const { id } = product;
                 return <ProductCard {...product} key={id} />
             })
         }
     </div>
     {
       seePaginator ? 
       <Paginator pages={CardMock.pages} page={page} handleChange={handleChange}/> : null
     }
     </>
  );
}

export default CardsList

