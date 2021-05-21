import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import { useHistory } from "react-router-dom";
import { fetchOrderRequest } from './../../redux/Order/actions'
import {
  getPendingSelector,
  getErrorSelector,
} from "./../../redux/Order/selectors";
import { connect } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";

import './OrderForm.scss'

interface OrderFormProps {
  productIds?: any
}

const validate = (values: any): any => {
  const errors: any = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.address) {
    errors.address = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.id) {
    errors.id = 'Required'
  }

  return errors
}

const OrderForm = ({ productIds }: OrderFormProps) => {
  const initialValues: any = {
    name: '',
    address: '',
    email: '',
    id: '',
    phoneNumber: ''
  }

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);
  const [isThanks, setIsThanks] = useState(false)

  let history = useHistory();

  useEffect(() => {
    if (!pending && !error && isThanks) {
      history.push({
        pathname: '/thanks',
        search: '',
        state: {
          updateThank: true,
        },
      });
    }
  }, [pending]);

  const placeOrder = () => {
    setIsThanks(true)
    var ids: any = {};
    productIds && productIds.productIds && productIds.productIds.forEach(function (i: any) { ids[i] = (ids[i] || 0) + 1; });
    const queryData: any = Object.entries(ids);
    const orders = queryData.map((id: number[]) => {
      return {
        id: id[0],
        quantity: id[1]
      }
    })
    const { name, id, address, phoneNumber, email } = formik.values
    const req = {
      orders,
      username: name,
      userId: id,
      address,
      phone: phoneNumber,
      email
    }
    dispatch(fetchOrderRequest(req));
  }

  //@ts-ignore
  const formik = useFormik({
    initialValues,
    validate,
  })

  return (
    <>
      <h5>Ready to Order?</h5>
      <div className="container">
        <form>
          <div className="row">

            <div className="col-75">
              <label >Customer Information</label>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Full Name*</label>
            </div>
            <div className="col-75">
              <input name="name" id="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Name here" />
            </div>
            <div className="col-25">
              {formik.touched.name && formik.errors.name ? (
                <label className='required'>{formik.errors.name}</label>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">ID*</label>
            </div>
            <div className="col-75">
              <input name="id" id="id" type="number" value={formik.values.id} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Id here" />
            </div>
            <div className="col-25">
              {formik.touched.id && formik.errors.id ? (
                <label className='required'>{formik.errors.id}</label>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Address*</label>
            </div>
            <div className="col-75">
              <input name="address" id="address" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Address here" />
            </div>
            <div className="col-25">
              {formik.touched.address && formik.errors.address ? (
                <label className='required'>{formik.errors.address}</label>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Phone Number</label>
            </div>
            <div className="col-75">
              <input name="phoneNumber" id="phoneNumber" value={formik.values.phoneNumber} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Phone Number here" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Email*</label>
            </div>
            <div className="col-75">
              <input name="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Email here" />
            </div>
            <div className="col-25">
              {formik.touched.email && formik.errors.email ? (
                <label className='required'>{formik.errors.email}</label>
              ) : null}
            </div>
          </div>
        </form>
      </div>
      <div className="form-actions">
        <button disabled={formik.isValid && formik.values.id !== '' ? false : true} onClick={placeOrder}>Place Order</button>
        <a href='/'>Back to List</a>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    productIds: state.foodShop,
  }
}

export default connect(mapStateToProps, null)(OrderForm)