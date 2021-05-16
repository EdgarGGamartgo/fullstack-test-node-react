import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Header } from './../../components'
import './ProductCard.scss'

const useStyles = makeStyles({
    root: {
      width: '48%',
      marginBottom: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 10,
      color: 'black',
      fontWeight: 'bold'
    },
    pos: {
      marginBottom: 12,
      fontSize: 8,
    },
    body: {
      fontSize: 8,
    }
  });

interface ProductCardProps {
    title: string, category: string, body: string, price: string
}

export const ProductCard = ({ title, category, body, price }: ProductCardProps) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.pos}>
            {category}
          </Typography>
          <Typography className={classes.body}>
            {body}
          </Typography>
        </CardContent>
        <div className='card-action'>
          <button >Add to Cart</button>
          <span className='price'>{price}</span>
        </div>
      </Card>
    );
}

