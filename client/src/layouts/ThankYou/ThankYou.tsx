import React, { useEffect } from 'react';
import { Header, Thanks } from './../../components'
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ThankYou = () => {

  const location: any = useLocation();
  const myparam = location;
  let history = useHistory();


  useEffect(() => {

    const redirect = myparam.state && myparam.state.updateThank

    if (!redirect) {
      history.push({
        pathname: '/',
        search: '',
        state: {
          updateThank: false,
        },
      });
    }
  }, [])

  return (
    <>
      <Header renderCart={false} />
      <Thanks />
    </>
  );
}

