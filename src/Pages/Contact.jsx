import React from 'react';
import './Contact.css';
import ContactInfo from '../Components/ContactInfo';
import { Form } from 'react-bootstrap';
import Reviews from '../Components/Reviews';
import { useFormik } from 'formik';
import {ValidationSchema} from '../schemas/index'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  date: '',
  guests_number: '',
  comments:''
};

const Contact = () => {
  const { values,errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:ValidationSchema,
    onSubmit: (values,action) => {
      console.log(
        "line 16 ", values

      );
      action.resetForm()
      
    }
  });

 

  return (
    <div className='contact-page'>
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light'>Contact</h1>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <div className='col-md-6'>
                  <Form.Label htmlFor='first_name'>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    autoComplete='off'
                    name='first_name'
                    id='first_name'
                    placeholder='Enter your first name'
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.first_name && touched.first_name ? ( 
                    <p className='form-error text-danger'>{errors.first_name}</p>
                  ) : null}
                </div>

                <div className='col-md-6'>
                  <Form.Label htmlFor='last_name'>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    autoComplete='off'
                    name='last_name'
                    id='last_name'
                    placeholder='Enter your last name'
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.last_name && touched.last_name ? (
                    <p className='form-error text-danger'>{errors.last_name}</p>
                  ) : null}                
                </div>
              </Form.Group>

              <Form.Group>
                <div className='col-md-6'>
                  <Form.Label htmlFor='email_address'>Email Address</Form.Label>
                  <Form.Control
                    type='text'
                    autoComplete='off'
                    name='email'
                    id='email_address'
                    placeholder='Enter your email address'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email?(
                    <p className='form-error text-danger'>{errors.email}</p>
                  ) : null}                
                </div>

                <div className='col-md-6'>
                  <Form.Label htmlFor='phone_number'>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    autoComplete='off'
                    name='phone_number'
                    id='phone_number'
                    placeholder='Enter your phone number'
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone_number && touched.phone_number?(
                    <p className='form-error text-danger'>{errors.phone_number}</p>
                  ) : null}                
                </div>
              </Form.Group>

              <Form.Group className='row mb-3'>
                <div className='col-md-6'>
                  <Form.Label htmlFor='date'>Date</Form.Label>
                  <Form.Control
                    type='date'
                    autoComplete='off'
                    name='date'
                    id='date'
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.date && touched.date?(
                    <p className='form-error text-danger'>{errors.date}</p>
                  ) : null}               
                </div>
                <div className='col-md-6'>
                  <Form.Label htmlFor='guests_number'>Number Of Guests</Form.Label>
                  <Form.Control
                    type='number'
                    autoComplete='off'
                    name='guests_number'
                    id='guests_number'
                    placeholder='Number of guests'
                    value={values.guests_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.guests_number && touched.guests_number?(
                    <p className='form-error text-danger'>{errors.guests_number}</p>
                  ) : null}

                </div>
              </Form.Group>

              <Form.Group className='mb-4'>
                <Form.Label htmlFor='comments'>Comments</Form.Label>
                <Form.Control
                  as='textarea'
                  autoComplete='off'
                  name='comments'
                  id='comments'
                  placeholder='Enter any additional comments'
                  value={values.comments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>

              <button type='submit' className='btn btn-success btn-lg mb-3'>Submit</button>
            </Form>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
}

export default Contact;
