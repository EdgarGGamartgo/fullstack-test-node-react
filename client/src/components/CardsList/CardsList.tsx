import React from 'react';
import { 
  ProductCard,
  Paginator,
} from './../'
import { CardMock } from './../../__mocks__'
import { fetchCardsListRequest } from './../../redux'
import { connect } from 'react-redux'

import './CardsList.scss'

const CardsList = ({ fetchCardsList, cardsList }: any) => {
  console.log('cardsList: ', cardsList)
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

