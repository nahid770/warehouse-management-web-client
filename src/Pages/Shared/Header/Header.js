import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'


const Header = () => {
    const [user]= useAuthState(auth)

    const handleSignout = ()=>{
        signOut(auth);
      }

    return (
        <div>
    <Navbar collapseOnSelect expand="lg" className='header'>
      <Container>
        <Navbar.Brand as={Link} to="/">Moto World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
            
          </Nav>
          <Nav>

          {
              user && <>
             <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
             <Nav.Link as={Link} to="/additems">Add Items</Nav.Link>
             <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
              </>
            }

            { user? 
                <Link onClick={handleSignout} className='text-white text-decoration-none pt-2 '>Signout</Link>
              :
              <Nav.Link className='text-white fs-5' eventKey={2} as={Link} to="/login">
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




        
           

    
           </div>
        
    );
};

export default Header;