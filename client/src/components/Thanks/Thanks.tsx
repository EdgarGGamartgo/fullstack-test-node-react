import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetToCart } from './../../redux'

import './Thanks.scss'


interface ThanksProps {
    orderResponse?: any
    resetCart?: any
}

const Thanks = ({
    orderResponse,
    resetCart
}: ThanksProps) => {
  let history = useHistory();

  useEffect(() => {
    resetCart()
  }, [])

  const goToHomePage = () => {
    history.push("/");
  }

  return (
    <div className="thanks">
        <div className="row">
            <div className="flex-item"><h1>Thanks for your purchase</h1></div>
            <div className="flex-item"><p>{orderResponse.user.username}, we have created your order {orderResponse.order_track}. Your items will be soon at your door.</p></div>
            <div className="flex-item"><button onClick={goToHomePage}>Start again</button></div> 
        </div> 
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    resetCart: () => dispatch(resetToCart())
  }
}

const mapStateToProps = (state: any) => {
      return {
          orderResponse: state.order.order.data,
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thanks)