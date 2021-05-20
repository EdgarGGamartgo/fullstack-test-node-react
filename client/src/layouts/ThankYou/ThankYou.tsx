import React, { useEffect } from 'react';
import { Header, Thanks } from './../../components'
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface ThanksProps {
    userName?: string,
    orderId?: string,
}

export const ThankYou = ({
    userName,
    orderId,
}: ThanksProps) => {

const location: any = useLocation();
  const myparam = location;
  let history = useHistory();


  useEffect(() => {

    const redirect = myparam.state && myparam.state.updateThank

    if (!redirect) {
        history.push({
          pathname: '/',
          search: '',  // query string
          state: {  // location state
            updateThank: false, 
          },
        });
    }
  }, [])

  return (
    <>
      <Header renderCart={false}/>
      <Thanks/>
    </>
  );
}

