import React from 'react'
import './Contact.css'
import ContactInfo from '../Components/ContactInfo'
import { Form } from 'react-bootstrap'
import Reviews from '../Components/Reviews'
const Contact = () => {
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
                <ContactInfo/>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Form>
              <Form.Group>
              <div className='col-md-6'>
                <Form.Label htmlFor='first-name'>
                  Frist Name
                </Form.Label>
                <Form.Control type='text' id='first-name'>
                </Form.Control>
              </div>

              <div className='col-md-6'>
                <Form.Label htmlFor='last-name'>
                  Last Name
                </Form.Label>
                <Form.Control type='text' id='last-name'>
                </Form.Control>
              </div>
              </Form.Group>

              <Form.Group>
              <div className='col-md-6'>
                <Form.Label htmlFor='email-address'>
                 Email Address
                </Form.Label>
                <Form.Control type='text' id='email-address'>
                </Form.Control>
              </div>

              <div className='col-md-6'>
                <Form.Label htmlFor='phone-number'>
                  Phone Number
                </Form.Label>
                <Form.Control type='text' id='phone-number'>
                </Form.Control>
              </div>
              </Form.Group>
              <Form.Group className='row mb-3'>
                    <div className='col-md-6'>
                        <Form.Label htmlFor='date'>Date</Form.Label>
                        <Form.Control type='date' id='date' />
                    </div>
                    <div className='col-md-6'>
                        <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                        <Form.Control type='number' id='guests-number' />
                    </div>
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Form.Label htmlFor='comments'>Comments</Form.Label>
                    <Form.Control type='textarea' id='comments' />
                </Form.Group>

          <button type='button' className='btn btn-success btn-lg mb-3'>Submitt</button>

                      </Form>
                    </div>
                  </div>
                </div>
          <div className="bg-dark text-light py-5">
            <Reviews/>
          </div>
              </div>
  )
}

export default Contact