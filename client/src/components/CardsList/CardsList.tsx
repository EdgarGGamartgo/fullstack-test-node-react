import React from 'react';
import { 
  ProductCard,
  Paginator,
} from './../'
import { CardMock } from './../../__mocks__'
import './CardsList.scss'

export const CardsList = () => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <>
    <div className="card-container">
        {
            CardMock && CardMock.cards && CardMock.cards.map(card => {
                const { id } = card;
                return <ProductCard {...card} key={id} />
            })
        }
    </div>
    <Paginator pages={CardMock.pages} page={page} handleChange={handleChange}/>
    </>
  );
}

