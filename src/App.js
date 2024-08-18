import logo from './logo.svg';
import './App.css';
import { Link,Routes,Route } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav'
// import Navbar  from 'react-bootstrap/Navbar';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  return (
    
    <>
    <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className='navbar-brand text-success fw-semibold'>
            React Resturant
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     
     <footer className='bg-body-tertiary'>
      <p className='p-3 m-0 text-center'>copyright @ made by AmmanBilal</p>
     </footer>
    
    </>
  );
}

export default App;
