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
    height: 60,
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
  title: string, category: string, unitPrice: string, quantity: number, totalPrice: string, availability: number
}

export const ProductCart = ({ title, category, unitPrice, quantity, totalPrice, availability }: ProductCartProps) => {
  const classes = useStyles();

  const renderQuantity = () => {
    let options = []
    if (availability !== 0) {
      for (let i = 1; i <  availability; i++) {
          if (i === quantity) {
            options.push(<option selected={true} value={i}>{i}</option>)
          } else {
            options.push(<option value={i}>{i}</option>)
          }
      } 
    } else {
      options.push(<option selected={true} value={1}>1</option>)
    }
     
    return options
  }

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.pos}>
            {category}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Unit Price
          </Typography>
          <Typography className={classes.pos}>
            {unitPrice}
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
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.pos}>
            {totalPrice}
          </Typography>
        </CardContent>
      </Card>
  );
}

