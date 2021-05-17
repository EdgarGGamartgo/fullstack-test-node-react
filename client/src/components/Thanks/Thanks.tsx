import React from 'react';
import './Thanks.scss'


interface ThanksProps {
    userName?: string,
    orderId?: string,
}

export const Thanks = ({
    userName = 'Edgar',
    orderId = '#123456',
}: ThanksProps) => {
  return (
    <div className="thanks">
        <div className="row">
            <div className="flex-item"><h1>Thanks for your purchase</h1></div>
            <div className="flex-item"><p>{userName}, we have created your order {orderId}. Your items will be soon at your door.</p></div>
            <div className="flex-item"><button>Start again</button></div> 
        </div> 
    </div>
  );
}

