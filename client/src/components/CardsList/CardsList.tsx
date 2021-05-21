import React, { useEffect, useState } from 'react';
import {
  ProductCard,
  Paginator,
} from './../'
import { fetchTodoRequest } from './../../redux/todo/actions'
import {
  getTodosSelector,
} from "./../../redux/todo/selectors";
import { useDispatch, useSelector } from "react-redux";

import './CardsList.scss'

const CardsList = () => {

  const dispatch = useDispatch();
  const products = useSelector(getTodosSelector);
  const [seePaginator, setSeePaginator] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(fetchTodoRequest(0, 20));
  }, []);

  useEffect(() => {
    const validateDta = products && products.data && products.data.totalItems
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
          <Paginator pages={totalPages} page={page} handleChange={handleChange} /> : null
      }
    </>
  );
}

export default CardsList

