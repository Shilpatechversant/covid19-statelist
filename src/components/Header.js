import React,{Component} from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Header extends Component
{
   render(){
    return(
        <Navbar bg="primary" expand="lg">
            <Container>
              <Navbar.Brand href="#home" className="clogo">Covid 19</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link className="nav-link" to="/india" >India</Link>&nbsp;
                    <Link className="nav-link" to="/world" >World</Link>
       
                      </Nav>
                  </Navbar.Collapse>
             </Container>
        </Navbar>
    );
   }
}

export default Header;

