import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './ProductCart.scss'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
    fontSize: 8,
  }
});

interface ProductCartProps {
  name: string, Categories: string, price: string, quantity: string, totalProductPrice: string
}

export const ProductCart = ({ name, Categories, price, quantity, totalProductPrice }: ProductCartProps) => {
  const classes = useStyles();

  

  const renderQuantity = () => {
    let options = []
    for (let i =0; i <= (+quantity + 5); i++) {
      if (i === +quantity) {
        options.push(<option selected={true} value={i}>{i}</option>)
      } else {
        options.push(<option value={i}>{i}</option>)
      }
    }
    return options
  }

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {name}
          </Typography>
          <Typography className={classes.pos}>
            {Categories}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Unit Price
          </Typography>
          <Typography className={classes.pos}>
            {price}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Qty
          </Typography>
          <Typography className={classes.pos}>
            <select name="quantities" id="quantities">
               {renderQuantity() && renderQuantity().map(option => option)}
            </select>
            <img width={'20px'} height={'20px'} className='logo' src='./trashIcon.jpg' alt="logo" />
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.pos}>
            {totalProductPrice}
          </Typography>
        </CardContent>
      </Card>
  );
}

