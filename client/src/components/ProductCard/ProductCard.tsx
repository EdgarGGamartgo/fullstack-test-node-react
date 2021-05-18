import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { addProductToCart } from './../../redux'

import './ProductCard.scss'

const useStyles = makeStyles({
    root: {
      width: '49%',
      marginBottom: 20,
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
  id: number, name: string, Categories: object[], summary: string, price: string, addProductIdToCart: any
}

const ProductCard = ({ name, Categories, summary, price, addProductIdToCart, id }: ProductCardProps) => {
    const classes = useStyles();
    const getReadableCategories = () => {
      let text = ''
      Categories.forEach((category: any) => {
        text += category.name + ', '
      })
      return text
    }

    const handleClick = () => {
      addProductIdToCart(id)
    }

    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {name}
          </Typography>
          <Typography className={classes.pos}>
            {getReadableCategories()}
          </Typography>
          <Typography className={classes.body}>
            {summary}
          </Typography>
        </CardContent>
        <div className='card-action'>
          <button onClick={handleClick}>Add to Cart</button>
          <span className='price'>{price}</span>
        </div>
      </Card>
    );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      addProductIdToCart: (productId: number) => dispatch(addProductToCart(productId))
  }
}

const mapStateToProps = (state: any) => {
      return {
          productIds: state.foodShop,
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
