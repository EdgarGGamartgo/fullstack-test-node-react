import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { updateProductToCart } from './../../redux/FoodShop/foodShopActions'

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
  id: any, productIds: any, updateCart: any, name: string, Categories: string, price: string, quantity: string, totalProductPrice: string
}

const ProductCart = ({ id, productIds, updateCart, name, Categories, price, quantity, totalProductPrice }: ProductCartProps) => {
  const classes = useStyles();

  const handleSelect = (e: any) => {
    const diffIds = productIds && productIds.productIds.filter((i:any) => i != +id)
     for (let i = 1; i <= +e.target.value; i++) {
       diffIds.push(id)
     }
    updateCart(diffIds)
  }

  const renderQuantity = () => {
    let options = []
    for (let i =1; i <= (+quantity + 5); i++) {
      if (i === +quantity) {
        options.push(<option key={i} selected={true} value={i}>{i}</option>)
      } else {
        options.push(<option key={i} value={i}>{i}</option>)
      }
    }
    return options
  }

  const handleClick = () => {
    const diffIds = productIds && productIds.productIds.filter((i:any) => i != id)
    updateCart(diffIds)
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
            <select name="quantities" id="quantities" onChange={handleSelect}>
               {renderQuantity() && renderQuantity().map(option => option)}
            </select>
            <img onClick={handleClick} width={'20px'} height={'20px'} className='logo' src='./trashIcon.jpg' alt="logo" />
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCart: (ids: any) => dispatch(updateProductToCart(ids))
  }
}

const mapStateToProps = (state: any) => {
  return {
      productIds: state.foodShop,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart)