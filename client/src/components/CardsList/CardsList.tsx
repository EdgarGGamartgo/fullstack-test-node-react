import React from 'react';
import { ProductCard } from './../'
import { CardMock } from './../../__mocks__'
import './CardsList.scss'

export const CardsList = () => {
  return (
    <div className="card-container">
        {
            CardMock && CardMock.map(card => {
                const { id } = card;
                return <ProductCard {...card} key={id} />
            })
        }
    </div>
  );
}

