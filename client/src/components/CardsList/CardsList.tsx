import React, { useEffect } from 'react';
import { 
  ProductCard,
  Paginator,
} from './../'
import { CardMock } from './../../__mocks__'
import { fetchCardsListRequest } from './../../redux'
import { fetchTodoRequest } from './../../redux/todo/actions'
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./../../redux/todo/selectors";
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'

import './CardsList.scss'

const CardsList = ({ fetchCardsList, cardsList }: any) => {
  
  console.log('cardsList: ', cardsList)
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map((todo, index) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
    // <>
    // <div className="card-container">
    //     {
    //         CardMock && CardMock.cards && CardMock.cards.map(card => {
    //             const { id } = card;
    //             return <ProductCard {...card} key={id} />
    //         })
    //     }
    // </div>
    // <Paginator pages={CardMock.pages} page={page} handleChange={handleChange}/>
    // </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      fetchCardsList: (request: any) => dispatch(fetchCardsListRequest(request)),
  }
}

const mapStateToProps = (state: any) => {
      return {
        cardsList: state.foodShop,
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)

