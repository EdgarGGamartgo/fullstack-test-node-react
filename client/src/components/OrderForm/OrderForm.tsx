import React from 'react';
import { useFormik } from 'formik'
import './OrderForm.scss'

interface OrderFormProps {
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

export const OrderForm = ({ }: OrderFormProps) => {

  const initialValues: any = {
    name: '',
    address: '',
    email: '',
    id: '',
    phoneNumber: ''
  }

  //@ts-ignore
  const formik: any = useFormik({
    initialValues,
    validate,
  })

  console.log(formik)
  
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
      <input name="id" id="id" value={formik.values.id} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Id here" />
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
        <button>Place Order</button>
        <a href='#'>Back to List</a>
  </div>
    {/* 
    <div className="form-container">
    <div className="form-actions">
      <h5>Customer Information</h5>
      </div>
      <div className="form-actions">
        <label>Full Name*</label>
        <input name="name" id="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Name here" />
      </div>
      {formik.touched.name && formik.errors.name ? (
          <span>{formik.errors.name}</span>
        ) : null}
      <div className="form-actions">
        <label>ID*</label>
        <input name="id" id="id" value={formik.values.id} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Id here" />
      </div>
      {formik.touched.id && formik.errors.id ? (
          <span>{formik.errors.id}</span>
        ) : null}
      <div className="form-actions">
        <label>Address*</label>
        <input name="address" id="address" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Address here" />
      </div>
      {formik.touched.address && formik.errors.address ? (
          <span>{formik.errors.address}</span>
        ) : null}
      <div className="form-actions">
        <label>Phone Number</label>
        <input name="phoneNumber" id="phoneNumber" value={formik.values.phoneNumber} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Phone Number here" />
      </div>
      <div className="form-actions">
        <label>Email*</label>
        <input name="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="*Email here" />
      </div>
      {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
      <div className="form-actions">
        <button>Place Order</button>
        <a href='#'>Back to List</a>
      </div>
    </div> */}
    </>
  );
}

