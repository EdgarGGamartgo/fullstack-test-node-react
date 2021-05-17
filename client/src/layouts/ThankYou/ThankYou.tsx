import React from 'react';
import { Header, Thanks } from './../../components'

interface ThanksProps {
    userName?: string,
    orderId?: string,
}

export const ThankYou = ({
    userName,
    orderId,
}: ThanksProps) => {
  return (
    <>
      <Header renderCart={false}/>
      <Thanks userName={userName} orderId={orderId}/>
    </>
  );
}

