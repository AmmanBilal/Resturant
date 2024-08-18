import React from 'react'
import Aboutchef1 from '../utils/images/about-chef1.jpg'
import Aboutchef2 from '../utils/images/about-chef2.jpg'
import Reviews from '../Components/Reviews'
import ImgaeGaller from '../Components/ImgaeGaller'
import './About.css'
const About = () => {
  return (
    <div className="about-page">
      <header className='mt-5'>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light'>About</h1>
        </div>
      </header>
      <div className="container my-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis corrupti ipsa iure hic, animi, labore reprehenderit tempora voluptates officia earum recusandae consequatur voluptate, nisi aperiam voluptatibus! Dolores, distinctio repellendus!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur quisquam cupiditate, a suscipit quam esse nesciunt dolor deserunt illum quaerat saepe! Repellat illo officia, consequatur incidunt tempora cumque fugit!</p>

        <div className="row">
          <div className="col-lg-6">
            <img src={Aboutchef1} className='img-fluid my-4' alt="" />
          </div>
          <div className="col-lg-6">
            <img src={Aboutchef2} className='img-fluid my-4' alt="" />
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quam. Velit nisi fugiat nostrum animi voluptatum consequuntur, nemo architecto eum libero in facere sint aut? Magni temporibus quos officia commodi.</p>
      </div>
      <div className="bg-dark text-light">
        <ImgaeGaller/>
      </div>
      <div className="my-5">
        <Reviews/>
      </div>
  </div>
  )
}

export default About