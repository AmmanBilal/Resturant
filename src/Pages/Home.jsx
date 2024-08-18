import React from 'react'
import MenuBtn from '../Components/MenuBtn'
import ImageGallery from '../Components/ImageGallery'
import ContactInfo from '../Components/ContactInfo'
import ContactImage from '../utils/images/contact-img.jpg'
import './Home.css'
import { Link } from 'react-router-dom'; 
import AboutImg from '../utils/images/about-img.jpg'
const Home = () => {
  return (
    // home page
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
          <div className='container'>
            <div className="row">
              <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                <h2 className='mb-0 text-black fw-bold'>Welcom To</h2>
                <h1 className='mb-3 text-black fw-bold text-center text-sm-start'>React Resturant</h1>
                <MenuBtn/>
              </div>
            </div>
          </div>
        </header>

        {/* About us */}
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img src={AboutImg} alt="about img" className='img-fluid w-50' />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptates ipsam molestias placeat ex vel voluptate delectus quis, quibusdam voluptatibus blanditiis odio quod velit at a nesciunt quae corrupti sunt!</p>
              <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolores rem recusandae explicabo et sed ipsa cumque reiciendis vitae voluptas vero, mollitia corporis. Illum alias quo sed reprehenderit! Animi, adipisci!</p>
              <Link>
              <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="menu-section py-5 text-light shadow">
            <div className="container d-flex flex-column align-items-center">
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
              <div className="row mb-5 w-100">
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                  <h3 className='fs-2 mb-5 '>Food</h3>
                  <ul className='px-0'>
                    <li className='d-flex justify-content-between'>
                      <p className='fs-3 mx-2'>English brekfast</p>
                      <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                      <p className='fs-3 mx-2'>Spicy Beef</p>
                      <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                      <p className='fs-3 mx-2'>Saghetti </p>
                      <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
                    </li>
                  </ul>
                </div>
                {/* drinks */}
                <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Coffee</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$2</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Juice</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$1</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spirits</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$5</p>
                                </li>
                            </ul>
                        </div>
              </div>
                      <MenuBtn/>  
            </div>
        </div>
        <ImageGallery/>

          <div className="bg-dark text-light py-5 shadow">
                        <div className="continer">
                          <div className="row">
                          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                          <ContactInfo/>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                              <img src={ContactImage} alt="" className='img-fluid w-50'/>
                            </div>
                          </div>
                        </div>
                      </div>

    </div>
  )
}

export default Home